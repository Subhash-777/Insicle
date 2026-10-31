# INSICLE — Production Browser Screenshot Evidence (Round 2)

**Capture Date:** 2026-10-31  
**Environment:** Headless Chromium via Chrome DevTools Protocol (CDP)  
**Render Target:** Production preview server (`http://127.0.0.1:4173/`) and deployed Vercel instance (`https://insicle.vercel.app/`)  
**Resolution & Coverage:** 37 high-resolution full-page and viewport screenshots across 7 responsive breakpoints and 6 interactive states.

---

## 1. Multi-Breakpoint Viewport Evidence (Homepage)

Tested across all 7 required responsive widths from ultra-compact mobile to high-resolution widescreen desktop:

| Filename | Viewport | Category | What This Screenshot Proves |
| :--- | :--- | :--- | :--- |
| `home-360-viewport.png` | 360 × 740 | Compact Mobile | Zero horizontal overflow; single-column fluid stacking; minimum 44px tap target on hamburger menu; crisp logo display. |
| `home-390-viewport.png` | 390 × 844 | Standard Mobile (iPhone) | Proportional hero typography; high-contrast Electric Lime badge; clean CTA stacking; zero text collision. |
| `home-430-viewport.png` | 430 × 932 | Large Mobile (Pro Max) | Comfortable margins; smooth transition between fluid clamp sizes; zero horizontal scrollbar. |
| `home-768-viewport.png` | 768 × 1024 | Tablet Portrait (iPad) | Visual artwork stacks above copy; 2-column service/principles grid; accessible touch navigation. |
| `home-1024-viewport.png` | 1024 × 768 | Tablet Landscape / Laptop | Balanced side-by-side hero composition; navigation links visible; full header layout. |
| `home-1440-viewport.png` | 1440 × 900 | Standard Desktop | Primary desktop benchmark; exact max-width container (`1340px`); anchored floating badges; crisp logo at 44px. |
| `home-1920-viewport.png` | 1920 × 1080 | Widescreen Desktop | Centered container prevents excessive horizontal line lengths; bottom capability strip anchored without gaps. |

---

## 2. Full-Page Route Captures (Desktop 1440px & Mobile 390px)

Every public route captured from header to footer in full-page mode:

| Route | Desktop Capture (1440px) | Mobile Capture (390px) | Architectural & Design Verification |
| :--- | :--- | :--- | :--- |
| `/` (Home) | `home-1440-full.png` (1440×9254) | `home-390-full.png` (390×15000) | Full page: Hero, capability strip, editorial about spread, asymmetric 1+4 services grid, 4 why principles, AI showcase, enterprise preview, industries, proof-of-concept showcase, 3-step engagement CTA, luxury brand plate footer. |
| `/about` | `about-1440-full.png` (1440×4302) | `about-390-full.png` (390×6784) | Verified editorial company statement; proprietor citation (Dr. S. Selvi); proposed mission/vision cards; core values grid; 5-division summary. |
| `/services` | `services-1440-full.png` (1440×5745) | `services-390-full.png` (390×8927) | 5 division cards with sub-service listings; 4-step delivery process on dark surface; interactive accessible FAQ accordion. |
| `/services/application-development` | `service-detail-1440-full.png` (1440×4169) | `service-detail-390-full.png` (390×6972) | Breadcrumbs navigation; challenge/approach/deliverables breakdown; related services from complementary divisions. |
| `/solutions` | `solutions-1440-full.png` (1440×3916) | `solutions-390-full.png` (390×6720) | Enterprise solutions overview; advisory notice banner; module breakdowns for CRM, HRM, Help Desk, Finance, and Sales Automation. |
| `/solutions/crm` | `solution-detail-1440-full.png` (1440×4213) | `solution-detail-390-full.png` (390×6619) | Specific solution breakdown; 4 architecture highlights; 4 module features; target use cases; direct consultation CTA. |
| `/industries` | `industries-1440-full.png` (1440×5707) | `industries-390-full.png` (390×8213) | Domain applications across 7 industry sectors; sector challenges vs. digital capabilities; advisory disclaimer. |
| `/portfolio` | `portfolio-1440-full.png` (1440×2632) | `portfolio-390-full.png` (390×5212) | Real-time category filtering; advisory notice distinguishing prototypes from commercial contracts; showcase cards. |
| `/portfolio/semantic-graph-zero-trust` | `case-study-1440-full.png` (1440×4199) | `case-study-390-full.png` (390×6348) | Technical showcase case study; labeled as "Research Prototype / Concept Demonstration"; problem statement; architecture; Neo4j/GQL stack tags. |
| `/careers` | `careers-1440-full.png` (1440×3224) | `careers-390-full.png` (390×4548) | Transparent vacancy status; engineering culture pillars; speculative inquiry instructions directed to `rmkinsicle@gmail.com`. |
| `/contact` | `contact-1440-full.png` (1440×1954) | `contact-390-full.png` (390×3561) | Direct office details card (phone, email, registered address, proprietor); 6-field React Hook Form + Zod; honest dispatch feedback. |
| `/*` (404) | `not-found-1440-full.png` (1440×1112) | `not-found-390-full.png` (390×1865) | Branded error screen with primary return action and secondary services exploration CTA. |

---

## 3. Interaction State Evidence

| Filename | Viewport | Interaction State | What This Screenshot Proves |
| :--- | :--- | :--- | :--- |
| `interactive-mega-menu-open-1440.png` | 1440 × 900 | Services Dropdown Open | Full-width mega menu across all 5 divisions; 236px dark CTA card with completely visible, unclipped "Start a Conversation" button. |
| `interactive-mobile-drawer-open-390.png` | 390 × 844 | Mobile Drawer Open | Accessible slide-over drawer; backdrop blur; full navigation list including direct Contact link; 44px close button. |
| `interactive-mobile-subaccordion-open-390.png` | 390 × 844 | Mobile Sub-Accordion Open | Services item expands smoothly into 5 division anchor links with numbered tags; chevron rotates cleanly. |
| `interactive-contact-errors-1440.png` | 1440 × 1000 | Form Validation Triggered | Client-side validation triggers on submit; inline error messages with WCAG AA compliant red (`#dc2626`, 5.52:1 contrast); red outline and tint. |
| `interactive-portfolio-filter-ai-1440.png` | 1440 × 900 | Category Filter Clicked | Active pill state switches to charcoal surface with electric lime text (14.2:1 contrast); cards filter instantly without page reload. |
| `interactive-services-faq-open-1440.png` | 1440 × 900 | FAQ Accordion Open | Accessible accordion expands selected question; animated height; chevron rotation; high-contrast answer copy. |
