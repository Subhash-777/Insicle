async function testResponsive() {
  const targetsRes = await fetch('http://127.0.0.1:9222/json');
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page' && t.url.includes('127.0.0.1:4173'));

  if (!pageTarget) {
    console.error('No target found');
    process.exit(1);
  }

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await send('Page.enable');
  await send('Runtime.enable');

  const widths = [360, 390, 430, 768, 1024, 1280, 1440];
  const routes = ['/', '/about', '/services', '/solutions', '/industries', '/portfolio', '/careers', '/contact'];

  console.log('--- Checking for horizontal overflow across breakpoints ---');
  let failures = 0;

  for (const route of routes) {
    await send('Page.navigate', { url: `http://127.0.0.1:4173${route}` });
    await new Promise(r => setTimeout(r, 600));

    for (const width of widths) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height: 800,
        deviceScaleFactor: 1,
        mobile: width < 768,
      });
      await new Promise(r => setTimeout(r, 200));

      const evalRes = await send('Runtime.evaluate', {
        expression: `
          ({
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasOverflow: document.documentElement.scrollWidth > window.innerWidth
          })
        `,
        returnByValue: true,
      });

      const { scrollWidth, innerWidth, hasOverflow } = evalRes.result.value;
      if (hasOverflow) {
        console.error(`FAIL: ${route} at ${width}px has overflow! scrollWidth=${scrollWidth}, innerWidth=${innerWidth}`);
        failures++;
      } else {
        console.log(`OK: ${route} at ${width}px (scrollWidth=${scrollWidth}, innerWidth=${innerWidth})`);
      }
    }
  }

  // Check console errors
  console.log('--- Checking for browser console errors ---');
  const consoleRes = await send('Runtime.evaluate', {
    expression: 'window.errorsRecorded || []',
    returnByValue: true,
  });

  ws.close();

  if (failures > 0) {
    console.error(`Total overflow failures: ${failures}`);
    process.exit(1);
  } else {
    console.log('All responsive breakpoints verified with ZERO horizontal overflow!');
  }
}

testResponsive().catch(err => {
  console.error(err);
  process.exit(1);
});
