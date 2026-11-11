# UX Review — Code-Level Audit
_P0 Site Audit, 2026-11-11 | Based on TSX source inspection (no screenshots available)_

---

## Home.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | No `<title>` or per-route `<meta description>` — single global title in index.html covers all routes; crawlers see identical metadata on every page |
| 2 | **P0** | Portfolio section shows `*Conceptual Demonstration — Pending Company Verification` in-page copy — this disclaimer renders in production and directly undermines trust |
| 3 | **P1** | Two different primary CTAs in the hero ("Explore Capabilities" + "Discuss Your Requirements") — competing actions; best practice is one primary + one secondary ghost/outline |
| 4 | **P1** | `capabilityLinks` only shows `slice(0, 3)` out of 5 divisions in hero tags — Talent Solutions and Digital Growth omitted with no explanation |
| 5 | **P1** | Portfolio section heading "Proof of Capabilities & Case Studies" contradicts the advisory copy on /portfolio that explicitly says these are prototypes only — headline misleads |
| 6 | **P1** | Industries cards link to `/industries` but have no anchor for specific sector — user clicking "View Sector Solutions" for Healthcare lands on top of the Industries page, not the Healthcare card |
| 7 | **P2** | Why INSICLE section heading "Built Around Ideas. Driven By Execution." does not match the brand tagline "IDEAS • TECHNOLOGY • REAL IMPACT" — inconsistent voice |
| 8 | **P2** | AI section uses `loading="lazy"` on the in-viewport hero area image (ai-network.png) — LCP penalty on initial viewport load |

---

## About.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Mission card renders `<em>Proposed copy — pending company approval</em>` and Vision card the same — this draft note is live in production HTML |
| 2 | **P0** | No `<title>` or `<meta description>` override — About page has same title as homepage |
| 3 | **P1** | Proprietor quote `— Dr. S. Selvi, Proprietor, INSICLE` appears mid-paragraph of the overview section without a blockquote or visual separator — reads as body text |
| 4 | **P1** | No founding year, team size, or any company provenance data — "Our Story" section reads as aspirational copy without substance |
| 5 | **P1** | Values section lists 4 values (Innovation-Led, Outcome-Focused, People-Centred, Reliable Delivery) with no supporting evidence or examples; too generic |
| 6 | **P1** | Capability list is a duplicate of what's in Services.tsx — creates redundancy without adding context specific to About (e.g. team structure, process philosophy) |
| 7 | **P2** | No social proof — no awards, recognitions, partnerships, or press mentions |
| 8 | **P2** | `about-visual.png` alt text is "Abstract editorial brand composition for INSICLE" — not descriptive of actual content visible on page |

---

## Services.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Division CTA links to `/services/${division.services[0].slug}` — hardcoded to first service only; "Explore Digital Engineering" goes to `/services/application-development` not to the division overview |
| 2 | **P1** | No per-division anchor deep-link from Services page title — hash navigation from Home bento grid (`/services#digital-engineering`) targets the `AnimatedSection id` correctly only if the div has the right id attribute; verify rendering |
| 3 | **P1** | FAQ accordion opens item 0 by default (`useState(0)`) — users never see the closed state UX; this may hide content from screen readers that expect hidden by default |
| 4 | **P1** | No pricing guidance, engagement model (retainer/project/T&M), or typical project size mentioned — buyers cannot self-qualify |
| 5 | **P1** | Talent Solutions (05) sub-services have only 4 items vs 6 for other divisions — visual asymmetry in bento/grid layouts |
| 6 | **P2** | Process section ("Discovery → Planning → Delivery → Handover") is generic — identical process appears on other agency sites; needs INSICLE-specific detail |
| 7 | **P2** | FAQ Q4: "Reach out through our project inquiry form" — no link to /contact inline; passive instruction |
| 8 | **P2** | Division images in cards reference `/images/digital-engineering.png` etc — all PNG files; no srcset or responsive image loading strategy |

---

## Solutions.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Solutions overlap significantly with Services/Enterprise Solutions division — CRM, HRM, Help Desk, Accounting, Sales Force Automation appear as both service sub-items AND standalone solutions; navigation confusion |
| 2 | **P0** | Advisory banner text "They are custom configured and integrated into your organization's cloud infrastructure" implies cloud hosting is included — may be an overstatement of scope; needs legal/commercial review |
| 3 | **P1** | `isProprietaryProduct: false` on all 5 solutions (data layer) but the UI presents them as INSICLE products — honest in data, misleading in UI |
| 4 | **P1** | Solutions page heading "Smarter Systems for Everyday Business Operations." duplicates Home.tsx enterprise section heading exactly (line 479 of Home.tsx) |
| 5 | **P1** | Mockup image uses `enterprise-systems.png` labeled "Illustrative Architecture Preview" — no real dashboard or screenshot; weakens credibility |
| 6 | **P1** | No case study or customer reference on any solution card — buyers have no evidence the solutions have been deployed |
| 7 | **P2** | Features show only 3 of 4 (`sol.features.slice(0, 3)`) — the 4th feature (e.g. "Payroll Integration" for HRM) is hidden with no "show more" affordance |
| 8 | **P2** | CRM solution `description` says "Centralise" (British) while other solutions use American English — spelling inconsistency at the data layer |

---

## Industries.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P1** | Financial Services description uses "organisations" (British) — mixed with American spellings elsewhere on the site |
| 2 | **P1** | Card numbering format `0{idx + 1}` hardcoded — renders "08" if an 8th industry is ever added instead of "08"; minor but could cause two-digit display issues |
| 3 | **P1** | No case study or even a named client (even anonymized) for any industry — claims are entirely generic capability statements |
| 4 | **P1** | Advisory banner says no exclusive specialization without engagement confirmation — this undercuts the entire page purpose (why would a healthcare buyer shortlist INSICLE?) |
| 5 | **P1** | Solutions column in each card lists generic solution names (e.g. "Custom patient management systems") that do not link to any actual service or solution page |
| 6 | **P2** | CTA per-card says "Discuss [Industry] Solutions → /contact" — goes to plain contact form with no industry pre-selection; loses context |
| 7 | **P2** | Logistics description: "optimise" (British) while page title and other text use American English |
| 8 | **P2** | No hero visual or imagery on Industries page — 7 text-heavy cards with no visual differentiation between sectors |

---

## Portfolio.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Zero real client projects — all 3 items are `isPlaceholder: true`; Portfolio as a sales tool is non-functional until real work is added |
| 2 | **P0** | Home page shows this portfolio section with heading "Proof of Capabilities & Case Studies" then immediately shows "* Conceptual Demonstration — Pending Company Verification" — this contradiction appears in production |
| 3 | **P1** | Filter tab "Digital Growth" category (`digital-growth`) has zero projects — clicking it shows the empty state; looks broken |
| 4 | **P1** | `Portfolio` page does NOT filter to `isPlaceholder: false` — all projects shown including placeholders; `getApprovedProjects()` exists in projects.ts but Portfolio.tsx uses raw `projects` array |
| 5 | **P1** | Advisory banner copy "subject to non-disclosure agreements and published only upon client authorization" implies NDAs with clients — this may be aspirational and not yet accurate |
| 6 | **P1** | Technology badges on project cards (e.g. "Property Graphs", "Neo4j / GQL", "Zero-Trust Architecture") are highly technical — no explanation for non-technical buyers |
| 7 | **P2** | `loading="lazy"` on project images — if projects are above the fold in a 3-column grid, the first row will lazy-load visibly |
| 8 | **P2** | CaseStudy detail page not reviewed — but `/portfolio/semantic-graph-zero-trust` is linked prominently from both Home and Portfolio |

---

## Careers.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Form submission goes to `rmkinsicle@gmail.com` via mailto — a Gmail address signals informal operation; not a company domain email |
| 2 | **P1** | `getApprovedJobs()` currently returns 0 jobs (careers data not seen but Careers.tsx renders empty state) — entire page shows "No Active Vacancies" on first visit; not a good impression |
| 3 | **P1** | Culture Pillars ("Engineering Rigor", "Autonomous Problem Solving", "Collaborative Environment") have no supporting evidence (team quotes, photos, perks) |
| 4 | **P1** | Speculative application CTA displays raw email address as button label `{company.contact.email}` — shows `rmkinsicle@gmail.com` as a button; looks like a debug placeholder |
| 5 | **P1** | No location/remote policy, compensation philosophy, or benefits listed — candidates cannot self-qualify |
| 6 | **P2** | PageHero subheading "Join a dedicated team focused on solving complex challenges" — "dedicated team" is unverified generic language |
| 7 | **P2** | No team photos, Glassdoor link, LinkedIn company page, or any employer brand content |
| 8 | **P2** | ContactCTA at bottom has custom heading "Have Questions About Opportunities?" but CTA button text says "Get In Touch" — inconsistent with the Contact form page label "Start a Conversation" |

---

## Contact.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P0** | Form submission is **mailto dispatch only** — `window.location.href = mailtoUrl` via invisible anchor click; if the user has no mail client configured (common on work machines/browsers), the inquiry is silently lost |
| 2 | **P0** | No backend form handler, no SMTP integration, no form-to-email service (Formspree, EmailJS, etc.) — zero guaranteed delivery |
| 3 | **P0** | Success state says "Inquiry Dispatched to Mail Client" and immediately resets the form — if mail client does not open, user has no copy of their submission |
| 4 | **P1** | Contact email is `rmkinsicle@gmail.com` — prominent on a corporate page; undermines professional credibility |
| 5 | **P1** | No CAPTCHA or bot protection on the form — when a backend is added, form will be spam-vulnerable |
| 6 | **P1** | Phone validation regex allows formats like `+91 9600142824` but placeholder says `+91 98765 43210` — example in placeholder does not match the company's own number format |
| 7 | **P2** | Privacy note at bottom of form: "Inquiries are handled strictly between you and INSICLE leadership" — not a compliant privacy statement; no link to Privacy Policy |
| 8 | **P2** | No confirmation email sent to inquirer (even client-side — a `mailto:` reply option) |

---

## NotFound.tsx

| # | Severity | Issue |
|---|----------|-------|
| 1 | **P1** | No `<title>` override — tab shows the global site title, not "404 – Page Not Found" |
| 2 | **P1** | Copy "has been relocated within our architecture" is overly technical; "architecture" is an internal engineering word, not user language |
| 3 | **P1** | Only 2 recovery CTAs (Home, Explore Services) — no search, no sitemap link, no "Contact Us" option |
| 4 | **P2** | No HTTP 404 status code returned — SPA client-side routing means the server returns 200 for all routes; crawlers may index the 404 page as content |
| 5 | **P2** | No illustration or visual — large empty "404" text only; a branded illustration would reduce bounce rate |
| 6 | **P2** | No logging or analytics event triggered on 404 — no way to know which URLs users are hitting |
