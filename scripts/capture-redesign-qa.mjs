import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const outDir = path.resolve('docs/verification');
fs.mkdirSync(outDir, { recursive: true });

// Start vite preview server
const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
  stdio: 'pipe',
  shell: true,
});

await new Promise((resolve) => setTimeout(resolve, 2000));

try {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const routes = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'solutions', path: '/solutions' },
    { name: 'industries', path: '/industries' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'careers', path: '/careers' },
    { name: 'contact', path: '/contact' },
  ];

  const viewports = [
    { width: 375, height: 812, label: '375' },
    { width: 1440, height: 900, label: '1440' },
  ];

  for (const route of routes) {
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:4173${route.path}`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 600));

      const screenshotPath = path.join(outDir, `${route.name}-${vp.label}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot: ${screenshotPath}`);
      await page.close();
    }
  }

  // Home extra breakpoints (768 and 1024)
  for (const width of [768, 1024]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800 });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    const screenshotPath = path.join(outDir, `home-${width}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);
    await page.close();
  }

  // Reduced motion screenshot
  {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    const screenshotPath = path.join(outDir, 'reduced-motion-emulation.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Saved reduced motion screenshot: ${screenshotPath}`);
    await page.close();
  }

  await browser.close();
} finally {
  preview.kill();
}
