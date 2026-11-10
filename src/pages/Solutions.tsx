import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Users,
  UserCheck,
  HeadphonesIcon,
  BarChart3,
  Zap,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import SlashMark from '@/components/common/SlashMark'
import { solutions } from '@/data/solutions'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './Solutions.module.css'

const iconMap: Record<string, React.ElementType> = {
  Users,
  UserCheck,
  HeadphonesIcon,
  BarChart3,
  Zap,
}

export default function Solutions() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Enterprise Solutions"
        heading="Smarter Systems for Everyday Business Operations."
        subheading="Pre-engineered architecture frameworks and customizable enterprise modules designed to elevate productivity without the lock-in of rigid off-the-shelf software."
        breadcrumb={[{ label: 'Solutions' }]}
      />

      {/* Advisory Banner */}
      <section className={styles.advisorySection}>
        <div className="container">
          <div className={styles.advisoryCard}>
            <ShieldAlert size={22} className={styles.advisoryIcon} />
            <div className={styles.advisoryContent}>
              <h4 className={styles.advisoryTitle}>Architecture & Implementation Frameworks</h4>
              <p className={styles.advisoryText}>
                The solutions below represent INSICLE&apos;s enterprise solution capabilities and implementation frameworks. They are custom configured and integrated into your organization&apos;s cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase / Mockup Strip */}
      <section className={`section ${styles.showcaseSection}`}>
        <div className="container">
          <div className={styles.showcaseGrid}>
            <AnimatedSection className={styles.showcaseText}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Modern Interface
              </span>
              <h2 className={styles.sectionHeading}>
                Designed for Clarity, Built for Scale.
              </h2>
              <p>
                Every enterprise capability we deploy is paired with a clean, responsive interface designed to reduce cognitive load and simplify complex workflows.
              </p>
              <div className={styles.mockupPills}>
                <span className={styles.mockupPill}><CheckCircle size={14} /> Role-Based Access</span>
                <span className={styles.mockupPill}><CheckCircle size={14} /> Audit Logging</span>
                <span className={styles.mockupPill}><CheckCircle size={14} /> Real-time Telemetry</span>
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.showcaseMedia} delay={0.15}>
              <div className={styles.mockupContainer}>
                <img
                  src="/images/enterprise-systems.png"
                  alt="Illustrative enterprise system dashboard visual"
                  className={styles.mockupImg}
                  loading="lazy"
                />
                <div className={styles.mockupOverlay}>
                  <Sparkles size={16} /> Illustrative Architecture Preview
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={`section ${styles.solutionsGridSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Available Frameworks
              </span>
              <h2 className={styles.sectionHeading}>Core Solution Capabilities</h2>
            </div>
          </AnimatedSection>

          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {solutions.filter((s) => s.approved).map((sol) => {
              const Icon = iconMap[sol.icon] || Zap
              return (
                <motion.div
                  key={sol.id}
                  variants={staggerItem}
                  className={styles.card}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <Icon size={24} />
                    </div>
                    <span className={styles.subBadge}>{sol.subtitle}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{sol.title}</h3>
                  <p className={styles.cardDesc}>{sol.description}</p>

                  <div className={styles.featureList}>
                    <h5 className={styles.featuresHeading}>Core Modules:</h5>
                    <ul>
                      {sol.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureDot} />
                          <strong>{feat.title}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link to={`/solutions/${sol.slug}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                      View Solution Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        heading="Need a Tailored Enterprise Platform?"
        subtext="Discuss your organizational workflows with our architects to design a bespoke deployment."
        cta="Inquire About Solutions"
      />
    </div>
  )
}
