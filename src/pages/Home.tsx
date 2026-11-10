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
                <SlashMark width={7} height={18} color="var(--steel-300)" /> Secure · Intelligent · Digital Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className={styles.heroHeadline} custom={1} variants={heroText} initial="hidden" animate="visible">
              We Make Technology{' '}
              <span className={styles.accentText}>Work For</span>{' '}
              What&apos;s Next.
            </motion.h1>

            {/* Subtext */}
            <motion.p className={styles.heroSub} custom={2} variants={heroText} initial="hidden" animate="visible">
              From custom software and intelligent solutions to digital experiences that support business growth, we connect ambitious ideas with practical digital outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div className={styles.heroCtas} custom={3} variants={heroText} initial="hidden" animate="visible">
              <Link to="/services" className="btn btn-white">
                Explore Capabilities <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-dark">
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

          {/* Hero visual */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }}
          >
            <div className={styles.heroImageWrap}>
              <img
                src="/images/hero-abstract.png"
                alt="Steel-blue network graph illustration representing secure digital infrastructure"
                className={styles.heroImage}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
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
              <span className="label"><SlashMark width={7} height={18} /> ABOUT INSICLE</span>
              <h2 className={styles.aboutHeading}>
                We Believe Great Technology Should Move Business Forward.
              </h2>
              <p className={styles.aboutLead}>
                INSICLE is a technology and digital solutions company focused on helping organisations explore practical software, data and digital capabilities. The aim is to connect technology with real business requirements through thoughtful design, engineering and implementation.
              </p>
              <p className={styles.aboutBody}>
                Rather than treating software as an isolated technical layer, we design architectures that respect operational constraints, integrate cleanly with existing infrastructure, and deliver verifiable business utility.
              </p>

              <div className={styles.aboutPillars}>
                <div className={styles.aboutPillar}>
                  <CheckCircle size={18} className={styles.pillarCheck} />
                  <div>
                    <h4 className={styles.pillarTitle}>Pragmatic Architecture</h4>
                    <p className={styles.pillarDesc}>Clean, documented codebases designed for longevity and adoption.</p>
                  </div>
                </div>
                <div className={styles.aboutPillar}>
                  <CheckCircle size={18} className={styles.pillarCheck} />
                  <div>
                    <h4 className={styles.pillarTitle}>Unified Digital Disciplines</h4>
                    <p className={styles.pillarDesc}>Engineering, business intelligence, and enterprise systems under one roof.</p>
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
              <div className={styles.aboutVisualCard}>
                <img
                  src="/images/about-visual.png"
                  alt="INSICLE editorial technology composition"
                  className={styles.aboutImg}
                  loading="lazy"
                />
                <div className={styles.aboutQuoteBox}>
                  <p className={styles.aboutQuoteText}>
                    &ldquo;Connecting technology with real business requirements through thoughtful engineering.&rdquo;
                  </p>
                  <span className={styles.aboutQuoteAuthor}>— Dr. S. Selvi, Proprietor, INSICLE</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. BALANCED ASYMMETRIC SERVICES SECTION */}
      <section className={`section ${styles.servicesSection}`} aria-label="Services">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label"><SlashMark width={7} height={18} /> Capabilities & Offerings</span>
              <h2 className={styles.sectionHeading}>
                Different Capabilities. One Goal. Your Growth.
              </h2>
              <p className={styles.sectionSub}>
                Explore our five core capability divisions. Every engagement is structured around explicit operational requirements, transparent scoping, and modern engineering standards.
              </p>
            </div>
          </AnimatedSection>

          {/* Asymmetric 1 + 4 Editorial Layout */}
          <div className={styles.servicesAsymmetricGrid}>
            {/* Featured Card (Digital Engineering) */}
            <AnimatedSection className={styles.featuredServiceCard}>
              <div className={styles.featuredTop}>
                <span className={styles.featuredBadge}>{featuredDivision.number} — Featured Division</span>
                <div className={styles.featuredIconBox}>
                  <Code2 size={28} />
                </div>
              </div>

              <h3 className={styles.featuredTitle}>{featuredDivision.title}</h3>
              <p className={styles.featuredDesc}>{featuredDivision.description}</p>

              <div className={styles.featuredProblemBox}>
                <h5 className={styles.featuredProblemHeading}>The Business Challenge Addressed:</h5>
                <p className={styles.featuredProblemText}>{featuredDivision.businessProblem}</p>
              </div>

              <div className={styles.featuredUseBox}>
                <h5 className={styles.featuredProblemHeading}>Example Use Case:</h5>
                <p className={styles.featuredProblemText}>{featuredDivision.useCaseExample}</p>
              </div>

              <div className={styles.featuredServicesList}>
                <h5 className={styles.featuredServicesHeading}>Included Capabilities:</h5>
                <ul>
                  {featuredDivision.services.slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className={styles.featuredServiceLink}>
                        <span>{s.title}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.featuredFooter}>
                <Link to={`/services#${featuredDivision.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Digital Engineering <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            {/* 4 Supporting Divisions (2x2 Grid) */}
            <div className={styles.supportingGrid}>
              {supportingDivisions.map((division, idx) => {
                const Icon = iconMap[division.icon] || Zap
                return (
                  <AnimatedSection key={division.id} delay={idx * 0.08} className={styles.supportingCardWrap}>
                    <div
                      className={`${styles.supportingCard} ${
                        division.color === 'lime-tint' ? styles.cardLimeTint : styles.cardWhite
                      }`}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.cardMeta}>
                          <span className={styles.cardNum}>{division.number}</span>
                          <span className={styles.cardShortTitle}>{division.shortTitle}</span>
                        </div>
                        <div className={styles.cardIconBox}>
                          <Icon size={20} />
                        </div>
                      </div>

                      <h4 className={styles.supportingTitle}>{division.title}</h4>
                      <p className={styles.supportingDesc}>{division.description}</p>

                      <div className={styles.supportingProblem}>
                        <span className={styles.supportingProblemLabel}>Addresses:</span>
                        <p>{division.businessProblem}</p>
                      </div>

                      <div className={styles.supportingFooter}>
                        <Link to={`/services#${division.id}`} className={styles.supportingLink}>
                          <span>Explore Division</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
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
              <span className="label"><SlashMark width={7} height={18} /> Our Approach</span>
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
              <span className="label" style={{ color: 'var(--steel-300)' }}><SlashMark width={7} height={18} color="var(--steel-300)" /> Intelligence & Data</span>
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
              <span className="label"><SlashMark width={7} height={18} /> Enterprise Solutions</span>
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
              <span className="label"><SlashMark width={7} height={18} /> Domain Applications</span>
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
              <span className="label"><SlashMark width={7} height={18} /> Technical Showcases</span>
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
