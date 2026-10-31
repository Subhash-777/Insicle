import fs from 'node:fs';

async function captureFooterElement() {
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

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
  await new Promise(r => setTimeout(r, 1200));

  // Scroll to absolute bottom and get scroll pos
  await send('Runtime.evaluate', {
    expression: `
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView();
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  // Capture viewport
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const buffer = Buffer.from(shot.data, 'base64');
  fs.writeFileSync('qa-screenshots/footer-in-view.png', buffer);
  console.log('Saved qa-screenshots/footer-in-view.png');

  ws.close();
}

captureFooterElement().catch(console.error);
