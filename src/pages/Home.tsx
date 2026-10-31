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
} from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { serviceDivisions } from '@/data/services'
import { industries } from '@/data/industries'
import { staggerContainer, staggerItem, heroText, floatingAnimation } from '@/animations/variants'
import styles from './Home.module.css'

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, Building2, TrendingUp, Users,
}

const capabilities = [
  'Digital Engineering',
  'AI & Business Intelligence',
  'Enterprise Solutions',
  'Digital Growth',
  'Talent Solutions',
]

const whyInsicle = [
  {
    number: '01',
    title: 'Tailored Technology',
    description:
      'Every solution is built around the specific challenges and goals of your business — not a one-size-fits-all template.',
  },
  {
    number: '02',
    title: 'Innovation-Led Thinking',
    description:
      'We bring current thinking in software, AI and digital strategy to help future-proof your operations.',
  },
  {
    number: '03',
    title: 'Integrated Digital Capabilities',
    description:
      'From engineering to marketing to enterprise systems — all capabilities work together under one team.',
  },
  {
    number: '04',
    title: 'Business-Focused Solutions',
    description:
      'We start with your business outcomes, then design the technology to support them — not the other way around.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero} aria-label="Hero section">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            {/* Label */}
            <motion.div
              custom={0}
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              <span className="label label-lime">Creative + Enterprise Hybrid</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className={styles.heroHeadline}
              custom={1}
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              We Make Technology{' '}
              <span className={styles.limeText}>Work For</span>{' '}
              What's Next.
            </motion.h1>

            {/* Sub */}
            <motion.p
              className={styles.heroSub}
              custom={2}
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              From custom software and intelligent solutions to digital experiences
              that support business growth, we turn ambitious ideas into practical
              digital outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className={styles.heroCtas}
              custom={3}
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              <Link to="/services" className="btn btn-primary">
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Discuss Your Project
              </Link>
            </motion.div>

            {/* Floating tags */}
            <motion.div
              className={styles.heroTags}
              custom={4}
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              {capabilities.slice(0, 3).map((cap) => (
                <span key={cap} className={styles.tag}>{cap}</span>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.3 } }}
          >
            <motion.div
              animate={floatingAnimation.animate}
              className={styles.heroImageWrap}
            >
              <img
                src="/images/hero-abstract.png"
                alt="Abstract lime geometric technology composition"
                className={styles.heroImage}
                loading="eager"
              />
            </motion.div>
            {/* Floating capability labels */}
            <motion.div
              className={`${styles.floatLabel} ${styles.floatLabel1}`}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <Brain size={14} /> AI & BI
            </motion.div>
            <motion.div
              className={`${styles.floatLabel} ${styles.floatLabel2}`}
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <Code2 size={14} /> Engineering
            </motion.div>
            <motion.div
              className={`${styles.floatLabel} ${styles.floatLabel3}`}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <Zap size={14} /> Digital Growth
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* CAPABILITY STRIP */}
      <section className={styles.capabilityStrip} aria-label="Capability areas">
        <div className="container">
          <div className={styles.stripInner}>
            <span className={styles.stripLabel}>Capabilities</span>
            <div className={styles.stripItems}>
              {capabilities.map((cap, i) => (
                <span key={i} className={styles.stripItem}>
                  <span className={styles.stripDot}></span>
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className={`section ${styles.aboutSection}`} aria-label="About INSICLE">
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimatedSection className={styles.aboutLeft}>
              <span className="label">About INSICLE</span>
              <h2 className={styles.aboutHeading}>
                We Believe Great Technology Should Move Business Forward.
              </h2>
            </AnimatedSection>
            <AnimatedSection className={styles.aboutRight} delay={0.15}>
              <p className={styles.aboutText}>
                INSICLE is a technology and digital solutions company focused on helping
                businesses harness the potential of software, data and digital strategy.
                We work with organisations that want to build better systems, reach more
                customers and operate more efficiently.
              </p>
              <p className={styles.aboutText}>
                Our team brings together engineering capability, business intelligence
                and creative thinking to deliver solutions that are practical, purposeful
                and built to last.
              </p>
              <div className={styles.aboutValues}>
                {['Purpose-built solutions', 'Clear communication', 'Measured outcomes'].map((val) => (
                  <div key={val} className={styles.aboutValue}>
                    <CheckCircle size={16} className={styles.checkIcon} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className={`btn btn-secondary ${styles.aboutLink}`}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`section ${styles.servicesSection}`} aria-label="Services">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">What We Do</span>
              <h2 className={styles.sectionHeading}>
                Different Capabilities. One Goal. Your Growth.
              </h2>
            </div>
          </AnimatedSection>

          <motion.div
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {serviceDivisions.filter(d => d.approved).map((division, idx) => {
              const Icon = iconMap[division.icon] || Code2
              const isFeature = idx === 0 || idx === 2
              return (
                <motion.div
                  key={division.id}
                  variants={staggerItem}
                  className={`${styles.serviceCard} ${
                    division.color === 'charcoal' ? styles.cardCharcoal :
                    division.color === 'lime-tint' ? styles.cardLimeTint :
                    styles.cardWhite
                  } ${isFeature ? styles.cardFeature : ''}`}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.divNumber}>{division.number}</span>
                    <div className={`${styles.iconWrap} ${division.color === 'charcoal' ? styles.iconLime : styles.iconCharcoal}`}>
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{division.title}</h3>
                  <p className={styles.cardDesc}>{division.description}</p>
                  <Link
                    to={`/services#${division.id}`}
                    className={`${styles.cardLink} ${division.color === 'charcoal' ? styles.cardLinkLight : ''}`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <div className={styles.servicesFooter}>
            <Link to="/services" className="btn btn-secondary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY INSICLE */}
      <section className={`section ${styles.whySection}`} aria-label="Why INSICLE">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">Why Choose Us</span>
              <h2 className={styles.sectionHeading}>
                Built Around Ideas. Driven By Execution.
              </h2>
            </div>
          </AnimatedSection>

          <motion.div
            className={styles.whyGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {whyInsicle.map((item) => (
              <motion.div key={item.number} variants={staggerItem} className={styles.whyItem}>
                <span className={styles.whyNumber}>{item.number}</span>
                <h4 className={styles.whyTitle}>{item.title}</h4>
                <p className={styles.whyDesc}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI SHOWCASE */}
      <section className={`section ${styles.aiSection}`} aria-label="AI and technology">
        <div className="container">
          <div className={styles.aiGrid}>
            <AnimatedSection className={styles.aiContent}>
              <span className="label">Intelligence & Data</span>
              <h2 className={styles.aiHeading}>
                Turning Data and Intelligence Into Action.
              </h2>
              <p className={styles.aiText}>
                Artificial intelligence, machine learning and business intelligence
                tools are becoming essential for competitive businesses. INSICLE
                helps organisations implement these capabilities in practical,
                measurable ways.
              </p>
              <div className={styles.aiCapabilities}>
                {['AI', 'Machine Learning', 'Business Intelligence', 'Analytics', 'Automation'].map((cap) => (
                  <span key={cap} className={styles.aiChip}>{cap}</span>
                ))}
              </div>
              <Link to="/services#ai-business-intelligence" className="btn btn-primary">
                Explore AI & BI <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection className={styles.aiVisual} delay={0.2}>
              <img
                src="/images/ai-network.png"
                alt="Abstract AI network visualization with lime green data nodes"
                className={styles.aiImage}
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SOLUTIONS */}
      <section className={`section ${styles.enterpriseSection}`} aria-label="Enterprise solutions">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">Enterprise Solutions</span>
              <h2 className={styles.sectionHeading}>
                Smarter Systems for Everyday Business.
              </h2>
            </div>
          </AnimatedSection>

          <div className={styles.enterpriseGrid}>
            <AnimatedSection className={styles.enterpriseVisual} delay={0.1}>
              <img
                src="/images/enterprise-systems.png"
                alt="Abstract enterprise systems visualization"
                className={styles.enterpriseImage}
                loading="lazy"
              />
            </AnimatedSection>
            <div className={styles.enterpriseCards}>
              {['CRM', 'HRM', 'Customer Service', 'Accounting & Finance', 'Sales Automation'].map((item, i) => (
                <AnimatedSection key={item} delay={i * 0.07}>
                  <Link to="/solutions" className={styles.enterpriseCard}>
                    <Building2 size={16} />
                    <span>{item}</span>
                    <ArrowRight size={14} className={styles.enterpriseArrow} />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={`section ${styles.industriesSection}`} aria-label="Industries we serve">
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">Potential Application Areas</span>
              <h2 className={styles.sectionHeading}>
                Technology Solutions Across Industries.
              </h2>
            </div>
          </AnimatedSection>
          <motion.div
            className={styles.industriesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {industries.filter(i => i.approved).map((ind) => (
              <motion.div key={ind.id} variants={staggerItem} className={styles.industryCard}>
                <span className={styles.industryTitle}>{ind.title}</span>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link to="/industries" className="btn btn-secondary">
              Explore Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className={`section ${styles.portfolioSection}`} aria-label="Portfolio">
        <div className="container">
          <div className={styles.portfolioHeader}>
            <AnimatedSection>
              <span className="label">Portfolio</span>
              <h2 className={styles.sectionHeading}>Our Work.</h2>
            </AnimatedSection>
            <Link to="/portfolio" className="btn btn-ghost">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>
          <AnimatedSection className={styles.portfolioEmpty}>
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <Zap size={32} />
              </div>
              <h3 className={styles.emptyTitle}>Approved case studies coming soon.</h3>
              <p className={styles.emptyText}>
                We're preparing project showcases for publication. Visit this section again soon.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactCTA />
    </div>
  )
}
