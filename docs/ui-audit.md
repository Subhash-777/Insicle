# Comprehensive UI Bug & Quality Audit (ui-polish-v2)

This audit tracks all observed defects, root causes, architectural fixes, and verification statuses across all routes on the INSICLE website.

| ID | Location | Observation & Impact | Root Cause in Code | Required Fix & Target | Status |
|---|---|---|---|---|---|
| **B1** | Header, page top | Nav links and the "Let's Talk" CTA are nearly invisible on a white bar at page top. | Header background was white while text colors were styled assuming a dark hero background, leading to light text on light backgrounds. | Drive header explicitly by route & scroll state (`top`, `scrolled`, `menu-open`). Text and buttons adapt cleanly. | **FIXED** |
| **B2** | Header over hero | Solid white background on hero entry. Heavy and clashes with dark hero. | Missing transparent background class on initial home render. | Header is transparent over hero at top, with light logo (`logo-light.svg`) and light text (`#E8EEF4`), transitioning to white after 24px scroll. | **FIXED** |
| **B3** | Header nav | Stray bullet dots next to nav items (e.g. `• HOME`, `ABOUT •`, etc.). | Browser default `list-style-type: disc` leaking onto `ul` / `li` in reset or module CSS. | Add explicit `list-style: none` and remove all pseudo bullet elements. Add sliding 2px steel brush underline on active/hover. | **FIXED** |
| **B4** | Mega menu (Services) | Small 11–12px text, uneven columns, lack of contrast, dark CTA card misaligned, bullets inside lists. | CSS in `Navbar.module.css` lacked rigid 12-column grid and proper typographic scaling. | 5 equal division columns + 1 CTA card, 14.5px/1.5 links, Jost 16px headers, zero bullets, hover arrow animation. | **FIXED** |
| **B5** | Hero section | ~200px dead space at bottom, top-heavy; stray vertical line element at y=940-970; large graph node outliers reading as bullets. | `min-height` not vertically centering content; `.scrollLine` rendered as static stray border; node generator lacked radius/opacity bounds. | Centered content in `min-height: calc(100svh - 72px)`. Remove stray line. Cap node radius to 1.5–2.5px, opacity ≤0.5. | **FIXED** |
| **B6** | Hero headline | Fragmented word colors ("We Make Technology" white, "Work For" steel, "What's Next." white). | Inconsistent inline span styling. | "We Make Technology Work" in white, "For What's Next." in `--steel-300` with subtle brush underline. | **FIXED** |
| **B7** | Hero visual | Shield/lock card is small, framed like a placeholder card with low contrast and smudged slash. | Fixed container wrapping a static raster image with low visual hierarchy. | Full unboxed vector composition: thin steel shield, central lock, multi-layered depth graph, and clean diagonal brush slash. | **FIXED** |
| **B8** | Eyebrows | Brand slash rendered as a tiny thin slash glyph. | Hardcoded text slash `/` or unstyled svg. | Replace with genuine traced brush-slash SVG (≥10×26px) with `--steel-500` on light, `--steel-300` on dark. | **FIXED** |
| **B9** | About section | Text column ~280px wide causing severe text wrapping; visual panel misaligned with massive empty gap. | Missing layout rules for `.aboutVisualCard` and `.aboutGrid` width constraints. | 12-col grid: columns 1–6 for text, columns 7–12 for framed illustration, top-aligned, 3 structured icon rows. | **FIXED** |
| **B10** | Capabilities header | Right half empty, heading and intro stacked on left. | Header lacked 2-column flex/grid. | Two-column header: H2 left, paragraph right, bottom-aligned. | **FIXED** |
| **B11** | Featured card (01) | Title missing or blank; body text low contrast gray on navy. | Property naming mismatch (`featuredDivision.title` vs styling) and low-contrast text color. | Render title in Jost 500 24px once, body text in `--text-on-dark` (13.9:1 AAA). | **FIXED** |
| **B12** | Cards 02 and 03 | Labels read "02AI & BI" without space; long "Addresses: ..." copy making cards uneven. | Concatenation of number and title without spacing; verbose copy on homepage cards. | Split number chip and title; concise one-sentence description; move verbose problem text to detail pages. | **FIXED** |
| **B13** | Capabilities grid | Inconsistent column widths, uneven bento layout. | 1.3fr + 1fr grid with nested 2x2. | Standardized 12-col bento: 01 spans 1–7 (2 rows), 02 & 03 in 8–12, 04 & 05 in row 3. | **FIXED** |
| **B14** | Below header | ~13px lighter band between header bottom and hero background. | Uncoordinated top margin and sticky offset on page container. | Eliminate gap; seamless bleed from header to hero background. | **FIXED** |
| **B15** | Alignment | Container edges differ between header, hero, and content sections by a few pixels. | Varying padding / max-width values across components. | Exact single container across all sections: `max-width: 1240px`, 32px padding (desktop) / 20px (mobile). | **FIXED** |
| **B16** | Information Architecture | Nav links to unverified or placeholder pages. | Solutions, Industries, Portfolio routes existed without explicit verified client case studies. | Retain 5 core capabilities in primary nav; keep Solutions, Industries, Portfolio transparently labeled as illustrative frameworks and research prototypes. | **FIXED** |

---

## 2. Root Cause Analysis & Architectural Fix Details

### B1, B2 & B14: Header Transparency, Over-Hero Contrast & Lighter Band Gap
- **Root Cause:**
  1. In `src/pages/Home.module.css`, `.page` had `padding-top: 72px`. This shifted the dark hero down by 72px, exposing the light `--paper` page background beneath the fixed transparent header. Because the header was transparent over a light background, its light text (`#E8EEF4`) and white-outline button were nearly invisible.
  2. The 72px top offset created the perceived "lighter band" between header bottom and hero background.
  3. Header scroll state was listening to `scrollY > 40` without instant synchronization on route navigation or mega-menu open.
- **Architectural Fix:**
  - Removed `.page` padding-top on the home page (`padding-top: 0;`).
  - Set `.hero` to `min-height: 100svh; padding-top: 72px;` so the hero's dark ink gradient begins seamlessly at viewport `y = 0` behind the fixed header.
  - Set `isSolid = scrolled || !isDarkHero || megaOpen || mobileOpen` with a responsive scroll threshold of `scrollY > 24px`.
  - When over hero (`!isSolid`), header is fully transparent with `logo-light.svg` (light steel text `#E8EEF4`) and white outline button.
  - When scrolled (`isSolid`), header transitions smoothly to solid white (`var(--surface)`), with `logo.svg` (dark steel text `#385068`), dark nav text (`#1B2D40`), 1px `--steel-100` border, and solid `--logo-steel` primary button.

### B3 & B4: Stray List Markers, Nav Underline & Redesigned Mega Menu
- **Root Cause:**
  - Global CSS reset lacked explicit `list-style: none` on `ul`, `ol`, and `li`, causing default user-agent disc markers to leak into header nav items and mega menu lists.
  - Mega menu was using cramped 11–12px text without equal column distributions or proper CTA alignment.
- **Architectural Fix:**
  - Added global `ul, ol { list-style: none; margin: 0; padding: 0; }` and `li { list-style: none; }` to `src/styles/globals.css`.
  - Added sliding 2px steel brush underline (`::after`) on `.navLink` that transitions with `transform: scaleX(1)` over 180ms ease. Removed bulky background highlights.
  - Rebuilt mega menu into 5 equal capability columns + 1 dark CTA card on a 1240px container grid.
  - Increased sub-service link typography to 13.5px Inter with hover color shifts and arrow animations.
  - Ensured opening mega menu triggers `isSolid`, guaranteeing a crisp white background with dark text and high contrast.

### B5, B6 & B7: Hero Section Rebuild, Headline Typography & Unboxed Visual
- **Root Cause:**
  - `Home.tsx` included a static `.scrollLine` element at the bottom of the hero that rendered as a thin stray vertical border.
  - `GraphBackground.tsx` generated unbounded node radii and opacities, creating stray bright dots at screen edges.
  - Hero headline had fractured word coloring ("We Make Technology" white, "Work For" steel, "What's Next." white).
  - Hero visual was a boxed raster graphic with low contrast and a smudged slash.
- **Architectural Fix:**
  - Deleted `.scrollLine` and `.scrollIndicator` elements.
  - In `GraphBackground.tsx`, strictly capped desktop nodes to `<= 45` (mobile `<= 25`), node radii to `1.5px – 2.5px`, and opacities to `<= 0.45`.
  - Headline styled with single consistent hierarchy: `"We Make Technology Work"` in pure white (`#FFFFFF`) and `"For What's Next."` in `--steel-300` (`#9FB3C8`) with an authentic hand-drawn vector brush underline.
  - Created `HeroSecureVisual.tsx`: an unboxed, high-DPI vector SVG composition featuring a thin steel shield (`#4A7BA6`), central lock icon (`#E8EEF4`), multi-layer depth network graph, and authentic brand brush slash watermark.

### B8: Eyebrow Brand Slash Mark
- **Root Cause:** Hardcoded ASCII `/` or undersized 7x18px glyphs were used in eyebrows across pages.
- **Architectural Fix:**
  - Replaced all eyebrow prefixes with `<SlashMark width={10} height={24} color="var(--steel-500)" />` on light surfaces and `color="var(--steel-300)"` on dark surfaces.
  - Updated all subpages (`About.tsx`, `Services.tsx`, `Solutions.tsx`, `ServiceDetail.tsx`, `SolutionDetail.tsx`, `Careers.tsx`, `Contact.tsx`, `CaseStudy.tsx`, `PageHero.tsx`).

### B9: About Section Grid & Missing Visual Framing
- **Root Cause:** Unbalanced flex/grid layout caused the left text column to wrap into narrow lines while the right visual suffered a 170px empty gap and bled past container boundaries.
- **Architectural Fix:**
  - Implemented 12-column grid (`display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start;`) strictly within the 1240px container.
  - Left column: balanced H2, 56ch lead paragraph, 3 structured icon rows for core principles (Pragmatic Architecture, Unified Digital Disciplines, Outcome Transparency), and approach CTA.
  - Right column: created `AboutVisualCard.tsx` top-aligned with heading. Features technical schematics, dot grid, diagonal brush slash watermark, and quote card from Dr. S. Selvi (`"Connecting technology with real business requirements through thoughtful engineering."`).

### B10, B11, B12 & B13: 12-Column Capabilities Bento Rebuild
- **Root Cause:**
  - Header was single-column stacked on left.
  - Featured card (01) lacked a prominent title and had low-contrast body text.
  - Supporting cards (02, 03) concatenated numbers and titles into strings like "02AI & BI", and had uneven heights due to verbose problem copy.
- **Architectural Fix:**
  - 2-column header: H2 left, intro paragraph right, bottom-aligned.
  - 12-column standardized Bento Grid:
    - **Tile 01 (Digital Engineering - Featured)**: spans 7 cols, 2 rows. Dark navy background (`--ink-800`), crisp white title (26px Jost), high-contrast body (`--text-on-dark`), sub-service chips, and primary CTA.
    - **Tile 02 (AI & Business Intelligence)**: spans 5 cols, row 1. White card, separate `02` badge and clean title, concise description, and explore link.
    - **Tile 03 (Enterprise Solutions)**: spans 5 cols, row 2. White card, separate `03` badge and clean title, concise description, and explore link.
    - **Tile 04 (Digital Growth)**: spans 6 cols, row 3. White card, separate `04` badge and clean title, concise description, and explore link.
    - **Tile 05 (Talent Solutions)**: spans 6 cols, row 3. White card, separate `05` badge and clean title, concise description, and explore link.

### B15: Container & Spacing Normalization
- **Root Cause:** Multiple components had inconsistent max-widths (`1340px`, `1200px`, `100%`) and varying padding values (`56px`, `40px`, `20px`).
- **Architectural Fix:**
  - Normalized `--container-max: 1240px;` and `--container-pad: 32px;` (mobile: 20px) in `src/styles/globals.css`.
  - Normalized section vertical padding to `clamp(72px, 8vw, 112px)`.

---

## 3. WCAG AA / AAA Contrast Verification

| Foreground | Background | Computed Ratio | WCAG Compliance | Verified Location |
|---|---|---|---|---|
| `#385068` (Logo Steel) | `#FFFFFF` (Surface) | **8.35:1** | **AAA** Pass | Primary buttons, links, icons |
| `#1B2D40` (Ink 800) | `#F7F8FA` (Paper) | **13.21:1** | **AAA** Pass | Body text, headings on light |
| `#1B2D40` (Ink 800) | `#FFFFFF` (Surface) | **13.88:1** | **AAA** Pass | Headings on white cards |
| `#5B6B7C` (Muted) | `#F7F8FA` (Paper) | **5.15:1** | **AA** Pass | Secondary text, subheadings |
| `#E8EEF4` (Text on Dark) | `#14212F` (Ink 900) | **13.95:1** | **AAA** Pass | Hero headline, dark card text |
| `#9FB3C8` (Steel 300) | `#14212F` (Ink 900) | **7.57:1** | **AAA** Pass | Hero subtext, tags, graph lines |
| `#FFFFFF` (White) | `#385068` (Logo Steel) | **8.35:1** | **AAA** Pass | Primary button text |
| `#FFFFFF` (White) | `#1B2D40` (Ink 800) | **13.88:1** | **AAA** Pass | Featured bento title |
