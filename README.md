# INSICLE Corporate Website

A complete, production-grade corporate website for **INSICLE** — a modern technology, software development, and digital solutions company. Built following the specifications in `PLAN.md` and `STARTUP_PROMPT.md`.

---

## 1. Brand Identity & Design System

- **Identity Direction:** Creative + Enterprise Hybrid
- **Visual Personality:** Neo-minimalist, disciplined typography, editorial layouts, 3D abstract technology visuals.
- **Color Palette:**
  - **Electric Lime:** `#C5F45B` (Primary brand signature, CTA buttons, active states, key accents)
  - **Deep Charcoal:** `#171917` (Main headings, dark cards, footer, high-contrast surfaces)
  - **Warm White:** `#FAFAF6` (Page background, subtle contrast cards)
  - **Lime Tint:** `#EFF8DA` (Feature cards, tags, soft highlights)
  - **Slate Grey:** `#777D75` (Body text, metadata, subtle borders)
  - **Border Grey:** `#E5E7DF` (Dividers, outlines)
  - **Pure White:** `#FFFFFF` (Surface cards, header panels)
- **Typography:**
  - **Headings & Display:** `Space Grotesk` (500, 600, 700)
  - **Body & Interface:** `Inter` (400, 500, 600, 700)
- **Motion & Animations:** Moderate intensity powered by Motion (`motion/react`), with full `prefers-reduced-motion` accessibility support.

---

## 2. Supplied Brand Assets

- **Master Brand Logo:** `logo.png` / `public/images/brand/insicle-logo-master.png` (preserved verbatim as authoritative master, 1774x887 PNG).
- **Header Logo:** `public/images/brand/insicle-logo-header.png` (comfortably cropped with clean padding for proportional display at 48px height).
- **Footer Logo:** `public/images/brand/insicle-logo-footer.png` (displayed on a protective warm-white panel within the deep charcoal footer).
- **Favicon:** `public/favicon.svg` (charcoal background with electric lime mark).
- **Social Preview / Open Graph:** `public/images/og-preview.png` (1200x630px high-resolution card).
- **Original 3D Visual Library (`public/images/`):**
  - `hero-abstract.png`: Lime geometric 3D composition for homepage hero
  - `about-visual.png`: Editorial brand hardware/circuitry composition
  - `digital-engineering.png`: Architectural software stack composition
  - `ai-network.png`: Connected intelligence and data node visual
  - `enterprise-systems.png`: Modular enterprise workflow composition
  - `digital-growth.png`: Data visualization and analytics growth visual
  - `talent-solutions.png`: Collaborative network and recruitment visual
  - `contact-visual.png`: Geometric brand card visual

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
