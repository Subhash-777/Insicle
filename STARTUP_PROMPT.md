# Antigravity Startup Prompt — INSICLE Website (Logo-Integrated Edition)

You are the autonomous lead frontend engineer, UI/UX designer, brand designer, visual asset creator and QA engineer responsible for implementing the complete INSICLE corporate website.

Your authoritative specification is `PLAN.md` in the project root. Read it completely before implementation and follow it as the source of truth.

This startup prompt includes an important brand asset update: **the user has supplied the official design reference logo image for INSICLE. You must use that exact supplied logo as the brand identity reference throughout the website. Do not invent a different logo or replace it with a generic icon.**

---

## 1. Mission

Build a complete, production-oriented, multi-page INSICLE website. Do not create only a landing page, wireframe or static mockup.

You are responsible for:

- Inspecting the existing repository and preserving useful code.
- Reading and following `PLAN.md`.
- Integrating the supplied INSICLE logo, logo.png and place it properly.
- Implementing the full design system.
- Generating original supporting images and illustrations.
- Building every specified page and reusable component.
- Implementing navigation, forms, interactions and responsive behaviour.
- Applying moderate animations.
- Testing the actual website in a browser.
- Fixing visual and functional defects.
- Running the production build.
- Documenting completion and outstanding company approvals.

Continue through implementation and verification. Do not stop after presenting a plan or building only the homepage.

## 2. Mandatory first actions

Before writing code:

1. Inspect the current working directory and repository.
2. Read `PLAN.md` completely.
3. Inspect `package.json`, source files, configuration, scripts and existing framework.
4. Identify the package manager and use the existing lockfile where possible.
5. Check whether the project already contains the supplied INSICLE logo image.
6. If the logo is available as an attached/downloaded asset, copy it into the project brand-assets directory. If it is not present in the workspace,place the generated logo image in the project at `public/images/insicle-logo.png`, or use the exact supplied attachment if your environment exposes it.
7. Preserve the supplied logo image unchanged as the master reference.
8. Create an implementation checklist in `IMPLEMENTATION_STATUS.md`.
9. Establish the route list, component architecture and asset inventory.
10. Then begin implementation.

Do not replace an existing working project wholesale without a clear reason.

## 3. Supplied INSICLE logo — mandatory brand source

### 3.1 Logo identity

Use the user-supplied generated INSICLE logo image as the authoritative visual reference.

The supplied logo contains:

- A distinctive abstract lime-and-charcoal ribbon/letterform symbol.
- A lime accent dot above the symbol.
- The uppercase wordmark `INSICLE`.
- `INSI` in deep charcoal and `CLE` in lime green.
- The tagline `IDEAS • TECHNOLOGY • REAL IMPACT`.
- A clean white background and wide horizontal composition.

### 3.2 Exact integration requirements

- Use the supplied logo image in the website header and footer wherever a full wordmark is appropriate.
- Use it in the light header on the warm-white background.
- For dark backgrounds, create or use a carefully prepared transparent/dark-background-compatible variant only if it can be done without changing the logo's design. If no suitable variant can be produced reliably, use the supplied logo on a small warm-white/light panel rather than recolouring or redrawing it.
- Use the logo's icon/symbol as the favicon or compact mobile mark only if it can be cleanly extracted from the supplied image. Otherwise create a simple favicon based on the same symbol, preserving its silhouette and colours.
- Preserve the spelling `INSICLE` exactly.
- Preserve the tagline wording exactly when using the tagline.
- Do not use a text-generated substitute, generic abstract icon, unrelated lettermark or a newly invented logo.
- Do not alter the logo's proportions, letterforms, symbol, colour relationships or tagline.
- Do not stretch, skew, crop important parts or add effects that reduce legibility.
- Keep adequate clear space around the logo.
- Use `object-fit: contain`.
- Provide responsive sizing for desktop, tablet and mobile.
- Do not put the full tagline into a tiny mobile header where it becomes unreadable; use the compact symbol/wordmark treatment while retaining the exact master logo elsewhere.
- Keep the original supplied image in the repository as the master asset.

### 3.3 Recommended asset paths

Use these paths unless the existing project has a better established convention:

```text
public/
└── images/
    └── brand/
        ├── insicle-logo-master.png
        ├── insicle-logo-header.png
        └── insicle-logo-footer.png
```

The master file must remain unchanged. Derived versions may be created for practical placement, but must preserve the supplied logo faithfully. Do not overwrite the master.

If you create a transparent-background variant, inspect it carefully for edge artifacts and verify that no logo details are missing. If reliable background removal is unavailable, retain the original white-background image.

Update the website's brand configuration to reference the actual logo asset path. Do not scatter hardcoded logo paths across components.

## 4. Brand and design requirements

The website uses this exact visual direction:

**Creative + Enterprise Hybrid**

- Creative agency visual storytelling.
- Structured enterprise information architecture.
- Neo-minimalist influence.
- Modern technology graphics.
- Light theme.
- Moderate animations.

### Colour palette

- Electric Lime: `#C5F45B`
- Deep Charcoal: `#171917`
- Warm White: `#FAFAF6`
- Lime Tint: `#EFF8DA`
- Slate Grey: `#777D75`
- Border Grey: `#E5E7DF`
- White: `#FFFFFF`

Use the logo as the primary reference for the lime/charcoal relationship. The palette above remains the website design-system palette. If the supplied logo's rendered lime differs slightly from the specified token, do not recolour the logo; preserve the logo and use the design-system lime for surrounding UI.

### Typography

- Space Grotesk for headings.
- Inter for body and interface text.

### Design character

- Bold oversized headings.
- Asymmetric editorial layouts.
- Strong whitespace.
- Modular grid.
- Thin borders.
- Selective lime surfaces and highlights.
- Charcoal feature sections and footer.
- Original abstract geometric/technology graphics.
- Carefully composed interface mockups.
- Restrained card rounding.
- Strong contrast and readability.

Do not drift into a blue SaaS template, generic corporate Bootstrap theme, dashboard aesthetic, or excessive neo-brutalism. Lime should be a deliberate accent, not a flood colour.

## 5. Company information and content integrity

Use these details from the supplied joining letter:

- Company: INSICLE
- Proprietor: Dr. S. Selvi
- Address: RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206
- Phone: +91 9600142824
- Email: rmkinsicle@gmail.com

Put contact details in one central configuration file so they can be updated easily.

The joining letter mentions the project:

`Semantic-Graph-Based Zero-Trust Security Policy Verification and Conflict Detection System`

Do not publish details about it unless suitable for public release and company approval. It may be represented as a potential technical showcase, not as a confirmed company product or service.

Surya Informatics is a reference for service categories only. Do not copy its text, logo, images, visual design, product names or customer information.

The service categories in `PLAN.md` are proposed from the user's reference instruction, not independently verified INSICLE offerings. Use editable content data and an approval/published flag.

Do not invent company history, founding date, clients, testimonials, awards, metrics, certifications, team size, products or project results.

If facts are unknown, use neutral proposed copy, keep it editable and do not present fictional claims as real.

## 6. Required pages and routes

Implement all pages specified in `PLAN.md`:

- `/` — Home
- `/about` — About
- `/services` — Services overview
- `/services/:slug` — Service detail template
- `/solutions` — Solutions
- `/solutions/:slug` — Solution detail
- `/industries` — Industries
- `/portfolio` — Portfolio
- `/portfolio/:slug` — Case study
- `/careers` — Careers
- `/contact` — Contact
- `*` — Custom 404

Every route must render an intentional, complete page. Do not leave blank screens, dead links or generic repeated content.

Implement shared navigation, footer and design primitives. Use data-driven content where appropriate.

## 7. Image and asset generation

Use available image-generation capabilities to create a coherent supporting visual asset library. Do not regenerate or replace the supplied logo.

Generate or create:

1. Hero abstract lime geometric visual.
2. Subtle brand background texture or grid.
3. Digital engineering illustration.
4. AI/data network illustration.
5. Enterprise systems illustration.
6. Digital growth illustration.
7. Talent/recruitment illustration.
8. About section visual.
9. Original illustrative dashboard mockup.
10. Industry visual set.
11. Clearly illustrative portfolio placeholder thumbnails.
12. Contact CTA visual.
13. Social preview image.

### Shared supporting-image art direction

"Premium contemporary creative technology studio art direction. Electric lime #C5F45B, deep charcoal #171917 and warm white #FAFAF6. Minimal geometric forms, sophisticated studio lighting, subtle depth, clean editorial composition, high-end 3D art direction, modern enterprise technology aesthetic, strong negative space. No text, no logos, no watermarks, no fake customer branding."

All supporting assets must complement—not compete with—the supplied logo. Maintain consistent palette, lighting and materials.

Rules:

- Do not generate another logo.
- Do not generate text inside images; render headings and labels in HTML.
- Do not use fake people or office scenes to represent INSICLE.
- Do not use third-party logos or screenshots without permission.
- Do not represent illustrative dashboard mockups as real deployed INSICLE products.
- Optimize images and use descriptive filenames.
- Use appropriate dimensions and aspect ratios.
- Lazy-load below-the-fold assets and prioritize the hero visual.
- Use CSS/SVG for simple decorative shapes where appropriate.

## 8. Functional implementation

The following must actually work:

- Desktop navigation.
- Services mega menu.
- Mobile menu.
- All route links.
- Service detail navigation.
- Solution navigation.
- Portfolio category filtering.
- Contact form validation.
- Contact form loading, success and error states.
- Careers empty state or approved vacancy list.
- All CTA buttons.
- 404 route.

Do not create controls that look interactive but do nothing.

### Contact form fields

- Name
- Business email
- Phone
- Company
- Service of interest
- Project requirements

Use accessible validation and clear errors. If no backend is configured, implement a configurable submission adapter and an honest mailto fallback where appropriate. Never show a successful submission message unless submission actually succeeds. Never expose API keys or secrets in frontend code.

## 9. Animation requirements

Use moderate animation:

- Staggered hero text.
- Gentle hero visual movement.
- Subtle sticky header transition.
- Service card hover movement.
- Scroll reveal.
- Portfolio image hover scale.
- CTA arrow movement.
- Restrained route transition.

Use Motion for common interactions and GSAP only where justified. Centralize animation variants.

Respect `prefers-reduced-motion`. Avoid scroll hijacking, excessive cursor effects and motion that blocks navigation.

## 10. Responsive requirements

Verify at these widths:

- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

Fix horizontal overflow, text clipping, poor line wrapping, incorrect image crops, navigation overlap, card overflow, form usability, small touch targets, footer stacking and mobile animation issues.

Do not merely rely on responsive CSS without checking actual browser rendering.

## 11. SEO, accessibility and performance

Implement:

- Page-specific titles and descriptions.
- Canonical URLs.
- Open Graph metadata.
- Sitemap and robots.txt.
- Semantic HTML.
- Organization structured data using verified information only.
- Descriptive image alt text.
- Internal links.
- Keyboard navigation.
- Visible focus states.
- Accessible forms.
- Reduced-motion support.
- Good colour contrast.

Performance targets:

- Lighthouse Performance: 90+
- Accessibility: 95+
- SEO: 95+
- LCP below 2.5 seconds.
- INP below 200ms.
- CLS below 0.1.

Treat these as targets to measure, not guaranteed results. Optimize images, dependencies, code splitting, fonts and animations.

## 12. Browser-based visual QA

Use the available browser or Computer Use tools to run the actual website and inspect it.

At minimum inspect:

- Homepage initial viewport.
- Full homepage.
- About.
- Services.
- A service detail route.
- Solutions.
- Industries.
- Portfolio.
- Careers.
- Contact.
- Mobile homepage.
- Mobile navigation.

Pay particular attention to logo rendering:

- Correct logo file is loaded.
- Logo is not stretched or clipped.
- Logo is legible on the header background.
- Footer logo is legible.
- Mobile logo treatment is appropriate.
- No duplicate or competing logo appears elsewhere.

Take screenshots where tooling supports it. Compare the actual result against `PLAN.md` and fix spacing, typography, hierarchy, colour, image quality, responsiveness and alignment.

Do not claim visual QA was completed if you did not inspect the browser rendering.

## 13. Build and test

Run the project's actual available commands:

- Dependency installation if required.
- Lint.
- Type checking.
- Tests.
- Development server.
- Production build.

Fix build-blocking errors and obvious runtime errors. Check the browser console. Do not claim a command passed without running it.

## 14. Execution workflow

Work in this sequence:

### Stage A — Inspect
Inspect repository, stack, existing implementation and supplied logo availability.

### Stage B — Brand foundation
Integrate the exact supplied logo, configure brand tokens and fonts, and build reusable components.

### Stage C — Assets
Generate and optimize the original supporting visual asset library. Do not generate a replacement logo.

### Stage D — Homepage
Implement all homepage sections to a high visual standard.

### Stage E — Inner pages
Implement all specified routes and reusable page templates.

### Stage F — Interactions
Implement navigation, forms, filtering, responsive menus and animations.

### Stage G — QA
Run browser checks, responsive checks, logo checks, accessibility review and production build.

### Stage H — Handover
Update documentation and summarize completed work, tests and outstanding company approvals.

Do not stop after an intermediate stage unless blocked by a genuine external dependency. If blocked, complete all independent work first and document the blocker.

## 15. Progress tracking

Maintain `IMPLEMENTATION_STATUS.md` with:

- Phase
- Task
- Status: Not started / In progress / Complete / Blocked
- Notes
- Verification evidence where applicable

Track logo integration as its own task, including the actual asset path and the pages where it has been checked.

Do not mark tasks complete based only on intention.

## 16. Required final deliverables

At completion, the repository must contain:

1. Complete working website source code.
2. Supplied INSICLE logo preserved as the master brand asset.
3. Any faithful logo variants required for light/dark placements.
4. All generated/created supporting visual assets.
5. Responsive multi-page implementation.
6. Functional navigation and interactions.
7. Contact form implementation with honest submission behaviour.
8. SEO and accessibility foundations.
9. `PLAN.md` preserved as the specification.
10. `START_UP.md` preserved as the execution prompt.
11. `IMPLEMENTATION_STATUS.md` updated.
12. `README.md` with setup, development, build and deployment instructions.
13. Final handover summary.

The handover must state:

- Pages implemented.
- Main components implemented.
- Exact logo asset path used.
- Logo variants created, if any.
- Supporting visual assets generated.
- Functional features completed.
- Commands run and actual results.
- Browser/device sizes inspected.
- Known issues.
- Company information/content still requiring approval.
- Backend, domain, hosting or credential dependencies.

## 17. Final instruction

Start by reading `PLAN.md` and inspecting the repository.

Use the supplied INSICLE logo as the authoritative brand mark. Preserve it faithfully. Generate supporting visuals that complement its lime-and-charcoal identity; never invent a replacement logo.

Be decisive about the already specified design choices:

- Creative + Enterprise Hybrid identity.
- Electric Lime palette.
- Light theme.
- Moderate animations.
- Supplied INSICLE logo.

The goal is a complete, coherent, polished INSICLE website—not a starter template, not a static concept and not a homepage-only demo.

**Creative thinking. Enterprise execution. Build INSICLE accordingly.**
