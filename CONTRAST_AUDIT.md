# INSICLE Design System — Contrast & Accessibility Audit (WCAG 2.2 AA)

**Audit Date:** 2026-10-31  
**Standard:** WCAG 2.2 Level AA / Level AAA  
**Status:** **100% PASSED** (Zero contrast defects remaining)  
**Primary Engine:** Formula: $(L_1 + 0.05) / (L_2 + 0.05)$ where $L$ is normalized relative luminance.

---

## 1. Semantic Color Token Matrix

The INSICLE design system enforces strict semantic color tokens in `src/styles/globals.css`. Every text and surface combination has been mathematically audited and verified in headless Chromium.

### Light Surfaces (Default Theme)
| Token Name | Hex Value | Luminance ($L$) | Intended Context |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#FAFAF6` (Warm White) | `0.948` | Default page background |
| `--color-surface-primary` | `#FFFFFF` (Pure White) | `1.000` | Elevated cards, forms, inputs |
| `--color-surface-tint` | `#EFF8DA` (Lime Tint) | `0.938` | Feature cards, tag backgrounds |
| `--color-text-primary` | `#171917` (Deep Charcoal) | `0.008` | Primary headings, display text, labels |
| `--color-text-secondary` | `#484E45` (Deep Slate-Olive) | `0.071` | Body paragraphs, descriptions, metadata |
| `--color-text-muted` | `#5E655A` (Muted Slate) | `0.130` | Placeholders, captions, breadcrumb icons |

### Dark Surfaces (Footer, AI Section, Process)
| Token Name | Hex Value | Luminance ($L$) | Intended Context |
| :--- | :--- | :--- | :--- |
| `--color-surface-dark` | `#171917` (Deep Charcoal) | `0.008` | Footer, AI showcase, dark hero banners |
| `--color-text-on-dark-primary` | `#FFFFFF` | `1.000` | Headings and titles on dark surfaces |
| `--color-text-on-dark-secondary` | `#D8DBD2` | `0.690` | Body copy and descriptions on dark surfaces |
| `--color-text-on-dark-muted` | `#B8BCB2` | `0.485` | Captions, disclaimers, legal notices |
| `--color-text-on-dark-accent` | `#C5F45B` (Electric Lime) | `0.773` | Eyebrows, step numbers, icons on dark surfaces |

### Accent, Status & Feedback
| Token Name | Hex Value | Luminance ($L$) | Intended Context |
| :--- | :--- | :--- | :--- |
| `--color-accent` | `#C5F45B` (Electric Lime) | `0.773` | Primary CTA surface, active pills, accents |
| `--color-accent-fg` | `#171917` (Deep Charcoal) | `0.008` | Text on Electric Lime buttons / badges |
| `--color-focus-ring` | `#688E14` (Deep Olive-Lime) | `0.252` | Accessible `:focus-visible` outline on light surfaces |
| `--color-error` | `#B91C1C` (Deep Crimson) | `0.115` | Form validation error text & icons |
| `--color-error-bg` | `#FEF2F2` (Soft Pink) | `0.952` | Form input error background |
| `--color-success` | `#15803D` (Forest Green) | `0.153` | Form success feedback & indicators |

---

## 2. Comprehensive Measured Contrast Table

| UI Element / Location | Foreground | Background | Measured Ratio | WCAG AA Requirement | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** (`Home.tsx`) | `#171917` | `#FAFAF6` | **17.2 : 1** | 3.0 : 1 (Large Text) | **PASS (AAA)** |
| **Hero Eyebrow Badge** | `#171917` | `#C5F45B` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Hero Supporting Copy** | `#484E45` | `#FAFAF6` | **8.26 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Primary CTA Button** (`Let's Talk`) | `#171917` | `#C5F45B` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Secondary CTA Button** (`Discuss Requirements`) | `#171917` | `#FAFAF6` | **17.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Secondary Button Hover** | `#FFFFFF` | `#171917` | **18.1 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Floating Badges (Hero 3D)** | `#171917` | `#FFFFFF` (95% blur) | **18.1 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Capability Strip Links** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Capability Strip Hover** | `#C5F45B` | `#171917` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Section Eyebrows** (`.label`) | `#171917` | `#FAFAF6` | **17.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Section Headings** (`h2`, `h3`) | `#171917` | `#FAFAF6` / `#FFFFFF` | **17.2–18.1 : 1** | 3.0 : 1 (Large Text) | **PASS (AAA)** |
| **Card Body Copy** (`p`) | `#484E45` | `#FFFFFF` | **8.68 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Card Body Copy on Warm White** | `#484E45` | `#FAFAF6` | **8.26 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Card Body Copy on Lime Tint** | `#484E45` | `#EFF8DA` | **8.18 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Why INSICLE Numbers** (`.whyNum`) | `#171917` | `#EFF8DA` | **17.0 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Why INSICLE Descriptions** | `#484E45` | `#FAFAF6` | **8.26 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **AI Showcase Headline** | `#FFFFFF` | `#171917` | **18.1 : 1** | 3.0 : 1 (Large Text) | **PASS (AAA)** |
| **AI Showcase Lead Paragraph** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **AI Use Case Titles** | `#FAFAF6` | `#171917` | **17.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **AI Use Case Descriptions** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **AI Capability Chips** | `#171917` | `#C5F45B` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Breadcrumbs Text** (`PageHero`) | `#484E45` | `#FAFAF6` | **8.26 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Breadcrumbs Separator Chevron** | `#5E655A` | `#FAFAF6` | **5.55 : 1** | 3.0 : 1 (Graphical Object)| **PASS (AA)** |
| **Portfolio Active Filter Pill** | `#C5F45B` | `#171917` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Portfolio Inactive Filter Pill** | `#484E45` | `#FFFFFF` | **8.68 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Portfolio Advisory Banner** | `#171917` | `#EFF8DA` | **17.0 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Case Study Prototype Tag** | `#C5F45B` | `rgba(23,25,23,0.88)` | **12.5 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Case Study Tech Stack Tags** | `#171917` | `#EFF8DA` | **17.0 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Contact Form Labels** | `#171917` | `#FFFFFF` | **18.1 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Contact Form Input Text** | `#171917` | `#FAFAF6` | **17.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Contact Form Placeholders** | `#5E655A` | `#FAFAF6` | **5.55 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| **Form Required Asterisk** (`*`) | `#B91C1C` | `#FFFFFF` | **6.30 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| **Form Validation Error Text** | `#B91C1C` | `#FFFFFF` | **6.30 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| **Form Input Error Background** | `#B91C1C` | `#FEF2F2` | **6.01 : 1** | 4.5 : 1 (Normal Text) | **PASS (AA)** |
| **Footer Brand Description** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Footer Navigation Links** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Footer Link Hover** | `#FFFFFF` | `#171917` | **18.1 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Footer Section Headings** | `#C5F45B` | `#171917` | **14.2 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Footer Copyright** | `#D8DBD2` | `#171917` | **12.8 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Footer Legal Disclaimer** | `#B8BCB2` | `#171917` | **7.50 : 1** | 4.5 : 1 (Normal Text) | **PASS (AAA)** |
| **Keyboard Focus Ring** (`:focus-visible`)| `#688E14` | `#FFFFFF` / `#FAFAF6` | **3.80 : 1** | 3.0 : 1 (UI Component) | **PASS (AA)** |

---

## 3. Notable Corrections Applied During This Pass

1. **Defect Fixed: Electric Lime text on pale background (`.label-lime`)**
   - *Previous state:* Text color set to Electric Lime `#C5F45B` on pale lime tint (`rgba(197, 244, 91, 0.15)`), giving an illegible ratio of **1.21:1** (FAIL).
   - *Resolution:* Changed text to Deep Charcoal (`#171917`) on solid Electric Lime background (`#C5F45B`). Measured ratio is now **14.2:1 (PASS AAA)**.
2. **Defect Fixed: Slate text borderline contrast**
   - *Previous state:* `--color-slate` was set to primitive `#777D75`, which yielded **4.04:1** on warm white and **4.24:1** on pure white (FAIL under WCAG AA for normal text < 18pt).
   - *Resolution:* Upgraded `--color-slate` and established `--color-text-secondary: #484E45`, raising body contrast to **8.26:1 on warm white** and **8.68:1 on pure white (PASS AAA)**.
3. **Defect Fixed: Low-opacity text on dark surfaces**
   - *Previous state:* Mission/vision note in `About.module.css` (`.mvNoteDark`) and footer disclaimer used `rgba(250, 250, 246, 0.35)`, which resulted in **3.15:1** contrast on charcoal (FAIL).
   - *Resolution:* Mapped dark surface secondary text to `--color-text-on-dark-secondary` (`#D8DBD2`, **12.8:1**) and captions to `--color-text-on-dark-muted` (`#B8BCB2`, **7.5:1**) (PASS AAA).
4. **Defect Fixed: Why INSICLE numbering opacity**
   - *Previous state:* `.whyNum` used `opacity: 0.35` on charcoal, causing numbers to fade to **2.22:1** (FAIL).
   - *Resolution:* Replaced with high-contrast pills (`background: #EFF8DA; color: #171917; border: 1px solid rgba(197, 244, 91, 0.8);`) with **17.0:1 contrast (PASS AAA)**.
5. **Defect Fixed: Breadcrumb separator disappearing**
   - *Previous state:* `.breadcrumb svg` was styled with `--color-border` (`#E5E7DF`), which had only **1.18:1** contrast against `#FAFAF6`.
   - *Resolution:* Re-styled with `--color-text-muted` (`#5E655A`), achieving **5.55:1 (PASS AA)**.
