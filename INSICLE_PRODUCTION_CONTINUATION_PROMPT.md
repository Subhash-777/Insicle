# INSICLE — Production Readiness Continuation Prompt

> **Purpose:** Continue from the existing INSICLE implementation. Do not rebuild blindly or accept the previous completion summary as proof. Audit the actual repository and the currently deployed/local-rendered website, capture fresh browser screenshots, identify every visual/content/functional defect, fix them, and verify the finished result.

## Role

Act as a senior product designer, brand designer, frontend architect, accessibility specialist, QA engineer, and production-readiness reviewer. Work directly in the existing INSICLE repository and preserve its current framework, dependencies, architecture, and useful components unless a change is demonstrably necessary.

## 1. Start by verifying the actual project state

1. Inspect the repository, current Git branch, working tree, package scripts, source tree, routes, assets, and existing documentation.
2. Read these files if present:
   - `PLAN.md`
   - `START_UP.md` or `STARTUP_PROMPT.md`
   - `ENHANCEMENT_AUDIT.md`
   - `CONTENT_APPROVAL_REQUIRED.md`
   - `IMPLEMENTATION_STATUS.md`
   - responsive test scripts and existing QA notes
3. Compare the implementation with the requirements in those files. Do not assume the previous agent's claim that everything is complete is accurate.
4. Record the actual framework/build tooling and use the repository's existing commands. Do not migrate frameworks or replace working architecture without a clear reason.
5. Check `git status` before editing. Preserve user changes. Do not reset, force-push, or discard uncommitted work.
6. Run the project locally and confirm the server is actually ready before browser testing.

## 2. Fresh browser rendering and screenshot evidence — mandatory

Use a real browser (prefer the existing browser automation setup, Playwright, or Chromium) to render the current implementation. Do not rely only on source-code inspection, the old screenshots, terminal output, or a successful build.

### Capture a fresh screenshot set

Capture the deployed site if network access is available. If the deployed URL cannot be reached from the environment, record the exact failure and use the locally running build as the test target. Do not claim to have inspected the deployed site if it was not reachable.

Target URL: `https://insicle.vercel.app/`

Capture:
- Full-page screenshots of every public route.
- Viewport screenshots at desktop widths: 1440px and 1920px.
- Tablet: 768px and 1024px.
- Mobile: 360px, 390px, and 430px.
- At minimum, capture the homepage at all seven widths and every route at 1440px and 390px.
- Capture interaction states: navigation open, Services menu open, mobile drawer open, hover/focus states, form validation, success/error feedback, filters, accordions, and other interactive components.
- Capture long pages in full-page mode, not just the first viewport.

Save evidence in a clearly named folder such as `qa-screenshots/round-2/`. Use filenames that identify route, viewport, and state, e.g. `home-1440-full.png`, `home-390-full.png`, `services-1440-full.png`, `contact-390-form-error.png`.

Create a screenshot index in `qa-screenshots/round-2/README.md` listing the route, viewport, state, and what each capture proves. If screenshots cannot be captured, state why and do not fabricate screenshot evidence.

## 3. Visual audit: inspect every pixel-level design system issue

Audit all pages and components, not only the homepage hero. Look for:

- Text or icons disappearing into the background.
- Insufficient foreground/background contrast.
- Low-contrast muted text, placeholder text, disabled states, badges, metadata, captions, borders, and icons.
- Lime text on white or pale lime backgrounds where readability is weak.
- Charcoal/black text placed on dark surfaces.
- White text placed on warm-white or light-grey surfaces.
- Text over images, gradients, glows, translucent panels, and decorative shapes.
- Background overlays or pseudo-elements covering text.
- Incorrect stacking contexts, opacity, blend modes, filters, blur, masks, and z-index.
- Gradient stops that reduce text legibility.
- Borders and separators that vanish against adjacent surfaces.
- Cards with inconsistent surface colors or unclear boundaries.
- Excessive empty space, uneven grids, awkward wrapping, clipping, overlap, and inconsistent alignment.
- Inconsistent border radii, shadows, spacing, icon sizes, typography, and button dimensions.
- Elements that look clickable but are not interactive, and controls whose affordance is unclear.
- Images that crop badly, stretch, blur, or have the wrong aspect ratio.
- Logo rendering, whitespace, and contrast in header, mobile navigation, and footer.

For each issue, document: page/component, viewport, screenshot filename, severity (P0/P1/P2), cause, and exact fix. Fix the underlying design token/component/CSS cause rather than applying isolated patches everywhere.

## 4. Contrast and readability requirements

Treat readability as a release blocker.

1. Establish and document semantic color tokens for:
   - page background
   - primary surface
   - secondary surface
   - elevated surface
   - primary text
   - secondary text
   - muted text
   - accent
   - accent foreground
   - borders/dividers
   - links
   - focus ring
   - success, warning, and error states
2. Preserve the approved INSICLE brand palette as the foundation:
   - Electric Lime: `#C5F45B`
   - Deep Charcoal: `#171917`
   - Warm White: `#FAFAF6`
   - Lime Tint: `#EFF8DA`
   - Slate Grey: `#777D75`
   - Border Grey: `#E5E7DF`
   - White: `#FFFFFF`
3. Do not use Electric Lime as a default text color on white/warm-white backgrounds. Use Deep Charcoal text on lime buttons and lime surfaces unless measured contrast proves another pairing accessible.
4. Do not use Slate Grey blindly for small text. Select accessible text tokens based on actual contrast measurements.
5. Meet WCAG 2.2 AA contrast:
   - Normal text: at least 4.5:1.
   - Large text: at least 3:1.
   - Meaningful UI components, icons, and graphical boundaries: at least 3:1 against adjacent colors.
6. Test every actual foreground/background pair, including text over gradients and images. Do not rely on color names or visual intuition.
7. Provide a contrast audit table with foreground, background, measured ratio, applicable threshold, and pass/fail.
8. Do not solve every contrast problem by making the entire site dark or by adding heavy black overlays. Retain the intended light editorial design and use controlled surface separation.
9. Keep decorative glows and gradients behind content. Ensure they never reduce text contrast.
10. Test keyboard focus, hover, active, disabled, validation, and selected states independently.

## 5. Brand and visual direction

Retain the approved Creative + Enterprise Hybrid identity:
- Creative, editorial visual storytelling combined with enterprise clarity.
- Electric Lime as a restrained accent, not a page-wide background.
- Deep Charcoal and Warm White as primary anchors.
- Space Grotesk for headings and Inter for body text, if already loaded and rendering correctly.
- Generous but controlled whitespace, deliberate asymmetric layouts, modular grids, thin borders, and restrained corner radii.
- Original abstract technology imagery is acceptable, but it must support the content rather than compete with it.

### Logo rules
- Preserve the supplied master INSICLE logo exactly.
- Do not regenerate, redraw, recolor, distort, crop, or replace its wordmark/tagline.
- Verify derivative header/footer assets against the master.
- Ensure the logo is legible on every surface. Do not put a white logo image on a white surface or a charcoal logo on a charcoal surface.
- Inspect actual logo dimensions and clear space at desktop and mobile sizes.

## 6. Content and credibility governance

Do not invent:
- clients, customer logos, testimonials, awards, certifications, partnerships, team size, founding year, company history, revenue, performance metrics, project outcomes, or delivery guarantees.
- claims that a proposed service, product, case study, or prototype is already commercially offered or customer-deployed.

Use the content approval registry. Keep unapproved claims clearly marked internally and out of public production copy until approved by the company.

Company details available from the supplied joining-letter information:
- Company: INSICLE
- Proprietor: Dr. S. Selvi
- Address: RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206
- Phone: +91 9600142824
- Email: rmkinsicle@gmail.com

The following are proposed service categories, not confirmed company offerings. Keep them editable and approval-gated:
1. Digital Engineering
2. AI & Business Intelligence
3. Enterprise Solutions
4. Digital Growth
5. Talent Solutions

The “Semantic-Graph-Based Zero-Trust Security Policy Verification and Conflict Detection System” was mentioned as a project in joining-letter context. Do not present it as a company product, customer case study, or commercially delivered solution unless the company explicitly approves that positioning. If retained as a technical showcase, label it accurately as a research prototype/concept demonstration and state its scope and status truthfully.

Review all copy for:
- clear meaning and plain language
- specific value without exaggerated claims
- consistent terminology
- spelling, grammar, punctuation, and capitalization
- duplicate or placeholder copy
- headings that do not match the content below them
- CTA labels that match their actual destination/action
- accessible link text and form instructions

## 7. Page-by-page audit and implementation

Verify every route actually exists, renders, and has a coherent page-specific layout:

- `/`
- `/about`
- `/services`
- `/services/:slug`
- `/solutions`
- `/solutions/:slug`
- `/industries`
- `/portfolio`
- `/portfolio/:slug`
- `/careers`
- `/contact`
- not-found route

For every route:
- Check page title, description, canonical URL, heading hierarchy, breadcrumbs where appropriate, and internal links.
- Check first viewport, complete page length, footer, and mobile layout.
- Remove dead links and misleading buttons.
- Ensure navigation active states match the current route.
- Ensure each CTA leads to a relevant working destination.
- Ensure service/solution cards link to their own detail pages.
- If no approved case studies exist, use a deliberate, compact empty state. Do not imply completed client work. Do not show a “View all work” CTA that leads to an empty page.
- Keep proposed capabilities distinct from proven delivery evidence.

### Homepage-specific review

Recheck:
- Header height, logo scale, nav spacing, sticky behavior, focus states, active state, and dropdown positioning.
- Hero text width, line breaks, reading order, visual balance, artwork crop, floating labels, and CTA spacing.
- Capability chips and their destinations.
- About section density, heading/body relationship, and any quote attribution.
- Featured service card plus supporting grid; avoid awkward orphan cards and uneven card heights.
- “Why INSICLE” principles: ensure each has useful, non-repetitive content.
- AI/data section: make its use cases understandable and avoid implying capabilities that are not approved.
- Technical showcase: clear prototype/demo status.
- Engagement process and contact CTA.
- Footer columns, logo plate, contrast, spacing, legal/contact links, and mobile stacking.

## 8. Responsive behavior

Test actual browser rendering at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px.

Check:
- no horizontal overflow
- no clipped headings or buttons
- no text collision or unreadable line lengths
- no hidden navigation items without an accessible mobile alternative
- no dropdowns positioned outside the viewport
- no overlapping floating cards or decorative artwork
- no tiny tap targets
- no excessive mobile whitespace
- no desktop-only hover dependency
- forms and footer remain usable on touch screens

Aim for touch targets of at least 44×44 CSS px where practical. Use fluid typography and layout constraints rather than brittle fixed dimensions.

## 9. Functionality and accessibility

Test all visible controls:
- header navigation and dropdown
- mobile menu open/close, Escape handling, focus management, and scroll behavior
- all buttons and links
- forms, required fields, email/phone validation, error states, success state, and submission handling
- filters, tabs, accordions, and other interactive controls
- keyboard-only navigation
- visible focus indicators
- semantic landmarks and heading order
- accessible names for icon-only buttons
- alt text for informative images; empty alt for decorative images
- reduced-motion preference
- sufficient contrast in every interaction state

Do not create a fake form success message. Confirm that the form is connected to a real submission endpoint or clearly report that backend integration is still required. Never claim a message was sent if it was not.

## 10. Performance, SEO, and production engineering

Verify:
- production build succeeds
- TypeScript checks succeed
- lint succeeds
- tests succeed
- no console errors or uncaught exceptions
- no broken image/font/network requests
- no React key warnings or hydration issues (if applicable)
- no avoidable layout shifts
- images use appropriate formats, dimensions, and lazy loading below the fold
- fonts are loaded efficiently
- metadata and social preview metadata are present
- sitemap and robots rules are valid
- favicon and manifest assets are correct
- 404 route works
- external links use safe attributes where needed
- secrets and private environment values are not committed

If Lighthouse or equivalent tooling is available, run mobile and desktop audits and record Performance, Accessibility, Best Practices, and SEO scores. Do not fabricate scores if tooling is unavailable.

## 11. Fix priority

Use this priority order:

### P0 — Release blockers
- unreadable or invisible text
- WCAG contrast failures on essential content or controls
- broken routes, links, navigation, or form submission claims
- mobile overflow or unusable mobile navigation
- runtime errors, broken assets, failed production build
- false or unapproved company claims

### P1 — Important quality issues
- poor hierarchy, inconsistent spacing, awkward layouts
- weak CTA clarity
- missing route metadata
- inconsistent cards, typography, image cropping
- keyboard/focus/accessibility gaps

### P2 — Polish
- subtle animation refinement
- micro-interactions
- minor visual alignment
- nonessential decorative improvements

Fix all P0 issues and all feasible P1 issues before completion. Do not spend time polishing animations while contrast, content, or functionality is broken.

## 12. Required deliverables

Update or create:

1. `ENHANCEMENT_AUDIT.md`
   - fresh observations only
   - route and viewport
   - screenshot evidence path
   - severity, root cause, and resolution
   - unresolved items with reasons
2. `CONTENT_APPROVAL_REQUIRED.md`
   - list every unapproved statement, service, prototype, attribution, or claim
   - mark what must be approved before public launch
3. `IMPLEMENTATION_STATUS.md`
   - completed items
   - partially completed items
   - blocked items
   - commands actually run and their real results
4. `qa-screenshots/round-2/README.md`
   - screenshot inventory and test coverage
5. `CONTRAST_AUDIT.md`
   - measured contrast pairs and pass/fail results
6. A concise production-readiness report with:
   - routes tested
   - viewport sizes tested
   - browser and test environment
   - build/lint/typecheck/test results
   - known limitations
   - release recommendation

## 13. Final verification gate

Before declaring completion:

- Re-run the production build after the final code change.
- Re-run responsive overflow checks at all required widths.
- Re-run contrast checks after final styling changes.
- Re-render the affected pages and capture new screenshots.
- Inspect the screenshots visually; do not rely solely on automated pass output.
- Confirm there are no P0 issues remaining.
- Confirm every public route and every visible CTA behaves as intended.
- Confirm no unapproved claims have slipped into public copy.
- Check `git diff` and `git status`.
- Commit only if explicitly appropriate for the existing workflow. Never force-push.
- If pushing is requested by the project workflow, verify the remote and branch, then report the exact commit and push result. Do not say it was pushed unless the command confirms it.

## 14. Final response format

Return a concise but evidence-based report:

1. **What was inspected** — live deployment or local build, routes, browsers, and viewport sizes.
2. **What was wrong** — prioritized list with screenshot references.
3. **What was fixed** — exact components/files and behavior.
4. **Contrast results** — number passed/failed and any exceptions.
5. **QA results** — build, lint, typecheck, tests, overflow, console, accessibility, and SEO.
6. **Screenshots** — exact folder and filenames.
7. **Remaining blockers** — especially content approval and backend dependencies.
8. **Git status** — branch, commit, and push status if applicable.

Never report “all complete,” “production-ready,” “verified,” or “pushed” unless the corresponding checks were actually performed and passed. A successful build alone is not proof of production readiness.
