# INSICLE Website --- Complete Frontend Implementation Plan

**Document type:** Product, brand, UX/UI and frontend implementation
specification\
**Project:** INSICLE corporate website\
**Primary design direction:** Creative + Enterprise Hybrid\
**Colour identity:** Electric Lime + Charcoal + Warm White\
**Theme:** Light\
**Animation intensity:** Moderate\
**Implementation target:** Production-ready, responsive, multi-page
company website

------------------------------------------------------------------------

## 0. Instructions and source-of-truth rules

This document is the authoritative implementation specification for the
INSICLE website.

### 0.1 Priority rules

1.  Follow this plan as the primary source of truth for branding,
    layout, content structure, design and implementation.
2.  Inspect the existing project before changing files. Preserve useful
    working code and configuration where appropriate.
3.  Do not stop after producing a homepage mockup. Implement all
    required routes, shared components, responsive states, interactions
    and supporting pages.
4.  Do not invent company facts, client names, testimonials, awards,
    project outcomes, employee counts, founding dates, certifications,
    partnerships or product ownership.
5.  Distinguish proposed service categories from confirmed company
    offerings. The service portfolio below is based on the user's
    instruction to use Surya Informatics as a business reference; it is
    not independently verified as INSICLE's actual portfolio.
6.  Where company-specific content is unknown, create clearly editable
    placeholders or neutral explanatory copy. Do not publish fictional
    claims as facts.
7.  Generate original, coherent visual assets for this brand. Do not use
    random unrelated stock imagery or copy another company's website,
    assets, text or layout.
8.  Complete implementation and verification, not just planning. Keep a
    progress log and update this plan's implementation checklist as work
    is completed.
9.  If a required tool or capability is unavailable, use the best
    available alternative and document the limitation. Do not claim an
    asset was generated or a test passed unless it actually did.
10. Ask the user only when a decision is genuinely blocking
    implementation, such as missing credentials or a business fact that
    cannot safely be represented with a placeholder.

### 0.2 Company source information

The uploaded joining letter identifies:

-   Company name: **INSICLE**
-   Proprietor: **Dr. S. Selvi**
-   Address: **RSM Nagar, Kavaraipettai, Gummidipoondi Taluk,
    Thiruvallur -- 601206**
-   Phone: **+91 9600142824**
-   Email: **rmkinsicle@gmail.com**

The letter also mentions an internship project titled
**"Semantic-Graph-Based Zero-Trust Security Policy Verification and
Conflict Detection System."** This is a possible technical showcase only
if the company approves public presentation and confirms that the
project may be described.

Use the contact details above consistently, but make them easy to edit
in one central configuration file. Before launch, verify that they
remain current and that the email/phone are approved for public use.

The joining letter does not establish INSICLE's full company profile,
service catalogue, client base, product ownership, industries,
portfolio, awards or history. Do not infer those details.

### 0.3 Reference business model

The user specified Surya Informatics (https://www.suryainformatics.com/)
as a reference for the kinds of services INSICLE performs. Use it only
as a business-category reference.

Reference categories to consider:

-   Application development
-   Mobile application development
-   Business intelligence
-   Artificial intelligence
-   Website development
-   Recruitment outsourcing
-   Implementation and integration
-   Digital marketing
-   Enterprise software categories such as CRM, HRM, customer service,
    accounting and sales automation

Do not copy Surya Informatics branding, visual design, text, images,
product names, customer information or proprietary content. Do not imply
that INSICLE owns Surya Informatics products. Publish only services and
products confirmed by INSICLE. Keep uncertain offerings configurable and
clearly marked for content approval.

------------------------------------------------------------------------

# 1. Project vision and positioning

## 1.1 Website objective

Create a polished, memorable, modern corporate website that presents
INSICLE as a technology and digital solutions company. The website
should communicate technical capability, creativity, business
understanding and professional reliability.

The website must support these business goals:

1.  Explain the company's capabilities clearly.
2.  Help prospective customers discover relevant services.
3.  Present approved solutions, products and case studies.
4.  Build credibility without fabricated claims.
5.  Encourage prospective clients to submit inquiries.
6.  Provide a clear contact route.
7.  Support future expansion of service pages, products, portfolio
    entries and careers content.

## 1.2 Brand positioning

**Proposed positioning:** Technology, Software Development and Digital
Solutions Company.

**Proposed brand personality:**

-   Creative
-   Technically capable
-   Innovative
-   Business-oriented
-   Reliable
-   Clear and approachable
-   Modern without being gimmicky

**Primary brand statement:**

> Creative thinking. Enterprise execution.

**Alternative hero headline:**

> We Make Technology Work For What's Next.

**Supporting message:**

> From custom software and intelligent solutions to digital experiences
> that support business growth, INSICLE aims to turn ambitious ideas
> into practical digital outcomes.

Treat all marketing copy as proposed copy until approved by the company.
Avoid claiming specific results or capabilities that have not been
verified.

## 1.3 Design philosophy

The visual identity is a **Creative + Enterprise Hybrid**:

-   Creative agency: bold typography, strong visual storytelling,
    expressive layouts.
-   Enterprise minimalism: clear navigation, structured content,
    accessible typography and professional information hierarchy.
-   Neo-minimalist influence: restrained geometric elements, strong
    contrast, modular grids and selective lime accents.
-   Technology influence: original abstract graphics, interface mockups
    and data/network visualizations.
-   Motion: moderate, purposeful and never obstructive.

The result should feel like a premium creative technology company, not a
generic IT template, not a SaaS admin dashboard, and not an excessively
experimental portfolio site.

------------------------------------------------------------------------

# 2. Brand identity and visual design system

## 2.1 Brand name and logo

Use the brand name exactly as:

**INSICLE**

Proposed wordmark treatment:

-   Geometric, contemporary sans-serif lettering.
-   Strong uppercase wordmark.
-   A restrained lime accent, such as a terminal dot or custom letter
    detail.
-   Optional abstract `I` or `N` symbol.
-   Logo must work on light and dark backgrounds.
-   Create horizontal wordmark, compact mark and favicon variants if
    image/vector generation tools permit.
-   Prefer clean SVG/vector artwork for the final logo. Do not use a
    raster logo as the only brand asset.
-   Do not invent a complex logo that is difficult to reproduce at small
    sizes.

The final logo concept is a proposal and should be editable if the
company supplies an official logo later.

## 2.2 Colour palette

Use the following tokens consistently.

  -----------------------------------------------------------------------
  Token                   Hex                     Intended use
  ----------------------- ----------------------- -----------------------
  Electric Lime           `#C5F45B`               Primary brand accent,
                                                  CTAs, highlights,
                                                  selected graphic
                                                  elements

  Deep Charcoal           `#171917`               Main text, dark
                                                  sections, footer

  Warm White              `#FAFAF6`               Main page background

  Lime Tint               `#EFF8DA`               Highlighted cards and
                                                  soft feature
                                                  backgrounds

  Slate Grey              `#777D75`               Supporting text and
                                                  metadata

  Border Grey             `#E5E7DF`               Borders, dividers and
                                                  outlines

  White                   `#FFFFFF`               Cards and contrast
                                                  surfaces

  Muted Charcoal          `#343A34`               Secondary dark surface
  -----------------------------------------------------------------------

Suggested colour distribution:

-   55% warm white / white
-   25% charcoal
-   15% light grey / lime tint
-   5% electric lime

Rules:

-   Lime is an accent, not a page-wide background colour.
-   Use charcoal text on lime surfaces.
-   Use lime accents on charcoal surfaces.
-   Do not use pale lime text on white for important content; contrast
    may be insufficient.
-   Maintain readable contrast for all body text and controls.
-   Avoid introducing unrelated blue, purple or orange accents.
-   Gradients, if used, should be subtle and derived from the approved
    palette.

## 2.3 Typography

Primary display font: **Space Grotesk**\
Body and interface font: **Inter**

Use locally hosted or reputable font delivery with sensible fallbacks.

Suggested weights:

-   Space Grotesk: 500, 600, 700
-   Inter: 400, 500, 600, 700

Suggested responsive typography:

  Element              Desktop     Mobile
  ----------------- ---------- ----------
  Hero heading        72--88px   40--48px
  Page heading        52--64px   34--42px
  Section heading     38--48px   28--34px
  Card heading        21--25px   19--22px
  Body                16--18px   15--16px
  Labels              12--14px   12--13px

Use `clamp()` for fluid typography where appropriate. Avoid overly tight
line-height or long line lengths.

## 2.4 Layout system

-   Maximum content width: approximately 1280px.
-   Desktop side padding: 64--80px.
-   Tablet side padding: approximately 32px.
-   Mobile side padding: approximately 20px.
-   Desktop grid: 12 columns.
-   Use asymmetric and editorial layouts selectively.
-   Keep content alignment and spacing consistent.
-   Use whitespace as a design element.
-   Avoid excessive card nesting.

Suggested spacing:

-   Section vertical spacing: 96--120px desktop.
-   Tablet section spacing: 72--88px.
-   Mobile section spacing: 56--72px.
-   Card radius: 12--20px.
-   Button radius: 8--12px.
-   Borders: 1px solid `#E5E7DF`.
-   Shadows: subtle and rare.

## 2.5 Component visual rules

**Buttons** - Primary: lime background, charcoal text. - Secondary:
transparent or warm-white background with charcoal border. -
Dark-section CTA: lime background and charcoal text. - Include clear
hover, active, focus and disabled states. - Use arrows sparingly as
directional affordances.

**Cards** - Mostly white/warm-white surfaces with thin borders. - Use
lime-tint cards for selected highlights. - Use charcoal cards for
selected featured content. - Prefer editorial card compositions over a
uniform grid of identical rounded boxes. - Keep descriptions concise and
readable.

**Icons** - Use Lucide React or a consistent line icon family. - Avoid
mixing multiple icon styles. - Do not use emoji as interface icons.

**Imagery** - Original abstract technology graphics. - Custom geometric
3D elements. - Carefully composed interface mockups. - Real company
photography only if supplied or approved. - No fake office photos, fake
team photos, fake customer logos or fake client projects.

------------------------------------------------------------------------

# 3. Information architecture and routes

Implement the following multi-page structure.

  -----------------------------------------------------------------------
  Route                   Page                    Purpose
  ----------------------- ----------------------- -----------------------
  `/`                     Home                    Brand introduction and
                                                  lead generation

  `/about`                About Us                Company profile,
                                                  purpose, values and
                                                  approach

  `/services`             Services                Overview of service
                                                  categories

  `/services/:slug`       Service detail          Dedicated service
                                                  information

  `/solutions`            Solutions               Approved
                                                  software/product
                                                  offerings

  `/solutions/:slug`      Solution detail         Product details,
                                                  features and inquiry
                                                  CTA

  `/industries`           Industries              Approved industry
                                                  applications

  `/portfolio`            Portfolio               Approved project and
                                                  case study gallery

  `/portfolio/:slug`      Case study              Project context,
                                                  solution and outcomes

  `/careers`              Careers                 Opportunities and
                                                  application information

  `/contact`              Contact                 Business inquiry and
                                                  company contact details

  `*`                     Not found               Custom 404 page
  -----------------------------------------------------------------------

If the project scope or content is insufficient for a detailed route,
still create a complete, intentional page with editable content
placeholders. Do not leave broken links or empty pages.

## 3.1 Primary navigation

Desktop navigation:

-   Home
-   About
-   Services
-   Solutions
-   Industries
-   Portfolio
-   Careers
-   Let's Talk (CTA)

Use a mega menu for Services and optionally Solutions.

The mega menu should group links logically and include short
descriptions. It must work with mouse, keyboard and touch.

Mobile navigation should use an accessible drawer or full-screen panel
with expandable groups.

## 3.2 Proposed service categories

Organize the reference categories into five capability divisions:

### 01 --- Digital Engineering

-   Application development
-   Website development
-   Web application development
-   Mobile application development
-   Custom software
-   API development and integration

### 02 --- AI & Business Intelligence

-   Artificial intelligence
-   Machine learning
-   Business intelligence
-   Data analytics
-   Reporting and visualization
-   Intelligent automation

### 03 --- Enterprise Solutions

-   CRM
-   HRM
-   Accounting and finance systems
-   Customer service systems
-   Sales automation
-   Software implementation and integration

### 04 --- Digital Growth

-   Digital marketing
-   Search engine optimization
-   Search engine marketing
-   Social media management
-   Content marketing
-   Performance marketing

### 05 --- Talent Solutions

-   Recruitment outsourcing
-   Candidate screening
-   Recruitment coordination
-   Employee onboarding solutions

These are proposed categories derived from the reference business model.
Store them in a central data file with a publication/approval field. Do
not present unapproved services as confirmed offerings.

## 3.3 Proposed product categories

Potential categories based on the reference website:

-   CRM
-   HRM
-   Customer service / help desk
-   Accounting and finance
-   Sales force automation
-   Social media management

Do not use another company's product name, logo, screenshots or
descriptions. Do not imply INSICLE owns products unless confirmed. If
there are no approved INSICLE products, label the page as enterprise
solution capabilities rather than claiming proprietary products.

## 3.4 Industries

Potential industry categories, subject to company approval:

-   Healthcare
-   Education
-   Retail and e-commerce
-   Manufacturing
-   Financial services
-   Logistics
-   Professional services

Do not imply existing clients or proven specialization without evidence.

------------------------------------------------------------------------

# 4. Page-by-page UX and UI specification

## 4.1 Homepage

The homepage is the primary brand experience. It should combine a
creative hero with structured enterprise information.

### Section 1 --- Header and navigation

-   Wordmark on the left.
-   Desktop navigation.
-   Lime CTA: `Let's Talk`.
-   Sticky behaviour after scrolling.
-   Subtle background/border transition.
-   Accessible mega menu.
-   Mobile navigation drawer.

### Section 2 --- Hero

Suggested headline:

> We Make Technology Work For What's Next.

Suggested supporting copy:

> From custom software and intelligent solutions to digital experiences
> that support business growth, we turn ambitious ideas into practical
> digital outcomes.

CTAs:

-   `Explore Our Services`
-   `Let's Discuss Your Project`

Visual direction:

-   Warm-white background.
-   Oversized Space Grotesk headline.
-   Highlight one phrase in lime or use a lime graphic accent.
-   Original abstract lime geometric 3D object or composition.
-   Small floating capability labels such as Digital Engineering, AI,
    Enterprise and Digital Growth.
-   Asymmetric split layout.
-   Avoid generic stock photos of people in offices.

The hero should occupy approximately 80--95% of the initial desktop
viewport, while remaining usable on mobile.

### Section 3 --- Capability strip

Display the five capability divisions in a slim horizontal strip:

-   Digital Engineering
-   AI & Business Intelligence
-   Enterprise Solutions
-   Digital Growth
-   Talent Solutions

A restrained marquee may be used on desktop. Respect reduced-motion
preferences and do not make the strip difficult to read.

### Section 4 --- About preview

Suggested heading:

> We Believe Great Technology Should Move Business Forward.

Use an editorial split layout:

-   Large heading on one side.
-   Company introduction on the other.
-   Optional abstract graphic.
-   Mission, vision and values preview.
-   Link to About page.

Use neutral editable copy until company-approved company history and
mission statements are supplied.

### Section 5 --- Services

Suggested heading:

> Different Capabilities. One Goal. Your Growth.

Show five visually distinct capability cards. Use a combination of
charcoal, lime-tint, white and lime surfaces.

Each card includes:

-   Division number or label.
-   Icon or small custom graphic.
-   Title.
-   One-sentence description.
-   Link to relevant service content.

Do not make all cards identical. Keep visual consistency while varying
composition.

### Section 6 --- Why INSICLE

Suggested heading:

> Built Around Ideas. Driven By Execution.

Proposed value themes:

-   Tailored Technology
-   Innovation-Led Thinking
-   Integrated Digital Capabilities
-   Business-Focused Solutions

Treat these as proposed brand statements and avoid unsupported
operational promises.

Use numbered editorial blocks or a clean grid. Do not invent
quantitative proof points.

### Section 7 --- AI and technology showcase

Suggested heading:

> Turning Data and Intelligence Into Action.

Use an original abstract network/data visualization, connected nodes or
restrained technical graphic.

Potential capability labels:

-   AI
-   Machine Learning
-   Business Intelligence
-   Analytics
-   Automation

The zero-trust semantic-graph project in the joining letter may be shown
as a technical/research showcase only after explicit company approval
and confirmation that the information is suitable for public release.

### Section 8 --- Enterprise solutions

Suggested heading:

> Smarter Systems for Everyday Business.

Potential categories:

-   CRM
-   HRM
-   Customer Service
-   Accounting and Finance
-   Sales Automation

Use original, fictional interface mockups only when clearly
illustrative. Do not represent them as actual INSICLE products or
deployed systems.

### Section 9 --- Industries

Display approved target industries using restrained typographic cards or
line illustrations. Do not claim customer relationships or
specialization without confirmation.

### Section 10 --- Portfolio and case studies

Use a visual project grid with:

-   Project name
-   Category
-   Short description
-   Technology used
-   Business challenge
-   Solution
-   Outcome, if verified
-   Case study link

Do not fabricate projects, customers, metrics or testimonials. If
approved projects are not supplied, create an editable empty state or
clearly labelled demonstration placeholders that are not published as
real work.

### Section 11 --- Contact CTA

Suggested heading:

> Got Something Ambitious in Mind?

Supporting text:

> Let's turn your next idea into something meaningful.

CTA: `Start a Conversation`

### Section 12 --- Footer

-   INSICLE wordmark
-   Short approved company description
-   Company links
-   Services links
-   Solutions links
-   Careers
-   Contact details
-   Approved social links only
-   Copyright notice

Use a deep charcoal footer with lime highlights and white text.

## 4.2 About page

Sections:

1.  About hero.
2.  Company overview.
3.  Mission and vision (editable placeholders until confirmed).
4.  Values and approach.
5.  Capabilities summary.
6.  Optional approved company timeline.
7.  Contact CTA.

Do not invent founding dates, company size, awards, certifications or
history.

## 4.3 Services overview page

Sections:

1.  Services hero.
2.  Short explanation of the company's capabilities.
3.  Five capability divisions.
4.  Individual service cards.
5.  Delivery/process overview (generic proposed process, editable).
6.  FAQ section.
7.  Contact CTA.

Each service should link to `/services/:slug`.

## 4.4 Individual service detail template

Create a reusable template with:

1.  Service-specific hero.
2.  Overview.
3.  Business problem addressed.
4.  Service capabilities.
5.  Potential use cases.
6.  Process or delivery approach.
7.  Related services.
8.  FAQ.
9.  Inquiry CTA.

Use service-specific imagery or graphic treatments, but retain the core
brand system.

## 4.5 Solutions page

Sections:

1.  Solutions hero.
2.  Approved product/solution categories.
3.  Product feature cards.
4.  Interface mockups.
5.  Benefits and use cases.
6.  Product inquiry CTA.

Clearly distinguish proprietary products, implementation services,
third-party integrations and illustrative concepts.

## 4.6 Industries page

-   Intro hero.
-   Industry grid.
-   Industry-specific challenges and potential digital solutions.
-   Related service links.
-   Contact CTA.

Only present industries as actual specializations when approved.
Otherwise frame them as potential application areas.

## 4.7 Portfolio page

-   Portfolio hero.
-   Category filters.
-   Project grid.
-   Case study cards.
-   Empty state if approved project data is unavailable.

Category filtering must work. Avoid decorative filters that do nothing.

## 4.8 Case study detail page

Reusable structure:

-   Project title and category.
-   Project overview.
-   Challenge.
-   Solution.
-   Scope and technology.
-   Process.
-   Verified results, if available.
-   Related projects.
-   Contact CTA.

## 4.9 Careers page

-   Careers hero.
-   Company culture copy only if approved.
-   Open positions list.
-   Job detail or application action.
-   Application form or contact instructions.
-   Empty state when no vacancies are supplied.

Do not show fictional open positions as real vacancies.

## 4.10 Contact page

Display the joining-letter contact information, subject to confirmation:

-   Phone: +91 9600142824
-   Email: rmkinsicle@gmail.com
-   Address: RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur
    -- 601206

Form fields:

-   Name
-   Business email
-   Phone
-   Company
-   Service of interest
-   Project requirements

Requirements:

-   Client-side validation.
-   Accessible labels and errors.
-   Success and failure states.
-   Spam protection appropriate to the eventual backend.
-   No fake success message.
-   If no backend endpoint exists, provide a clearly documented mailto
    or configurable integration fallback.
-   Do not expose secrets in frontend code.

------------------------------------------------------------------------

# 5. Image and visual asset generation plan

Original visuals are a major part of this design. Generate a coherent
brand asset library instead of using unrelated images.

## 5.1 Asset generation principles

1.  Use the approved lime, charcoal and warm-white palette.
2.  Keep lighting, materials and composition consistent.
3.  Prefer abstract geometric objects, editorial compositions and
    technical visualizations.
4.  Avoid text inside generated images. Render all headings and labels
    as HTML.
5.  Avoid generating logos with misspelled text. Build the wordmark as
    SVG/text.
6.  Generate at sufficiently high resolution for desktop and create
    optimized derivatives.
7.  Use WebP or AVIF for raster assets where supported.
8.  Keep image alt text descriptive and meaningful.
9.  Do not use generated imagery to imply real staff, customers,
    facilities or products.
10. Keep assets in a clearly organized directory and use descriptive
    filenames.

## 5.2 Required visual asset inventory

Generate or create the following assets as needed:

  ------------------------------------------------------------------------
  Asset ID                Asset                   Visual direction
  ----------------------- ----------------------- ------------------------
  A01                     Hero abstract visual    Lime geometric 3D
                                                  composition on warm
                                                  white

  A02                     Brand background        Very subtle
                          texture                 geometric/grid texture

  A03                     Digital engineering     Abstract software/code
                          visual                  architecture graphic

  A04                     AI visual               Connected nodes, data
                                                  network or intelligence
                                                  visualization

  A05                     Enterprise visual       Abstract modular
                                                  system/dashboard
                                                  composition

  A06                     Digital growth visual   Geometric
                                                  growth/analytics
                                                  composition

  A07                     Talent visual           Abstract
                                                  people/process/network
                                                  illustration; no fake
                                                  portraits

  A08                     About visual            Editorial abstract brand
                                                  composition

  A09                     Solutions visual        Original generic
                                                  dashboard mockup,
                                                  clearly illustrative

  A10                     Industry visual set     Consistent abstract
                                                  icons or illustrations

  A11                     Portfolio placeholder   Neutral editable project
                          visuals                 thumbnails, not fake
                                                  client work

  A12                     Contact visual          Bold lime/charcoal
                                                  geometric composition

  A13                     Favicon                 Simple high-contrast
                                                  INSICLE symbol

  A14                     Social preview          Brand-consistent Open
                                                  Graph image
  ------------------------------------------------------------------------

Not every asset needs to be a separate generated raster image. Use
CSS/SVG for simple shapes, line icons and geometric decorations.

## 5.3 Image prompt direction

Use a shared visual style in all prompts:

> Premium contemporary creative technology studio art direction.
> Electric acid lime #C5F45B, deep charcoal #171917 and warm white
> #FAFAF6. Minimal geometric forms, sophisticated studio lighting,
> subtle depth, clean editorial composition, strong negative space,
> high-end 3D art direction, modern enterprise technology aesthetic. No
> text, no logos, no watermarks, no people unless specifically required.

Adapt the subject and composition for each asset. Maintain consistency
in lighting, materials and colour balance.

## 5.4 Asset implementation

-   Store raster assets in `public/images/` or the project's existing
    asset convention.
-   Store SVG illustrations and icons in `src/assets/`.
-   Use responsive image sources where useful.
-   Specify width/height or aspect ratio to reduce layout shift.
-   Lazy-load below-the-fold images.
-   Prioritize the hero image.
-   Avoid large video backgrounds.
-   Use CSS/SVG for simple decorative graphics rather than generating
    images unnecessarily.

------------------------------------------------------------------------

# 6. Animation and interaction specification

Animation intensity: **Moderate**.

Use Motion (Framer Motion) for the majority of component animations. Use
GSAP only for interactions that genuinely need timeline control or
complex scroll choreography. Avoid duplicate animation systems.

  Element             Interaction                              Duration / behaviour
  ------------------- ---------------------------------------- ----------------------
  Hero heading        Staggered word/line reveal               700--900ms
  Hero visual         Gentle floating movement                 4--6s, low amplitude
  Header              Background/border transition on scroll   250ms
  Mega menu           Fade and short vertical movement         180--250ms
  Service cards       Small lift and icon movement             200--280ms
  Section reveal      Fade and translate upward                450--550ms
  Portfolio imagery   Subtle image scale on hover              300--400ms
  CTA arrow           Short directional movement               180--220ms
  Statistics          Count-up only for verified figures       1--1.5s
  Route transition    Restrained fade                          200--300ms

Rules:

-   Animate opacity and transform where possible.
-   Avoid animating layout properties unnecessarily.
-   Do not hijack scrolling.
-   Do not require hover for essential content.
-   Disable or simplify nonessential motion for
    `prefers-reduced-motion`.
-   Ensure animations do not delay content or navigation.
-   Avoid continuous motion on mobile unless it adds clear value.
-   Use one consistent easing system.

Create centralized variants, for example:

-   `fadeUp`
-   `staggerContainer`
-   `staggerItem`
-   `fadeIn`
-   `scaleIn`
-   `slideIn`
-   `buttonHover`

------------------------------------------------------------------------

# 7. Frontend technology and implementation architecture

## 7.1 Preferred stack

Use the existing project's stack if it is already functional and
suitable. Otherwise use:

-   React
-   Vite
-   TypeScript
-   Tailwind CSS
-   React Router
-   Motion (`motion/react` or the compatible installed package)
-   Lucide React
-   React Hook Form
-   Zod
-   Optional GSAP
-   Optional Lenis
-   Optional Swiper

Use React Three Fiber only if a genuinely useful 3D visual is required
and performance remains acceptable. Do not add heavy dependencies merely
for decoration.

If SEO requirements or the existing repository make server rendering
important, evaluate Next.js before changing the stack. Do not migrate an
existing working application without a clear reason.

## 7.2 Suggested project structure

Adapt this structure to the repository rather than blindly replacing it.

``` text
insicle-website/
├── public/
│   ├── logo.svg
│   ├── favicon.svg
│   ├── images/
│   └── fonts/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── illustrations/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── AnimatedSection.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   ├── services/
│   │   ├── solutions/
│   │   ├── portfolio/
│   │   └── forms/
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Solutions.tsx
│   │   ├── SolutionDetail.tsx
│   │   ├── Industries.tsx
│   │   ├── Portfolio.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/
│   │   ├── company.ts
│   │   ├── services.ts
│   │   ├── solutions.ts
│   │   ├── navigation.ts
│   │   ├── industries.ts
│   │   └── projects.ts
│   │
│   ├── animations/
│   │   ├── variants.ts
│   │   └── transitions.ts
│   │
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 7.3 Centralized company configuration

Create `src/data/company.ts` or an equivalent central configuration
containing:

-   Company name
-   Logo paths
-   Phone
-   Email
-   Address
-   Navigation
-   Social URLs (only when verified)
-   Business description (editable)
-   SEO defaults

Do not hardcode company contact details in multiple components.

## 7.4 Data-driven content

Use typed data structures for:

-   Services
-   Solutions/products
-   Industries
-   Portfolio projects
-   Careers
-   FAQs
-   Navigation

Include an explicit `approved`, `published` or equivalent field where
company approval is needed. Hide unapproved claims from public-facing
content by default.

------------------------------------------------------------------------

# 8. Responsive design requirements

Support the following breakpoints, adapting to the existing CSS
framework where appropriate:

-   Mobile: below 768px
-   Tablet: 768--1023px
-   Desktop: 1024--1439px
-   Large desktop: 1440px and above

### Desktop

-   Full navigation and mega menu.
-   12-column grid.
-   Large hero typography.
-   Asymmetric editorial layouts.
-   Rich visual assets.
-   Hover interactions.

### Tablet

-   Compact navigation.
-   Two-column service grids where appropriate.
-   Smaller hero visual.
-   Reduced section spacing.

### Mobile

-   Accessible hamburger navigation.
-   Single-column content.
-   Stacked CTA buttons when needed.
-   Fluid typography.
-   Simplified hero graphics.
-   No hover-only functionality.
-   Reduced nonessential animation.
-   Touch targets approximately 44px or larger.
-   No horizontal overflow.
-   Forms must be easy to complete.

Test at representative widths: 360px, 390px, 430px, 768px, 1024px,
1280px and 1440px.

------------------------------------------------------------------------

# 9. Forms and functional requirements

A visually complete website must also work.

## 9.1 Contact form

Fields:

-   Name
-   Business email
-   Phone
-   Company
-   Service of interest
-   Project requirements

Implement:

-   Required field validation.
-   Email validation.
-   Phone validation that accommodates relevant international formats.
-   Clear inline errors.
-   Accessible labels.
-   Loading state.
-   Success state only after actual successful submission.
-   Error state.
-   Spam protection when connected to a backend.

If no backend exists:

-   Implement a configurable form submission adapter.
-   Provide a clearly documented `mailto:` fallback if appropriate.
-   Do not display a false "message sent" confirmation.
-   Do not hardcode API keys or secrets.

## 9.2 Navigation and links

-   Every visible navigation link must work.
-   All CTA buttons must have a meaningful destination or action.
-   Service cards must link to the correct service page.
-   Portfolio filters must filter actual data.
-   Mobile menu must open, close and navigate correctly.
-   Add a custom 404 page.
-   Use semantic anchors for navigation and buttons for actions.

## 9.3 Careers

-   Display approved vacancies only.
-   If there are no approved vacancies, show a clear no-openings state.
-   Do not create fake job advertisements.

## 9.4 Product and solution details

-   Distinguish actual INSICLE products from service capabilities.
-   Use illustrative dashboard mockups only when labelled appropriately.
-   Do not imply third-party products are proprietary.

------------------------------------------------------------------------

# 10. SEO, accessibility and performance

## 10.1 SEO

Implement:

-   Unique page title and meta description.
-   Canonical URLs.
-   Open Graph metadata.
-   XML sitemap.
-   Robots.txt.
-   Semantic heading hierarchy.
-   Descriptive image alt text.
-   Internal linking.
-   Organization structured data using only verified company
    information.
-   Service structured data where applicable.
-   Correct social preview image.
-   Descriptive route slugs.

Suggested homepage title:

`INSICLE | Technology & Digital Solutions`

Suggested description:

`Explore INSICLE's technology, software development and digital solutions. Contact the team to discuss your business requirements.`

Treat this as editable proposed copy.

## 10.2 Accessibility

Target WCAG 2.2 AA.

-   Keyboard-accessible navigation.
-   Visible focus states.
-   Semantic HTML.
-   Accessible forms and errors.
-   Sufficient colour contrast.
-   Alt text for meaningful images.
-   Decorative images hidden from assistive technology.
-   Reduced-motion support.
-   Logical focus order.
-   No keyboard traps.
-   Accessible mobile navigation.

## 10.3 Performance targets

Use these as verification targets, not claims:

  Metric                             Target
  --------------------------- -------------
  Lighthouse Performance                90+
  Lighthouse Accessibility              95+
  Lighthouse SEO                        95+
  Largest Contentful Paint       Under 2.5s
  Interaction to Next Paint     Under 200ms
  Cumulative Layout Shift         Under 0.1

Performance practices:

-   AVIF/WebP images.
-   Responsive image sizes.
-   Lazy-load below-the-fold images.
-   Prioritize hero assets.
-   Avoid oversized video backgrounds.
-   Minimize dependencies.
-   Route-based code splitting.
-   Avoid unnecessary re-renders.
-   Use transform/opacity animations.
-   Reserve image dimensions to prevent layout shifts.
-   Use appropriate caching and compression in deployment.

------------------------------------------------------------------------

# 11. Testing and quality assurance

The implementation is not complete until it has been run and tested.

## 11.1 Functional testing

Verify:

-   All routes render.
-   Navbar and mega menus work.
-   Mobile menu works.
-   Every CTA has a meaningful action.
-   Service navigation works.
-   Product/solution navigation works.
-   Portfolio filtering works.
-   Contact form validation works.
-   Form submission behaviour is honest and functional.
-   Careers empty state works.
-   404 route works.
-   No broken images or missing assets.
-   No console errors.

## 11.2 Responsive testing

Test at:

-   360px
-   390px
-   430px
-   768px
-   1024px
-   1280px
-   1440px

Check:

-   Horizontal overflow.
-   Heading wrapping.
-   Image cropping.
-   Card layout.
-   Navigation.
-   Form usability.
-   Footer.
-   Touch interactions.

## 11.3 Visual QA

Use browser screenshots or the available browser/Computer Use tooling.

Inspect at least:

-   Homepage top viewport.
-   Entire homepage.
-   About page.
-   Services page.
-   One service detail page.
-   Solutions page.
-   Portfolio page.
-   Careers page.
-   Contact page.
-   Mobile homepage.
-   Mobile navigation.

Compare the actual rendering against this specification. Fix spacing,
typography, asset quality, contrast, alignment and responsive issues.

## 11.4 Build QA

Run the repository's actual scripts. At minimum:

-   Install dependencies as appropriate.
-   Run lint if configured.
-   Run type checking if configured.
-   Run tests if configured.
-   Run production build.
-   Fix all build-blocking errors.
-   Report any remaining nonblocking warnings.

Do not claim a test passed without running it.

------------------------------------------------------------------------

# 12. Implementation phases and completion checklist

Work in these phases.

## Phase 1 --- Repository inspection and foundation

-   [ ] Inspect files and existing project structure.
-   [ ] Identify framework, package manager and existing scripts.
-   [ ] Preserve useful existing work.
-   [ ] Establish brand tokens.
-   [ ] Configure typography.
-   [ ] Create foundational components.
-   [ ] Establish global responsive rules.

## Phase 2 --- Brand assets

-   [ ] Create logo/wordmark.
-   [ ] Create favicon.
-   [ ] Generate hero visual.
-   [ ] Generate service illustrations.
-   [ ] Generate AI/technology visual.
-   [ ] Create original solution mockups if needed.
-   [ ] Generate contact and supporting visuals.
-   [ ] Optimize all assets.
-   [ ] Verify asset paths.

## Phase 3 --- Shared layout

-   [ ] Header.
-   [ ] Desktop navigation.
-   [ ] Services mega menu.
-   [ ] Mobile navigation.
-   [ ] Footer.
-   [ ] Buttons.
-   [ ] Cards.
-   [ ] Section headings.
-   [ ] Reusable page containers.

## Phase 4 --- Homepage

-   [ ] Hero.
-   [ ] Capability strip.
-   [ ] About preview.
-   [ ] Services.
-   [ ] Why INSICLE.
-   [ ] AI/technology showcase.
-   [ ] Enterprise solutions.
-   [ ] Industries.
-   [ ] Portfolio preview.
-   [ ] Contact CTA.
-   [ ] Footer.

## Phase 5 --- Internal pages

-   [ ] About.
-   [ ] Services overview.
-   [ ] Individual service template and routes.
-   [ ] Solutions.
-   [ ] Solution details.
-   [ ] Industries.
-   [ ] Portfolio.
-   [ ] Case study details.
-   [ ] Careers.
-   [ ] Contact.
-   [ ] 404.

## Phase 6 --- Interaction and animation

-   [ ] Central animation variants.
-   [ ] Hero entrance.
-   [ ] Scroll reveals.
-   [ ] Card hover.
-   [ ] Mega menu.
-   [ ] Mobile menu.
-   [ ] CTA transitions.
-   [ ] Reduced-motion behaviour.

## Phase 7 --- Content and functionality

-   [ ] Central company configuration.
-   [ ] Data-driven services.
-   [ ] Data-driven solutions.
-   [ ] Portfolio data and empty states.
-   [ ] Careers data and empty states.
-   [ ] Contact form.
-   [ ] Validation and error handling.
-   [ ] Functional links.

## Phase 8 --- QA and deployment readiness

-   [ ] Desktop QA.
-   [ ] Tablet QA.
-   [ ] Mobile QA.
-   [ ] Accessibility checks.
-   [ ] SEO metadata.
-   [ ] Performance optimization.
-   [ ] No broken assets.
-   [ ] No console errors.
-   [ ] Production build succeeds.
-   [ ] README updated.
-   [ ] Known limitations documented.

------------------------------------------------------------------------

# 13. Definition of done

The website is considered complete only when:

1.  All specified routes exist and have intentional content/layout.
2.  The shared design system is consistent across every page.
3.  Lime/charcoal/warm-white identity is applied correctly.
4.  Required original visual assets have been created or documented as
    unavailable.
5.  All navigation and CTA interactions work.
6.  The site is responsive at the specified breakpoints.
7.  Forms validate and do not falsely claim successful submission.
8.  Unverified business claims are not published as facts.
9.  SEO metadata and accessibility fundamentals are implemented.
10. The production build succeeds.
11. Browser-based visual inspection has been performed.
12. Known limitations and remaining company content approvals are
    documented.

## Final design principle

**INSICLE should look creative at first glance and credible after closer
inspection.**

Use lime as the recognizable brand signature, charcoal for authority,
warm white for clarity, strong typography for personality, and
structured enterprise layouts for trust.
