import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.resolve(root, 'dist')

const template = fs.readFileSync(path.resolve(dist, 'index.html'), 'utf-8')
const { render, routesMeta } = await import(path.resolve(dist, 'server/entry-server.js'))

console.log('Starting static HTML prerendering...')

for (const [route, meta] of Object.entries(routesMeta)) {
  const { appHtml, title, description } = render(route)
  const canonicalUrl = `https://insicle.vercel.app${route === '/' ? '/' : route}`

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${description}" />`
    )

  const filePath =
    route === '/'
      ? path.resolve(dist, 'index.html')
      : route === '/404'
        ? path.resolve(dist, '404.html')
        : path.resolve(dist, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html, 'utf-8')
  console.log(`  ✓ Prerendered ${route} -> ${path.relative(root, filePath)} (${html.length} bytes)`)
}

// Clean up the server bundle so dist stays clean
fs.rmSync(path.resolve(dist, 'server'), { recursive: true, force: true })
console.log('✓ Static prerendering complete.')
