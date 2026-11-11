# Site Inventory — INSICLE
_Generated: P0 Audit, 2026-11-11_

## Route Map (from App.tsx)

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Home` | Landing page — hero, services bento, why principles, AI showcase, enterprise preview, industries grid, portfolio preview |
| `/about` | `About` | Company overview, mission/vision, values, capability list |
| `/services` | `Services` | Five capability divisions overview + FAQ |
| `/services/:slug` | `ServiceDetail` | Individual service detail pages (e.g. `/services/application-development`) |
| `/solutions` | `Solutions` | Enterprise solution frameworks listing |
| `/solutions/:slug` | `SolutionDetail` | Individual solution detail (CRM, HRM, Help Desk, Accounting, Sales Automation) |
| `/industries` | `Industries` | 7 industries with challenges/solutions |
| `/portfolio` | `Portfolio` | Showcase/proof-of-concept projects grid |
| `/portfolio/:slug` | `CaseStudy` | Individual project case study |
| `/careers` | `Careers` | Job listings or speculative applications |
| `/contact` | `Contact` | Contact form + direct contact info |
| `*` | `NotFound` | 404 catch-all |

> **No legal pages** (Privacy Policy, Terms of Service, Cookie Policy) are present anywhere in the route table or navigation.

---

## Detailed Page Inventory

### `/` — Home

**Purpose:** Primary landing page, introduces INSICLE and all capability areas.

**Sections:**
1. Hero — Headline "We Make Technology Work For What's Next", two CTAs, 3 capability chip links
2. Capability Strip — Interactive quick-nav to 5 divisions
3. About Editorial — Company intro, 3 principles, link to /about
4. Capabilities Bento (12-col) — All 5 divisions in card layout
5. Why INSICLE — 4-principle grid
6. AI & Technology Showcase — AI use cases + image
7. Enterprise Solutions Preview — 5 solution cards linking to /solutions/:slug
8. Industries Preview — 7 industry cards
9. Portfolio Technical Showcase — Featured project (Semantic-Graph Zero-Trust)
10. Contact CTA (shared component)

**Primary CTA:** "Explore Capabilities" → `/services` + "Discuss Your Requirements" → `/contact`

**Linked From:** Navbar (Home), every footer link

**Status:** needs-work — OG image relative, no per-route meta, portfolio shows placeholder with disclaimer note

---

### `/about` — About

**Purpose:** Company background, proprietor attribution, mission/vision, values, capabilities.

**Sections:**
1. PageHero — "Ideas, Technology, Real Impact."
2. Company Overview — text + image, includes **Dr. S. Selvi** proprietor attribution
3. Mission & Vision cards — both labeled **"Proposed copy — pending company approval"**
4. Values — Innovation-Led, Outcome-Focused, People-Centred, Reliable Delivery
5. Capabilities list → link to /services
6. ContactCTA

**Primary CTA:** "Explore Services" → `/services`

**Linked From:** Navbar, Home about section, Footer

**Status:** needs-work — Mission/Vision explicitly unconfirmed copy visible in production build

---

### `/services` — Services

**Purpose:** Overview of all 5 capability divisions with sub-service lists + process + FAQ.

**Sections:**
1. PageHero
2. Divisions grid — 5 cards (Digital Engineering, AI & BI, Enterprise Solutions, Digital Growth, Talent Solutions)
3. Process — Discovery → Planning → Delivery → Handover
4. FAQ — 4 entries
5. ContactCTA

**Primary CTA:** Explore [Division] → `/services/:slug`

**Linked From:** Navbar, Home bento, mega menu, footer

**Status:** OK

---

### `/services/:slug` — ServiceDetail

**Purpose:** Individual service within a division (e.g. `application-development`).

**Linked From:** Services division cards, mega menu (top 3 per division), Home bento chips

**Status:** OK — built from services.ts data

---

### `/solutions` — Solutions

**Purpose:** Pre-engineered enterprise solution frameworks (CRM, HRM, Help Desk, Accounting, Sales Automation).

**Sections:**
1. PageHero
2. Advisory Banner — clarifies these are "implementation frameworks", not locked products
3. Visual Showcase section with enterprise-systems.png labeled "Illustrative Architecture Preview"
4. Solutions Grid — 5 cards
5. ContactCTA

**Primary CTA:** "View Solution Details" → `/solutions/:slug`

**Linked From:** Navbar, Home enterprise section, Footer

**Status:** needs-work — `isProprietaryProduct: false` on all solutions; advisory banner text is accurate but may confuse buyers

---

### `/solutions/:slug` — SolutionDetail

**Purpose:** Detailed view of individual enterprise solution.

**Linked From:** Solutions grid, Home enterprise cards

**Status:** OK — driven by solutions.ts

---

### `/industries` — Industries

**Purpose:** Application domains — 7 sectors with challenges and solutions.

**Sectors:** Healthcare, Education, Retail & E-commerce, Manufacturing, Financial Services, Logistics, Professional Services

**Sections:**
1. PageHero
2. Advisory Banner — "We do not claim exclusive domain specialization without specific engagement confirmation"
3. Industry cards — challenges + INSICLE Digital Solutions
4. ContactCTA

**Primary CTA:** "Discuss [Industry] Solutions" → `/contact`

**Linked From:** Navbar, Home industries preview, Footer

**Status:** needs-work — no real client engagements listed; advisory is good but `organisations` spelling (British) in Financial Services description needs standardization

---

### `/portfolio` — Portfolio

**Purpose:** Technical showcases and architectural prototypes (explicitly not commercial client claims).

**Projects (all `isPlaceholder: true`):**
1. Semantic-Graph-Based Zero-Trust Policy Verification (AI & BI)
2. Cloud-Native Distributed Event Architecture (Digital Engineering)
3. Enterprise Operational Telemetry & BI Dashboard (Enterprise)

**Sections:**
1. PageHero
2. Advisory Banner — "architectural prototypes, research projects… not commercial client claims"
3. Category filter tabs
4. Projects grid
5. ContactCTA

**Primary CTA:** "View Technical Breakdown" → `/portfolio/:slug`

**Linked From:** Navbar, Home portfolio section, Footer

**Status:** needs-work — 0 real client projects; all placeholder; Home shows "* Conceptual Demonstration — Pending Company Verification" disclaimer which is honest but hurts credibility

---

### `/portfolio/:slug` — CaseStudy

**Purpose:** Detailed breakdown of a showcase project.

**Linked From:** Portfolio grid cards

**Status:** OK — driven by projects.ts; all show `isPlaceholder: true`

---

### `/careers` — Careers

**Purpose:** Job listings and speculative application channel.

**Sections:**
1. PageHero
2. Culture Pillars (Engineering Rigor, Autonomous Problem Solving, Collaborative Environment)
3. Job listings / empty state (email link when no active jobs)
4. ContactCTA (custom heading)

**Primary CTA:** "Apply Now" (email mailto link) or "Get In Touch"

**Linked From:** Navbar, Footer

**Status:** needs-work — no active job listings; email sends to `rmkinsicle@gmail.com` (Gmail, not company domain)

---

### `/contact` — Contact

**Purpose:** Contact form + company contact details.

**Form fields:** Name, Email, Phone, Company, Service Interest (dropdown), Requirements textarea

**Submission method:** Mailto dispatch via browser email client — NOT a backend form submission

**Contact Details (from company.ts):**
- Email: `rmkinsicle@gmail.com`
- Phone: `+91 9600142824`
- Address: RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206
- Hours: Monday–Friday, 9:00 AM – 6:00 PM IST

**Primary CTA:** "Submit Inquiry"

**Linked From:** Navbar, all CTAs, Footer, all ContactCTA components

**Status:** needs-work — P0: form uses mailto (no guaranteed delivery, fails silently if no email client); Gmail address signals startup; siteUrl in company.ts says `https://insicle.com` but live site is `https://insicle.vercel.app`

---

### `*` — NotFound (404)

**Purpose:** 404 error page.

**Sections:** Error badge, 404 heading, two CTA buttons (Return Home, Explore Services)

**Status:** OK — clean, functional

---

## Gaps / Missing Pages

| Missing Page | Priority | Why |
|---|---|---|
| Privacy Policy | P0 | Form collects PII, no privacy statement anywhere |
| Terms of Service | P1 | No engagement terms |
| Cookie Policy | P2 | Site loads Google Fonts (external request) |
| sitemap.xml | P1 | Only robots.txt present in /public |
