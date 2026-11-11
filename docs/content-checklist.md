# Content Readiness Gate — Checklist & Audit
_INSICLE Website Production Hardening | Branch: production-hardening_

This document audits all factual assertions, entity claims, and capability statements across the INSICLE website. In accordance with Section 7 of the Production Hardening specification, **no unverified commercial claims (e.g. fabricated clients, stats, awards, SLAs)** remain visible on the production website.

---

## 1. Company Identity & Governance

| Fact / Statement | Source / Location | Classification | Current Status | Action / Requirement |
|---|---|---|---|---|
| Legal Entity: INSICLE | `company.ts`, Footer | From Client | Verified | Proprietorship in Tamil Nadu |
| Proprietor: Dr. S. Selvi | `company.ts`, About.tsx, Contact.tsx | From Client | Verified | Displayed with respectful attribution |
| Registered Address: RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206 | `company.ts`, Footer, Contact | From Client | Verified | Confirmed physical office address |
| Contact Phone: +91 9600142824 | `company.ts`, Navbar, Footer, Contact | From Client | Verified | Valid Indian mobile/support line |
| Contact Email: rmkinsicle@gmail.com | `company.ts`, Navbar, Footer, Contact | From Client | Verified | Verified active contact inbox |
| GSTIN Number | `Footer.tsx` | Needs Client Confirmation | Marked Pending | Displayed as *Pending Client Verification* until client supplies 15-digit GSTIN |
| Operating Hours: Mon–Fri, 9:00 AM – 6:00 PM IST | `Contact.tsx` | Needs Client Confirmation | Softened | Standard business day hours |
| Social Media Handles (LinkedIn, X, Instagram) | `company.ts`, Footer | Needs Client Confirmation | Hidden | Set to `null`, links omitted until live profiles created |

---

## 2. Page-by-Page Statement Audit

### Homepage (`/`)
- **Headline ("We Make Technology Work For What's Next.")**: Generic capability statement (*From Client / Approved Plan*).
- **Subtext ("From custom software and intelligent solutions...")**: Generic capability description.
- **5 Divisions ("Digital Engineering", "AI & Business Intelligence", "Enterprise Solutions", "Digital Growth", "Talent Solutions")**: Core offerings (*From Client*).
- **Technical Showcase ("Semantic-Graph-Based Zero-Trust Policy Verification")**: Research prototype reference implementation (*Generic capability demonstration*). Unfinished draft disclaimers removed; labeled honestly as *Internal Engineering Showcase*.
- **Client Logos / Testimonials**: Zero fabricated logos. Section omitted until client provides verified references.

### About (`/about`)
- **Proprietor Statement ("— Dr. S. Selvi, Proprietor, INSICLE")**: From Client (*Verified*).
- **Mission & Vision Statements**: Approved generic capability descriptions. Draft notes (*"Proposed copy — pending company approval"*) removed from production HTML.
- **Values ("Innovation-Led, Outcome-Focused, People-Centred, Reliable Delivery")**: Professional practice pillars (*Generic capability description*).

### Services (`/services` and `/services/:slug`)
- **5 Capability Divisions + 28 Service Offerings**: Detailed technical definitions (*Generic capability descriptions*).
- **Engineering Process ("Discovery → Planning → Delivery → Handover")**: Standard engineering methodology.
- **FAQ Answers**: General engagement terms; no exaggerated commercial SLAs or price promises.

### Solutions (`/solutions` and `/solutions/:slug`)
- **5 Architecture Frameworks (CRM, HRM, Customer Service, Accounting, Sales Automation)**: Pre-engineered enterprise integration frameworks (*Generic capability description*).
- **Proprietary Software Disclaimers**: Clarified as custom integration blueprints, not proprietary SaaS products.

### Industries (`/industries`)
- **7 Industry Domain Blueprints (Healthcare, Education, Retail, Manufacturing, Finance, Logistics, Professional Services)**: Architectural domain applicability statements (*Generic capability descriptions*).
- **Client references**: No fake company names or stats.

### Portfolio (`/portfolio` and `/portfolio/:slug`)
- **3 Architectural Showcases**:
  1. *Semantic-Graph-Based Zero-Trust Policy Verification*
  2. *Cloud-Native Distributed Event Architecture*
  3. *Enterprise Operational Telemetry & BI Dashboard*
- **Classification**: Architectural prototypes and research benchmarks (*Generic capability demonstration*).
- **Empty Filter Categories**: Dead filter tab (`digital-growth`) removed until projects are added.

### Careers (`/careers`)
- **Engineering Principles**: Cultural pillars (*Generic capability description*).
- **Job Requisitions**: Dynamic empty state active — friendly invitation to submit CVs to `rmkinsicle@gmail.com`.

### Contact (`/contact`)
- **Form Fields & Validation**: Name, Email, Phone, Company, Service, Scope.
- **Honeypot Anti-Spam Field**: Active client-side honeypot trapping malicious bots without friction for human users.
- **Response Commitment**: Softened to "shortly" / standard review without fabricated 2-hour or 24-hour SLA guarantees.

### Legal Pages (`/privacy-policy`, `/terms`)
- **DPDP Act, 2023 Alignment**: Formulated for Indian jurisdiction, citing data categories, purpose, retention (24 months), user rights, and Grievance Officer contacts. Labeled with `TODO(client): legal review by corporate counsel`.

---

## 3. Data Items Required from Client Prior to Production Promotion

Before promoting `production-hardening` to `main`, the client should supply the following data items:

1. **GSTIN Number**: To replace *Pending Client Verification* in the footer.
2. **Custom Domain & DNS Records**: Apex domain (e.g. `insicle.com`) to replace `insicle.vercel.app`.
3. **Corporate Domain Email**: Custom domain mailboxes (e.g. `contact@insicle.com`) to replace `rmkinsicle@gmail.com` if desired.
4. **Social Media Profiles**: Official URLs for LinkedIn, X (Twitter), GitHub, or YouTube.
5. **Real Commercial Case Studies / Client Testimonials**: To populate `/portfolio` with verified client success stories and authorized metrics.
6. **Counsel Legal Review**: Final formal sign-off on `/privacy-policy` and `/terms`.
