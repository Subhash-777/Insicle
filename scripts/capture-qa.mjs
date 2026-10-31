import fs from 'node:fs';

async function main() {
  const targetsRes = await fetch('http://127.0.0.1:9222/json');
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page' && t.url.includes('127.0.0.1:4173'));

  if (!pageTarget) {
    console.error('No target found for 127.0.0.1:4173');
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

  const testRoutes = [
    { name: 'home-desktop', path: '/', width: 1440, height: 900 },
    { name: 'home-mobile', path: '/', width: 390, height: 844, isMobile: true },
    { name: 'about-desktop', path: '/about', width: 1440, height: 900 },
    { name: 'services-desktop', path: '/services', width: 1440, height: 900 },
    { name: 'service-detail', path: '/services/application-development', width: 1440, height: 900 },
    { name: 'solutions-desktop', path: '/solutions', width: 1440, height: 900 },
    { name: 'solution-detail', path: '/solutions/crm', width: 1440, height: 900 },
    { name: 'industries-desktop', path: '/industries', width: 1440, height: 900 },
    { name: 'portfolio-desktop', path: '/portfolio', width: 1440, height: 900 },
    { name: 'case-study', path: '/portfolio/semantic-graph-zero-trust', width: 1440, height: 900 },
    { name: 'careers-desktop', path: '/careers', width: 1440, height: 900 },
    { name: 'contact-desktop', path: '/contact', width: 1440, height: 900 },
    { name: 'not-found', path: '/non-existent-page', width: 1440, height: 900 },
  ];

  if (!fs.existsSync('qa-screenshots')) {
    fs.mkdirSync('qa-screenshots');
  }

  for (const route of testRoutes) {
    console.log(`Testing route: ${route.path} (${route.name})...`);

    // Set viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width: route.width,
      height: route.height,
      deviceScaleFactor: 1,
      mobile: !!route.isMobile,
    });

    // Navigate
    await send('Page.navigate', { url: `http://127.0.0.1:4173${route.path}` });
    await new Promise(r => setTimeout(r, 1200));

    // Scroll down and up to trigger viewport animations
    await send('Runtime.evaluate', {
      expression: `
        window.scrollTo(0, document.body.scrollHeight / 2);
        setTimeout(() => window.scrollTo(0, 0), 200);
      `,
    });
    await new Promise(r => setTimeout(r, 800));

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(`qa-screenshots/${route.name}.png`, buffer);
    console.log(`Saved qa-screenshots/${route.name}.png (${buffer.length} bytes)`);
  }

  // Also test full-page home scroll
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
  await new Promise(r => setTimeout(r, 1200));
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 900)' });
  await new Promise(r => setTimeout(r, 600));
  const shotServices = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('qa-screenshots/home-services-scroll.png', Buffer.from(shotServices.data, 'base64'));

  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1800)' });
  await new Promise(r => setTimeout(r, 600));
  const shotAI = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('qa-screenshots/home-ai-scroll.png', Buffer.from(shotAI.data, 'base64'));

  ws.close();
  console.log('QA screenshot capture complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
