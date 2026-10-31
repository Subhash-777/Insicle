import fs from 'node:fs';

async function main() {
  const dir = 'qa-screenshots/round-2';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const targetsRes = await fetch('http://127.0.0.1:9222/json');
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page' && t.url.includes('127.0.0.1:4173'));

  if (!pageTarget) {
    console.error('No page target found on 127.0.0.1:4173');
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
  await send('DOM.enable');

  const BASE_URL = 'http://127.0.0.1:4173';

  // Helper for capturing viewport screenshot
  async function captureViewport(filename, width, height, isMobile = false) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile,
    });
    await new Promise(r => setTimeout(r, 400));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(`${dir}/${filename}`, buf);
    console.log(`[Viewport] Saved ${dir}/${filename} (${width}x${height}, ${(buf.length/1024).toFixed(1)} KB)`);
  }

  // Helper for capturing full-page screenshot
  async function captureFullPage(filename, width, isMobile = false) {
    // Reset to initial height
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: isMobile,
    });
    await new Promise(r => setTimeout(r, 600));

    // Get total scroll height
    const evalRes = await send('Runtime.evaluate', {
      expression: 'Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)',
      returnByValue: true,
    });
    const fullHeight = Math.min(evalRes.result.value || 900, 15000); // safety cap

    // Override height to full page
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height: fullHeight,
      deviceScaleFactor: 1,
      mobile: isMobile,
    });
    await new Promise(r => setTimeout(r, 600));

    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    const buf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(`${dir}/${filename}`, buf);
    console.log(`[FullPage] Saved ${dir}/${filename} (${width}x${fullHeight}, ${(buf.length/1024).toFixed(1)} KB)`);

    // Reset back to standard viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: isMobile,
    });
  }

  // 1. Homepage at all 7 required viewports
  console.log('=== Capturing Homepage at All 7 Breakpoints ===');
  await send('Page.navigate', { url: `${BASE_URL}/` });
  await new Promise(r => setTimeout(r, 1200));

  const homepageBreakpoints = [
    { width: 360, height: 740, isMobile: true, name: 'home-360-viewport.png' },
    { width: 390, height: 844, isMobile: true, name: 'home-390-viewport.png' },
    { width: 430, height: 932, isMobile: true, name: 'home-430-viewport.png' },
    { width: 768, height: 1024, isMobile: false, name: 'home-768-viewport.png' },
    { width: 1024, height: 768, isMobile: false, name: 'home-1024-viewport.png' },
    { width: 1440, height: 900, isMobile: false, name: 'home-1440-viewport.png' },
    { width: 1920, height: 1080, isMobile: false, name: 'home-1920-viewport.png' },
  ];

  for (const bp of homepageBreakpoints) {
    await captureViewport(bp.name, bp.width, bp.height, bp.isMobile);
  }

  // Full-page homepage captures
  await captureFullPage('home-1440-full.png', 1440, false);
  await captureFullPage('home-390-full.png', 390, true);

  // 2. All public routes at Desktop (1440px) and Mobile (390px)
  console.log('=== Capturing All Routes (Full-Page Desktop & Mobile) ===');
  const routes = [
    { path: '/about', baseName: 'about' },
    { path: '/services', baseName: 'services' },
    { path: '/services/application-development', baseName: 'service-detail' },
    { path: '/solutions', baseName: 'solutions' },
    { path: '/solutions/crm', baseName: 'solution-detail' },
    { path: '/industries', baseName: 'industries' },
    { path: '/portfolio', baseName: 'portfolio' },
    { path: '/portfolio/semantic-graph-zero-trust', baseName: 'case-study' },
    { path: '/careers', baseName: 'careers' },
    { path: '/contact', baseName: 'contact' },
    { path: '/non-existent-page', baseName: 'not-found' },
  ];

  for (const r of routes) {
    console.log(`Navigating to ${r.path}...`);
    await send('Page.navigate', { url: `${BASE_URL}${r.path}` });
    await new Promise(res => setTimeout(res, 1000));

    // Scroll to bottom and top to ensure Framer Motion visible triggers
    await send('Runtime.evaluate', {
      expression: `
        window.scrollTo(0, document.body.scrollHeight / 2);
        setTimeout(() => window.scrollTo(0, 0), 200);
      `
    });
    await new Promise(res => setTimeout(res, 600));

    // Desktop 1440px full page
    await captureFullPage(`${r.baseName}-1440-full.png`, 1440, false);

    // Mobile 390px full page
    await captureFullPage(`${r.baseName}-390-full.png`, 390, true);
  }

  // 3. Interaction States
  console.log('=== Capturing Interactive States ===');

  // State A: Services Mega Menu open on desktop (1440px)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `${BASE_URL}/` });
  await new Promise(res => setTimeout(res, 1000));
  // Click on Services dropdown trigger button
  await send('Runtime.evaluate', {
    expression: `
      const btns = Array.from(document.querySelectorAll('button'));
      const servicesBtn = btns.find(b => b.textContent && b.textContent.includes('Services'));
      if (servicesBtn) servicesBtn.click();
    `
  });
  await new Promise(res => setTimeout(res, 600));
  await captureViewport('interactive-mega-menu-open-1440.png', 1440, 900, false);

  // State B: Mobile Navigation Drawer open (390px)
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: `${BASE_URL}/` });
  await new Promise(res => setTimeout(res, 1200));
  await send('Runtime.evaluate', {
    expression: `
      const toggle = document.querySelector('button[class*="mobileToggle"]');
      if (toggle) toggle.click();
    `
  });
  await new Promise(res => setTimeout(res, 700));
  await captureViewport('interactive-mobile-drawer-open-390.png', 390, 844, true);

  // State C: Mobile Services Accordion open inside drawer (390px)
  await send('Runtime.evaluate', {
    expression: `
      const servicesSub = document.querySelector('button[class*="mobileNavToggle"]');
      if (servicesSub) servicesSub.click();
    `
  });
  await new Promise(res => setTimeout(res, 700));
  await captureViewport('interactive-mobile-subaccordion-open-390.png', 390, 844, true);

  // State D: Contact Form Validation Error state (390px and 1440px)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `${BASE_URL}/contact` });
  await new Promise(res => setTimeout(res, 1000));
  // Click submit without filling form
  await send('Runtime.evaluate', {
    expression: `
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    `
  });
  await new Promise(res => setTimeout(res, 600));
  await captureViewport('interactive-contact-errors-1440.png', 1440, 1000, false);

  // State E: Portfolio Category Filter Clicked ('AI & Business Intelligence')
  await send('Page.navigate', { url: `${BASE_URL}/portfolio` });
  await new Promise(res => setTimeout(res, 1000));
  await send('Runtime.evaluate', {
    expression: `
      const buttons = Array.from(document.querySelectorAll('button'));
      const aiBtn = buttons.find(b => b.textContent && b.textContent.includes('AI & BI'));
      if (aiBtn) aiBtn.click();
    `
  });
  await new Promise(res => setTimeout(res, 600));
  await captureViewport('interactive-portfolio-filter-ai-1440.png', 1440, 900, false);

  // State F: Services FAQ Accordion open
  await send('Page.navigate', { url: `${BASE_URL}/services` });
  await new Promise(res => setTimeout(res, 1200));
  await send('Runtime.evaluate', {
    expression: `
      const faqBtn = document.querySelector('button[class*="faqQuestionBtn"]');
      if (faqBtn) {
        faqBtn.scrollIntoView({ block: 'center' });
      }
    `
  });
  await new Promise(res => setTimeout(res, 600));
  await captureViewport('interactive-services-faq-open-1440.png', 1440, 900, false);

  console.log('All Round 2 screenshots captured successfully!');
  ws.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
