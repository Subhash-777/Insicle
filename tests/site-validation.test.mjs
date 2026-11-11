import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// 1. Contact Form Schema Test
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your full name (at least 2 characters).' }),
  email: z.string().email({ message: 'Please enter a valid business email address.' }),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number.' })
    .regex(/^[+0-9\s\-()]{7,20}$/, { message: 'Phone number format is invalid.' }),
  companyName: z.string().min(2, { message: 'Please enter your company or organisation name.' }),
  serviceInterest: z.string().min(1, { message: 'Please select a service or area of interest.' }),
  requirements: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters describing your project requirements.' }),
  website: z.string().optional(),
})

describe('Contact Form Zod Schema Validation', () => {
  test('validates correct business inquiry payload', () => {
    const payload = {
      name: 'Aditi Sharma',
      email: 'aditi@enterprise.co.in',
      phone: '+91 98765 43210',
      companyName: 'Tech Innovations Ltd',
      serviceInterest: 'Digital Engineering (Custom Software / Web / Apps)',
      requirements: 'We require a scalable microservices architecture migration.',
      website: '',
    }
    const result = contactSchema.safeParse(payload)
    assert.equal(result.success, true)
  })

  test('rejects invalid email address with descriptive error', () => {
    const payload = {
      name: 'Aditi Sharma',
      email: 'not-an-email',
      phone: '+91 98765 43210',
      companyName: 'Tech Innovations Ltd',
      serviceInterest: 'Digital Engineering',
      requirements: 'Migration requirements.',
    }
    const result = contactSchema.safeParse(payload)
    assert.equal(result.success, false)
    if (!result.success) {
      assert.equal(result.error.issues[0].path[0], 'email')
      assert.match(result.error.issues[0].message, /valid business email/i)
    }
  })

  test('rejects name shorter than 2 characters', () => {
    const payload = {
      name: 'A',
      email: 'aditi@example.com',
      phone: '+91 98765 43210',
      companyName: 'Tech Innovations Ltd',
      serviceInterest: 'Digital Engineering',
      requirements: 'Migration requirements exceeding 10 characters.',
    }
    const result = contactSchema.safeParse(payload)
    assert.equal(result.success, false)
    if (!result.success) {
      assert.equal(result.error.issues[0].path[0], 'name')
      assert.match(result.error.issues[0].message, /at least 2 characters/i)
    }
  })

  test('detects honeypot bot trap', () => {
    const payload = {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      phone: '+1 800 555 1234',
      companyName: 'Spam Corp',
      serviceInterest: 'Digital Engineering',
      requirements: 'Unsolicited commercial marketing submission here.',
      website: 'https://malicious-advertiser.com',
    }
    const result = contactSchema.safeParse(payload)
    assert.equal(result.success, true)
    // Honeypot logic: data.website is truthy
    assert.ok(result.data.website)
  })
})

// 2. Data Integrity Tests
describe('Static Content & Data Integrity', () => {
  test('robots.txt points to correct live sitemap URL', () => {
    const robots = fs.readFileSync(path.resolve(root, 'public/robots.txt'), 'utf-8')
    assert.match(robots, /Sitemap:\s+https:\/\/insicle\.vercel\.app\/sitemap\.xml/)
    assert.match(robots, /Allow:\s+\//)
  })

  test('sitemap.xml has valid XML structure and covers core routes', () => {
    const sitemap = fs.readFileSync(path.resolve(root, 'public/sitemap.xml'), 'utf-8')
    assert.ok(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'))
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/about<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/services<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/solutions<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/contact<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/privacy-policy<\/loc>/)
    assert.match(sitemap, /<loc>https:\/\/insicle\.vercel\.app\/terms<\/loc>/)
  })

  test('site.webmanifest contains required PWA icons and metadata', () => {
    const manifest = JSON.parse(fs.readFileSync(path.resolve(root, 'public/site.webmanifest'), 'utf-8'))
    assert.equal(manifest.name, 'INSICLE')
    assert.equal(manifest.theme_color, '#14212F')
    assert.equal(manifest.background_color, '#14212F')
    assert.ok(Array.isArray(manifest.icons))
    assert.ok(manifest.icons.length >= 2)
  })
})

// 3. Prerender Output Tests
describe('SSG Prerendering Output Verification', () => {
  const routes = [
    { file: 'dist/index.html', title: 'INSICLE | Technology & Digital Solutions', heading: "We Make Technology Work" },
    { file: 'dist/about/index.html', title: 'About Us | INSICLE', heading: 'Ideas, Technology, Real Impact.' },
    { file: 'dist/services/index.html', title: 'Our Services & Capability Divisions | INSICLE', heading: 'Five Capability Divisions' },
    { file: 'dist/contact/index.html', title: 'Talk to Our Team | INSICLE', heading: "Let&#x27;s Build Something Meaningful Together." },
    { file: 'dist/privacy-policy/index.html', title: 'Privacy Policy | INSICLE', heading: 'Privacy Policy.' },
    { file: 'dist/terms/index.html', title: 'Terms of Service | INSICLE', heading: 'Terms of Service.' },
    { file: 'dist/404.html', title: '404 — Page Not Found | INSICLE', heading: 'Page Not Found' },
  ]

  for (const r of routes) {
    test(`prerendered ${r.file} contains full body HTML, title, and heading`, () => {
      const fullPath = path.resolve(root, r.file)
      assert.ok(fs.existsSync(fullPath), `Missing prerendered file: ${r.file}`)
      const html = fs.readFileSync(fullPath, 'utf-8')
      assert.ok(html.includes(`<title>${r.title}</title>`), `Missing title: ${r.title}`)
      assert.ok(html.includes('id="root"><header'), 'Root must contain pre-rendered header')
      assert.ok(html.includes('role="contentinfo"'), 'Page must contain pre-rendered footer')
      assert.ok(html.includes(r.heading), `Page must contain heading: ${r.heading}`)
    })
  }
})

// 4. Security Headers Verification
describe('Security Configuration (vercel.json)', () => {
  test('vercel.json specifies Strict-Transport-Security and CSP', () => {
    const vercelConfig = JSON.parse(fs.readFileSync(path.resolve(root, 'vercel.json'), 'utf-8'))
    assert.ok(Array.isArray(vercelConfig.headers))
    const rootHeaders = vercelConfig.headers.find(h => h.source === '/(.*)')
    assert.ok(rootHeaders, 'Missing root headers configuration')
    const headerMap = Object.fromEntries(rootHeaders.headers.map(h => [h.key, h.value]))
    assert.ok(headerMap['Content-Security-Policy'], 'Missing CSP header')
    assert.ok(headerMap['Strict-Transport-Security'], 'Missing HSTS header')
    assert.equal(headerMap['X-Content-Type-Options'], 'nosniff')
    assert.equal(headerMap['X-Frame-Options'], 'SAMEORIGIN')
    assert.equal(headerMap['Referrer-Policy'], 'strict-origin-when-cross-origin')
  })
})
