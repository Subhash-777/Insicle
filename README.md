# INSICLE Corporate Website

A complete, production-grade corporate website for **INSICLE** — a modern technology, software development, and digital solutions company. Built following the specifications in `PLAN.md` and `STARTUP_PROMPT.md`.

---

## 1. Brand Identity & Design System ("Steel & Ink")

- **Identity Direction:** Steel & Ink — calm, precise, editorial-corporate, trustworthy.
- **Visual Personality:** Engineered typography, generous whitespace (75% light surfaces), dry-brush signature slash motif, zero neon, zero glassmorphism.
- **Color Palette:**
  - `--logo-steel`: `#385068` (Primary brand color, buttons, headings, icons)
  - `--logo-ink`: `#284058` (Strong headings, button hover/pressed, slash mark)
  - `--ink-900`: `#14212F` (Dark surfaces: Hero base, CTA band, Footer)
  - `--ink-800`: `#1B2D40` (Body text on light, dark cards)
  - `--steel-500`: `#4A7BA6` (Accents, graph nodes, borders on hover)
  - `--steel-300`: `#9FB3C8` (Graph lines on dark, muted text on dark)
  - `--steel-200`: `#CBD6E2` (Stronger borders, dividers)
  - `--steel-100`: `#E3EAF1` (Hairline borders on light)
  - `--steel-50`: `#EEF2F7` (Tinted alternate section background)
  - `--paper`: `#F7F8FA` (Page background, matching the logo scan background)
  - `--surface`: `#FFFFFF` (Card surfaces)
  - `--muted`: `#5B6B7C` (Secondary text on light — 5.15:1 AA contrast)
  - `--text-on-dark`: `#E8EEF4` (Primary text on dark — 13.95:1 AAA contrast)
- **Typography:**
  - **Headings & Labels:** `Jost` (weight 400/500, tight line-height 1.1–1.2)
  - **Body & Interface:** `Inter` (weight 400/500, line-height 1.65)
  - **Eyebrows & Small Caps:** `Jost` 500, uppercase, `letter-spacing: 0.28em`, 12–13px
- **Motion & Animations:** Calm, editorial fade-up (12px, 400ms, ease-out), reduced-motion fully honored everywhere.

---

## 2. Brand Assets & Pipeline

- **Original Scan:** `/public/brand/logo-official-original.png` (preserved untouched, 358x92).
- **Cleaned Transparent PNGs:**
  - Header: `/public/images/brand/insicle-logo-header.png` (dark ink on transparent)
  - Footer / Dark sections: `/public/images/brand/insicle-logo-footer.png` (`#E8EEF4` on transparent)
  - Master: `/public/images/brand/insicle-logo-master.png`
- **Vector Assets:**
  - Standard Logo: `/public/brand/logo.svg`
  - Light Logo: `/public/brand/logo-light.svg`
  - Signature Brush Slash Mark: `/public/brand/slash-mark.svg` & `slash-mark-light.svg`
  - Favicon & Icons: `/public/favicon.svg`, `/public/icon-192.png`, `/public/icon-512.png`
  - OpenGraph Card: `/public/images/og-preview.png` (1200x630 on `--ink-900`)
- **TODO(client): request vector logo from the company** (high-res SVG from brand designer).

---

## 3. Implemented Routes & Pages

Every required route is fully implemented with responsive layouts, accessible navigation, and semantic HTML5:

| Route | Page | Purpose & Features |
| :--- | :--- | :--- |
| `/` | **Home** | Brand introduction, hero visual with floating tags, capability strip, about preview, 5 division cards, why INSICLE, AI showcase, enterprise solutions, industry preview, honest portfolio preview, CTA. |
| `/about` | **About Us** | Company profile, story, Dr. S. Selvi proprietor citation, mission & vision (labeled proposed), core values, capability summary. |
| `/services` | **Services Overview** | 5 capability divisions, detailed service lists, 4-step delivery process, FAQ accordion, CTA. |
| `/services/:slug` | **Service Detail** | Dedicated route for any service item (e.g. `application-development`). Architecture overview, problem addressed, deliverables, complementary division offerings, breadcrumbs, CTA. |
| `/solutions` | **Solutions Overview** | Enterprise solution frameworks (CRM, HRM, Help Desk, Finance, Sales Automation), advisory notice, interface showcase, module breakdowns. |
| `/solutions/:slug` | **Solution Detail** | Deep breakdown of specific framework (e.g. `/solutions/crm`), architecture highlights, module features, target use cases, inquiry CTA. |
| `/industries` | **Industries** | Sector applications (Healthcare, Education, Retail, Manufacturing, Finance, Logistics, Professional Services), challenges vs. digital solutions. |
| `/portfolio` | **Portfolio Gallery** | Interactive category filters (All, Digital Engineering, AI & BI, Enterprise, Growth), technical showcase cards, empty state handling. |
| `/portfolio/:slug` | **Case Study** | Technical showcase deep-dive (e.g. `semantic-graph-zero-trust`), challenge, architecture, solution, technologies, benchmark outcomes. |
| `/careers` | **Careers** | Transparent vacancy state, engineering culture pillars, speculative direct application instructions to leadership email. |
| `/contact` | **Contact** | Central office contact details, verified address & phone, full React Hook Form with Zod validation, honest mailto dispatch feedback. |
| `*` | **404 Not Found** | Branded error screen with return navigation. |

---

## 4. Technology Architecture

- **Frontend Core:** React 18 (`react`, `react-dom`)
- **Routing:** React Router v6 (`react-router-dom`) with lazy-loaded route-based code splitting
- **Type Safety:** TypeScript 5.6 (`strict: true`)
- **Build Tool:** Vite 6 (`@vitejs/plugin-react`)
- **Styling:** CSS Modules (`*.module.css`) + Global Design Tokens (`globals.css`)
- **Animation:** Motion (`motion/react`) with centralized variants in `src/animations/variants.ts`
- **Iconography:** Lucide React (`lucide-react`)
- **Form Validation:** React Hook Form (`react-hook-form`) + Zod (`zod`, `@hookform/resolvers`)

---

## 5. Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Production Build
Typechecks with `tsc` and compiles optimized production assets with Vite:
```bash
npm run build
```

### Run Production Preview Server
```bash
npm run preview
```

---

## 6. QA & Verification Evidence

- **TypeScript Typecheck:** `npx tsc` passes with 0 errors.
- **Production Build:** `npm run build` completes in <1.8s with all chunks code-split.
- **Automated Responsive Testing:** Verified across **360px, 390px, 430px, 768px, 1024px, 1280px, and 1440px** with **zero horizontal overflow**.
- **Interactive Verification:**
  - Services Mega Menu: verified open, hover, keyboard, and click.
  - Mobile Drawer: verified open/close, toggle, and accordion sub-navigation.
  - Portfolio Category Filtering: verified real-time category updates.
  - Contact Form: verified client-side field validation, inline errors, and honest dispatch feedback.
- **Headless Browser Screenshots:** Captured and visually verified across all 12 page templates in `qa-screenshots/`.

---

## 7. Company Information & Content Approvals

Centralized in `src/data/company.ts`:
- **Company Name:** INSICLE
- **Proprietor:** Dr. S. Selvi
- **Phone:** `+91 9600142824`
- **Email:** `rmkinsicle@gmail.com`
- **Address:** `RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206`

### Governance & Verification Artifacts
- **[ENHANCEMENT_AUDIT.md](ENHANCEMENT_AUDIT.md):** Complete 10-section critical audit documenting observed findings, design rationale, proposed corrections, and responsive verification evidence.
- **[CONTENT_APPROVAL_REQUIRED.md](CONTENT_APPROVAL_REQUIRED.md):** Formal sign-off registry distinguishing approved corporate facts from proposed capability categories and technical research prototypes.

> **Note on Company Approvals:** In compliance with `PLAN.md` and `STARTUP_PROMPT.md`, all marketing claims, mission/vision statements, enterprise framework specifications, and technical showcases are clearly demarcated as proposed copy or technical prototypes pending final company publication approval.
