import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Code2,
  Brain,
  Building2,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Layers,
  Sparkles,
  Compass,
  FileCheck2,
  Lock,
} from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import GraphBackground from '@/components/common/GraphBackground'
import SlashMark from '@/components/common/SlashMark'
import SlashDivider from '@/components/common/SlashDivider'
import HeroSecureVisual from '@/components/common/HeroSecureVisual'
import AboutVisualCard from '@/components/common/AboutVisualCard'
import { serviceDivisions } from '@/data/services'
import { industries } from '@/data/industries'
import { projects } from '@/data/projects'
import { staggerContainer, staggerItem, heroText } from '@/animations/variants'
import styles from './Home.module.css'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Building2,
  TrendingUp,
  Users,
}

const capabilityLinks = [
  { name: 'Digital Engineering', href: '/services#digital-engineering' },
  { name: 'AI & Business Intelligence', href: '/services#ai-business-intelligence' },
  { name: 'Enterprise Solutions', href: '/services#enterprise-solutions' },
  { name: 'Digital Growth', href: '/services#digital-growth' },
  { name: 'Talent Solutions', href: '/services#talent-solutions' },
]

const whyPrinciples = [
  {
    number: '01',
    title: 'Purpose-Driven Problem Solving',
    description:
      'We do not build technology for its own sake. Every engagement begins by clarifying the operational bottleneck, business objective, and intended real-world outcome before writing code.',
  },
  {
    number: '02',
    title: 'Thoughtful Technology Selection',
    description:
      'We evaluate frameworks, cloud architectures, and databases against long-term maintainability, team adoption, and operational cost rather than chasing short-lived industry hype.',
  },
  {
    number: '03',
    title: 'Integrated Digital Capabilities',
    description:
      'From custom engineering and intelligent data pipelines to enterprise systems and market visibility, all capabilities operate harmoniously under a single disciplined team.',
  },
  {
    number: '04',
    title: 'Clear Communication & Collaboration',
    description:
      'Transparent milestone tracking, clean technical documentation, and direct engineering access ensure projects progress predictably from initial scoping to reliable handover.',
  },
]

export default function Home() {
  const featuredDivision = serviceDivisions[0] // 01 Digital Engineering
  const supportingDivisions = serviceDivisions.slice(1, 5) // 02, 03, 04, 05
  const showcaseProject = projects[0] // Semantic-Graph Zero-Trust prototype

  return (
    <div className={styles.page}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Hero section">
        <GraphBackground />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            {/* Label */}
            <motion.div custom={0} variants={heroText} initial="hidden" animate="visible">
              <span className="label label-dark">
                <SlashMark width={10} height={24} color="var(--steel-300)" /> Secure · Intelligent · Digital Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className={styles.heroHeadline} custom={1} variants={heroText} initial="hidden" animate="visible">
              We Make Technology Work{' '}
              <span className={styles.accentText}>
                For What&apos;s Next.
                <svg className={styles.brushUnderline} viewBox="0 0 240 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 8C55 3 145 2 238 7C175 4.5 90 5.5 2 8Z" fill="var(--steel-300)" opacity="0.9" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p className={styles.heroSub} custom={2} variants={heroText} initial="hidden" animate="visible">
              From custom software and intelligent solutions to digital experiences that support business growth, we connect ambitious ideas with practical digital outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div className={styles.heroCtas} custom={3} variants={heroText} initial="hidden" animate="visible">
              <Link to="/services" className="btn btn-primary">
                Explore Capabilities <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>
                Discuss Your Requirements
              </Link>
            </motion.div>

            {/* Capability chips */}
            <motion.div className={styles.heroTags} custom={4} variants={heroText} initial="hidden" animate="visible">
              {capabilityLinks.slice(0, 3).map((cap) => (
                <Link key={cap.name} to={cap.href} className={styles.tag}>
                  {cap.name}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Hero visual — Unboxed Layered Vector Composition */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.15 } }}
          >
            <HeroSecureVisual />
          </motion.div>
        </div>

        <SlashDivider variant="dark" />
      </section>

      {/* 2. CAPABILITY STRIP (Interactive) */}
      <section className={styles.capabilityStrip} aria-label="Quick capability navigation">
        <div className="container">
          <div className={styles.stripInner}>
            <span className={styles.stripLabel}>Capability Divisions</span>
            <div className={styles.stripItems}>
              {capabilityLinks.map((cap, i) => (
                <Link key={i} to={cap.href} className={styles.stripItemLink}>
                  <span className={styles.stripDot} />
                  {cap.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT EDITORIAL INTRODUCTION */}
      <section className={`section ${styles.aboutSection}`} aria-label="About INSICLE">
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimatedSection className={styles.aboutLeft}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> ABOUT INSICLE
              </span>
              <h2 className={styles.aboutHeading}>
                We Believe Great Technology Should Move Business Forward.
              </h2>
              <p className={styles.aboutLead}>
                INSICLE is a technology and digital solutions company focused on helping organisations explore practical software, data and digital capabilities. The aim is to connect technology with real business requirements through thoughtful design, engineering and implementation.
              </p>
              <p className={styles.aboutBody}>
                Rather than treating software as an isolated technical layer, we design architectures that respect operational constraints, integrate cleanly with existing infrastructure, and deliver verifiable business utility.
              </p>

              <div className={styles.aboutPrinciplesList}>
                <div className={styles.aboutPrincipleRow}>
                  <div className={styles.principleIcon}>
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className={styles.principleTitle}>Pragmatic Architecture</h4>
                    <p className={styles.principleDesc}>Clean, documented codebases designed for longevity, maintainability, and seamless team adoption.</p>
                  </div>
                </div>

                <div className={styles.aboutPrincipleRow}>
                  <div className={styles.principleIcon}>
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className={styles.principleTitle}>Unified Digital Disciplines</h4>
                    <p className={styles.principleDesc}>Engineering, business intelligence, and enterprise systems operating harmoniously under one roof.</p>
                  </div>
                </div>

                <div className={styles.aboutPrincipleRow}>
                  <div className={styles.principleIcon}>
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className={styles.principleTitle}>Outcome Transparency</h4>
                    <p className={styles.principleDesc}>Direct technical scoping, explicit milestone accountability, and verified business utility.</p>
                  </div>
                </div>
              </div>

              <div className={styles.aboutActions}>
                <Link to="/about" className="btn btn-secondary">
                  Learn More About Our Approach <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.aboutRight} delay={0.15}>
              <AboutVisualCard />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. BALANCED 12-COLUMN CAPABILITIES BENTO */}
      <section className={`section ${styles.servicesSection}`} aria-label="Services">
        <div className="container">
          <AnimatedSection>
            <div className={styles.bentoHeaderRow}>
              <div className={styles.bentoHeaderLeft}>
                <span className="label">
                  <SlashMark width={10} height={24} color="var(--steel-500)" /> Capabilities & Offerings
                </span>
                <h2 className={styles.sectionHeading}>
                  Different Capabilities. One Goal. Your Growth.
                </h2>
              </div>
              <div className={styles.bentoHeaderRight}>
                <p className={styles.sectionSub}>
                  Explore our five core capability divisions. Every engagement is structured around explicit operational requirements, transparent scoping, and modern engineering standards.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Standardized 12-Column Bento Grid */}
          <div className={styles.bentoGrid}>
            {/* Tile 01: Featured (Digital Engineering) — Spans 7 cols, 2 rows */}
            <AnimatedSection className={styles.bentoTileFeatured}>
              <div className={styles.bentoCardTop}>
                <span className={styles.bentoBadgeDark}>{featuredDivision.number} — FEATURED DIVISION</span>
                <div className={styles.bentoIconNavy}>
                  <Code2 size={24} />
                </div>
              </div>

              <h3 className={styles.bentoFeaturedTitle}>{featuredDivision.title}</h3>
              <p className={styles.bentoFeaturedDesc}>{featuredDivision.description}</p>

              <div className={styles.bentoServicesWrapper}>
                <span className={styles.bentoServicesLabel}>Core Capabilities Included:</span>
                <div className={styles.bentoChipsContainer}>
                  {featuredDivision.services.map((svc) => (
                    <Link key={svc.slug} to={`/services/${svc.slug}`} className={styles.bentoChip}>
                      {svc.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.bentoFeaturedFooter}>
                <Link to={`/services#${featuredDivision.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Digital Engineering <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Tile 02: AI & Business Intelligence — Spans 5 cols, Row 1 */}
            <AnimatedSection delay={0.08} className={styles.bentoTileSupporting}>
              <div className={styles.bentoCardTop}>
                <span className={styles.bentoBadgeLight}>{serviceDivisions[1].number}</span>
                <div className={styles.bentoIconSteel}>
                  <Brain size={20} />
                </div>
              </div>

              <h4 className={styles.bentoSupportingTitle}>{serviceDivisions[1].title}</h4>
              <p className={styles.bentoSupportingDesc}>{serviceDivisions[1].description}</p>

              <div className={styles.bentoCardFooter}>
                <Link to={`/services#${serviceDivisions[1].id}`} className={styles.bentoExploreLink}>
                  Explore Division <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Tile 03: Enterprise Solutions — Spans 5 cols, Row 2 */}
            <AnimatedSection delay={0.12} className={styles.bentoTileSupporting}>
              <div className={styles.bentoCardTop}>
                <span className={styles.bentoBadgeLight}>{serviceDivisions[2].number}</span>
                <div className={styles.bentoIconSteel}>
                  <Building2 size={20} />
                </div>
              </div>

              <h4 className={styles.bentoSupportingTitle}>{serviceDivisions[2].title}</h4>
              <p className={styles.bentoSupportingDesc}>{serviceDivisions[2].description}</p>

              <div className={styles.bentoCardFooter}>
                <Link to={`/services#${serviceDivisions[2].id}`} className={styles.bentoExploreLink}>
                  Explore Division <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Tile 04: Digital Growth — Spans 6 cols, Row 3 */}
            <AnimatedSection delay={0.16} className={`${styles.bentoTileSupporting} ${styles.bentoTileHalf}`}>
              <div className={styles.bentoCardTop}>
                <span className={styles.bentoBadgeLight}>{serviceDivisions[3].number}</span>
                <div className={styles.bentoIconSteel}>
                  <TrendingUp size={20} />
                </div>
              </div>

              <h4 className={styles.bentoSupportingTitle}>{serviceDivisions[3].title}</h4>
              <p className={styles.bentoSupportingDesc}>{serviceDivisions[3].description}</p>

              <div className={styles.bentoCardFooter}>
                <Link to={`/services#${serviceDivisions[3].id}`} className={styles.bentoExploreLink}>
                  Explore Division <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Tile 05: Talent Solutions — Spans 6 cols, Row 3 */}
            <AnimatedSection delay={0.2} className={`${styles.bentoTileSupporting} ${styles.bentoTileHalf}`}>
              <div className={styles.bentoCardTop}>
                <span className={styles.bentoBadgeLight}>{serviceDivisions[4].number}</span>
                <div className={styles.bentoIconSteel}>
                  <Users size={20} />
                </div>
              </div>

              <h4 className={styles.bentoSupportingTitle}>{serviceDivisions[4].title}</h4>
              <p className={styles.bentoSupportingDesc}>{serviceDivisions[4].description}</p>

              <div className={styles.bentoCardFooter}>
                <Link to={`/services#${serviceDivisions[4].id}`} className={styles.bentoExploreLink}>
                  Explore Division <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className={styles.servicesActionFooter}>
            <Link to="/services" className="btn btn-secondary">
              View Comprehensive Services Directory <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY INSICLE (Substantial 4-Principle Grid) */}
      <section className={`section ${styles.whySection}`} aria-label="Why INSICLE">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Our Approach
              </span>
              <h2 className={styles.sectionHeading}>
                Built Around Ideas. Driven By Execution.
              </h2>
              <p className={styles.sectionSub}>
                Four operational principles that guide how we evaluate challenges, design architectures, and deliver software.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className={styles.whyGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {whyPrinciples.map((item) => (
              <motion.div key={item.number} variants={staggerItem} className={styles.whyCard}>
                <div className={styles.whyCardHeader}>
                  <span className={styles.whyNum}>{item.number}</span>
                </div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. AI & TECHNOLOGY SHOWCASE (In-depth Narrative) */}
      <section className={`section ${styles.aiSection}`} aria-label="AI and intelligence capabilities">
        <div className="container">
          <div className={styles.aiGrid}>
            <AnimatedSection className={styles.aiContent}>
              <span className="label label-dark">
                <SlashMark width={10} height={24} color="var(--steel-300)" /> Intelligence & Data
              </span>
              <h2 className={styles.aiHeading}>
                Turning Data and Intelligence Into Measurable Action.
              </h2>
              <p className={styles.aiLead}>
                Modern artificial intelligence and business intelligence are most valuable when integrated directly into core workflows. We help organizations transition from isolated models to reliable, automated decision pipelines.
              </p>

              <div className={styles.aiUseCases}>
                <div className={styles.aiUseCaseItem}>
                  <Sparkles size={18} className={styles.aiIconLime} />
                  <div>
                    <h4 className={styles.aiUseCaseTitle}>Automated Document Intelligence</h4>
                    <p className={styles.aiUseCaseDesc}>Semantic extraction pipelines converting unstructured contracts and invoices into structured ledger data.</p>
                  </div>
                </div>

                <div className={styles.aiUseCaseItem}>
                  <Compass size={18} className={styles.aiIconLime} />
                  <div>
                    <h4 className={styles.aiUseCaseTitle}>Operational Analytics & Telemetry</h4>
                    <p className={styles.aiUseCaseDesc}>Unified semantic reporting layers consolidating fragmented ERP, CRM, and financial data streams.</p>
                  </div>
                </div>

                <div className={styles.aiUseCaseItem}>
                  <Zap size={18} className={styles.aiIconLime} />
                  <div>
                    <h4 className={styles.aiUseCaseTitle}>Predictive Decision Workflows</h4>
                    <p className={styles.aiUseCaseDesc}>Machine learning models detecting operational bottlenecks, inventory shifts, and anomalous events.</p>
                  </div>
                </div>
              </div>

              <div className={styles.aiChips}>
                {['Machine Learning', 'Data Analytics', 'Business Intelligence', 'Semantic Reasoning', 'Process Automation'].map((c) => (
                  <span key={c} className={styles.aiChip}>{c}</span>
                ))}
              </div>

              <div className={styles.aiActions}>
                <Link to="/services#ai-business-intelligence" className="btn btn-primary">
                  Explore AI & BI Capabilities <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.aiVisual} delay={0.2}>
              <div className={styles.aiImageWrap}>
                <img
                  src="/images/ai-network.png"
                  alt="Abstract AI network visualization with lime data nodes"
                  className={styles.aiImage}
                  loading="lazy"
                />
                <div className={styles.aiBadge}>
                  <Brain size={16} /> Intelligence & Graph Topology
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE SOLUTIONS PREVIEW */}
      <section className={`section ${styles.enterpriseSection}`} aria-label="Enterprise solutions">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Enterprise Solutions
              </span>
              <h2 className={styles.sectionHeading}>
                Smarter Systems for Everyday Business Operations.
              </h2>
              <p className={styles.sectionSub}>
                Customizable enterprise frameworks engineered to consolidate customer data, HR processes, sales pipelines, and financial reporting.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.enterpriseGrid}>
            <AnimatedSection className={styles.enterpriseVisual} delay={0.1}>
              <div className={styles.enterpriseImgWrap}>
                <img
                  src="/images/enterprise-systems.png"
                  alt="Abstract enterprise systems modular composition"
                  className={styles.enterpriseImage}
                  loading="lazy"
                />
                <div className={styles.enterpriseBadge}>
                  <Building2 size={16} /> Framework Architecture
                </div>
              </div>
            </AnimatedSection>

            <div className={styles.enterpriseCards}>
              {[
                { name: 'Customer Relationship Management (CRM)', slug: 'crm', desc: 'Centralized lead management, contact logs, and pipeline forecasting.' },
                { name: 'Human Resource Management (HRM)', slug: 'hrm', desc: 'Employee records, attendance, leave, and performance review cycles.' },
                { name: 'Customer Service & Help Desk', slug: 'customer-service', desc: 'Multichannel ticket queues, SLA tracking, and resolution workflows.' },
                { name: 'Accounting & Finance Systems', slug: 'accounting-finance', desc: 'Double-entry bookkeeping, invoicing automation, and balance sheet reporting.' },
                { name: 'Sales Force Automation', slug: 'sales-automation', desc: 'Automated lead assignment, follow-up workflows, and quote generation.' },
              ].map((item, i) => (
                <AnimatedSection key={item.slug} delay={i * 0.06}>
                  <Link to={`/solutions/${item.slug}`} className={styles.enterpriseCard}>
                    <div>
                      <h4 className={styles.enterpriseCardTitle}>{item.name}</h4>
                      <p className={styles.enterpriseCardDesc}>{item.desc}</p>
                    </div>
                    <ArrowRight size={16} className={styles.enterpriseArrow} />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES PREVIEW */}
      <section className={`section ${styles.industriesSection}`} aria-label="Industries we serve">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Domain Applications
              </span>
              <h2 className={styles.sectionHeading}>
                Technology Solutions Across Industry Sectors.
              </h2>
              <p className={styles.sectionSub}>
                Addressing the unique compliance, inventory, customer, and administrative requirements of modern industries.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className={styles.industriesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {industries.filter((i) => i.approved).map((ind) => (
              <motion.div key={ind.id} variants={staggerItem} className={styles.industryCard}>
                <h4 className={styles.industryTitle}>{ind.title}</h4>
                <p className={styles.industryDesc}>{ind.description}</p>
                <div className={styles.industryFooter}>
                  <Link to="/industries" className={styles.industryLink}>
                    View Sector Solutions <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link to="/industries" className="btn btn-secondary">
              Explore All Industry Applications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PORTFOLIO TECHNICAL SHOWCASE PREVIEW */}
      <section className={`section ${styles.portfolioSection}`} aria-label="Portfolio and technical showcases">
        <div className="container">
          <div className={styles.portfolioHeader}>
            <AnimatedSection>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Technical Showcases
              </span>
              <h2 className={styles.sectionHeading}>Proof of Capabilities & Case Studies</h2>
              <p className={styles.sectionSub}>
                Architectural prototypes and research implementations demonstrating our engineering standards.
              </p>
            </AnimatedSection>
            <Link to="/portfolio" className="btn btn-ghost">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>

          <AnimatedSection className={styles.showcaseCardWrap}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseMedia}>
                <img
                  src={showcaseProject.image}
                  alt={showcaseProject.title}
                  className={styles.showcaseImg}
                  loading="lazy"
                />
                <span className={styles.showcaseTag}>
                  <Lock size={13} /> Research Prototype
                </span>
              </div>

              <div className={styles.showcaseBody}>
                <span className={styles.showcaseCat}>{showcaseProject.category}</span>
                <h3 className={styles.showcaseTitle}>{showcaseProject.title}</h3>
                <p className={styles.showcaseDesc}>{showcaseProject.description}</p>

                <div className={styles.showcaseProblem}>
                  <strong>Core Challenge:</strong> {showcaseProject.challenge}
                </div>

                <div className={styles.techTagsRow}>
                  {showcaseProject.technologies.map((t) => (
                    <span key={t} className={styles.techTagPill}>{t}</span>
                  ))}
                </div>

                <div className={styles.showcaseActions}>
                  <Link to={`/portfolio/${showcaseProject.slug}`} className="btn btn-primary">
                    Read Case Study Breakdown <ArrowRight size={16} />
                  </Link>
                  <span className={styles.disclaimerNote}>
                    *Conceptual Demonstration — Pending Company Verification
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10. ENRICHED CONTACT CTA (With 3-Step Process) */}
      <ContactCTA />
    </div>
  )
}
