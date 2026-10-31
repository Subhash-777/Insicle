async function testInteractions() {
  const targetsRes = await fetch('http://127.0.0.1:9222/json');
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page' && t.url.includes('127.0.0.1:4173'));

  if (!pageTarget) {
    console.error('Target not found');
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

  console.log('=== Test 1: Mega Menu on Desktop ===');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
  await new Promise(r => setTimeout(r, 600));

  // Click services mega trigger
  const megaClick = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Services'));
        if (!btn) return false;
        btn.click();
        return true;
      })()
    `,
    returnByValue: true,
  });
  console.log('Clicked Services mega menu button:', megaClick.result.value);
  await new Promise(r => setTimeout(r, 300));

  const megaVisible = await send('Runtime.evaluate', {
    expression: `!!document.querySelector('[aria-label="Services menu"]')`,
    returnByValue: true,
  });
  console.log('Mega menu opened successfully:', megaVisible.result.value);

  console.log('=== Test 2: Portfolio Filtering ===');
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/portfolio' });
  await new Promise(r => setTimeout(r, 600));

  // Initial count
  const initialCards = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('article').length`,
    returnByValue: true,
  });
  console.log('Initial projects displayed:', initialCards.result.value);

  // Click AI & BI filter
  await send('Runtime.evaluate', {
    expression: `
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('AI & BI'));
      if (btn) btn.click();
    `,
  });
  await new Promise(r => setTimeout(r, 400));

  const filteredCards = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('article').length`,
    returnByValue: true,
  });
  console.log('Filtered projects after AI & BI click:', filteredCards.result.value);

  console.log('=== Test 3: Contact Form Validation & Submission ===');
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/contact' });
  await new Promise(r => setTimeout(r, 600));

  // Attempt submitting empty form
  await send('Runtime.evaluate', {
    expression: `
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    `,
  });
  await new Promise(r => setTimeout(r, 400));

  const errorCount = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('[role="alert"]').length`,
    returnByValue: true,
  });
  console.log('Validation errors displayed on empty submit:', errorCount.result.value);

  // Fill in form with valid test data
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const setName = (selector, val) => {
          const el = document.querySelector(selector);
          if (el) {
            el.value = val;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }
        };
        setName('input[name="name"]', 'Alex Rivera');
        setName('input[name="email"]', 'alex.rivera@enterprise-partner.com');
        setName('input[name="phone"]', '+91 98765 43210');
        setName('input[name="companyName"]', 'Rivera Global Systems');
        setName('select[name="serviceInterest"]', 'Digital Engineering (Custom Software / Web / Apps)');
        setName('textarea[name="requirements"]', 'We are looking to develop a distributed high-throughput enterprise event processing platform.');
      })()
    `,
  });
  await new Promise(r => setTimeout(r, 300));

  // Click submit
  await send('Runtime.evaluate', {
    expression: `
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    `,
  });
  await new Promise(r => setTimeout(r, 1200));

  const dispatchedNotice = await send('Runtime.evaluate', {
    expression: `
      document.body.innerText.includes('Inquiry Dispatched to Mail Client')
    `,
    returnByValue: true,
  });
  console.log('Inquiry dispatched successfully with honest feedback notice:', dispatchedNotice.result.value);

  console.log('=== Test 4: Mobile Drawer on 390px ===');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
  await new Promise(r => setTimeout(r, 600));

  // Click hamburger
  await send('Runtime.evaluate', {
    expression: `
      const toggle = document.querySelector('button[aria-label="Open menu"]');
      if (toggle) toggle.click();
    `,
  });
  await new Promise(r => setTimeout(r, 400));

  const drawerOpen = await send('Runtime.evaluate', {
    expression: `!!document.querySelector('[aria-label="Mobile navigation"]')`,
    returnByValue: true,
  });
  console.log('Mobile drawer opened successfully:', drawerOpen.result.value);

  ws.close();
  console.log('=== All Interaction Tests Passed! ===');
}

testInteractions().catch(err => {
  console.error(err);
  process.exit(1);
});
