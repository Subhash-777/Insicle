import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Users,
  UserCheck,
  HeadphonesIcon,
  BarChart3,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import SlashMark from '@/components/common/SlashMark'
import { getSolutionBySlug, solutions } from '@/data/solutions'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './SolutionDetail.module.css'

const iconMap: Record<string, React.ElementType> = {
  Users,
  UserCheck,
  HeadphonesIcon,
  BarChart3,
  Zap,
}

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const solution = slug ? getSolutionBySlug(slug) : null

  if (!solution || !solution.approved) {
    return <Navigate to="/solutions" replace />
  }

  const Icon = iconMap[solution.icon] || Zap
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug && s.approved).slice(0, 3)

  return (
    <div className={styles.page}>
      <PageHero
        label={`Enterprise Framework — ${solution.subtitle}`}
        heading={solution.title}
        subheading={solution.description}
        breadcrumb={[
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title },
        ]}
      />

      {/* Main Solution Overview */}
      <section className={`section ${styles.overviewSection}`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection className={styles.overviewText}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Framework Overview
              </span>
              <h2 className={styles.sectionHeading}>
                Purpose-Built Enterprise Architecture
              </h2>
              <p className={styles.leadText}>
                {solution.longDescription}
              </p>
              <p>
                Unlike monolithic SaaS tools that force your business into predetermined constraints, INSICLE integrates this framework directly around your existing databases, identity providers, and compliance standards.
              </p>
              <div className={styles.badgeRow}>
                <span className={styles.specBadge}><Shield size={14} /> SOC2 / GDPR Ready</span>
                <span className={styles.specBadge}><Layers size={14} /> Modular Microservices</span>
                <span className={styles.specBadge}><Sparkles size={14} /> Full Source Ownership</span>
              </div>
              <div className={styles.actionRow}>
                <Link to="/contact" className="btn btn-primary">
                  Inquire About This Framework <ArrowRight size={16} />
                </Link>
                <Link to="/solutions" className="btn btn-ghost">
                  <ArrowLeft size={16} /> All Solutions
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.overviewMedia} delay={0.15}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaIconBanner}>
                  <div className={styles.iconCircle}>
                    <Icon size={36} />
                  </div>
                  <span className={styles.mediaTag}>{solution.subtitle}</span>
                </div>
                <div className={styles.mediaBody}>
                  <h4 className={styles.mediaHeading}>Deployment Highlights</h4>
                  <ul className={styles.mediaList}>
                    <li>Role-Based Access Control (RBAC)</li>
                    <li>RESTful & GraphQL Event-Driven APIs</li>
                    <li>Automated Database Migrations</li>
                    <li>High-Availability Cloud Hosting (GCP/AWS)</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <AnimatedSection>
            <span className="label label-lime">Architectural Modules</span>
            <h2 className={styles.sectionHeadingLight}>Core Framework Features</h2>
          </AnimatedSection>

          <motion.div
            className={styles.featuresGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {solution.features.map((feat, idx) => (
              <motion.div key={idx} variants={staggerItem} className={styles.featureCard}>
                <div className={styles.featIndex}>0{idx + 1}</div>
                <h3 className={styles.featTitle}>{feat.title}</h3>
                <p className={styles.featDesc}>{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      {solution.useCases.length > 0 && (
        <section className={`section ${styles.useCasesSection}`}>
          <div className="container">
            <AnimatedSection>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Applicability
              </span>
              <h2 className={styles.sectionHeading}>Target Use Cases</h2>
            </AnimatedSection>

            <div className={styles.useCasesGrid}>
              {solution.useCases.map((uc, i) => (
                <AnimatedSection key={i} delay={i * 0.08} className={styles.useCaseCard}>
                  <CheckCircle size={20} className={styles.useCaseCheck} />
                  <span className={styles.useCaseText}>{uc}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Solutions */}
      {otherSolutions.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.relatedHeader}>
                <div>
                  <span className="label">
                    <SlashMark width={10} height={24} color="var(--steel-500)" /> Explore More
                  </span>
                  <h2 className={styles.sectionHeading}>Complementary Solutions</h2>
                </div>
                <Link to="/solutions" className="btn btn-secondary">
                  View All Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <div className={styles.relatedGrid}>
              {otherSolutions.map((other) => (
                <Link key={other.slug} to={`/solutions/${other.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedMeta}>
                    <span className={styles.relatedSub}>{other.subtitle}</span>
                  </div>
                  <h4 className={styles.relatedTitle}>{other.title}</h4>
                  <p className={styles.relatedDesc}>{other.description}</p>
                  <span className={styles.relatedLink}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry CTA */}
      <ContactCTA
        heading={`Ready to deploy ${solution.title}?`}
        subtext="Schedule an architecture review with our solution engineering team."
        cta="Request Solution Demo"
      />
    </div>
  )
}
