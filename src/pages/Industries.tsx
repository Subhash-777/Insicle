import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Heart,
  GraduationCap,
  ShoppingCart,
  Factory,
  Landmark,
  Truck,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { industries } from '@/data/industries'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './Industries.module.css'

const iconMap: Record<string, React.ElementType> = {
  Heart,
  GraduationCap,
  ShoppingCart,
  Factory,
  Landmark,
  Truck,
  Briefcase,
}

export default function Industries() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Sector Applications"
        heading="Digital Solutions Across Industry Landscapes."
        subheading="How our cross-disciplinary engineering and intelligence capabilities address the distinct operational requirements of key industries."
        breadcrumb={[{ label: 'Industries' }]}
      />

      {/* Advisory Banner */}
      <section className={styles.advisorySection}>
        <div className="container">
          <div className={styles.advisoryCard}>
            <HelpCircle size={22} className={styles.advisoryIcon} />
            <div className={styles.advisoryContent}>
              <h4 className={styles.advisoryTitle}>Application Domains</h4>
              <p className={styles.advisoryText}>
                The sectors outlined below reflect domains where INSICLE&apos;s digital engineering, AI, and enterprise capabilities provide structured value. We do not claim exclusive domain specialization without specific engagement confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <motion.div
            className={styles.industryList}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {industries.filter((ind) => ind.approved).map((ind, idx) => {
              const Icon = iconMap[ind.icon] || Briefcase
              return (
                <motion.div
                  key={ind.id}
                  variants={staggerItem}
                  className={`${styles.industryCard} ${idx % 2 === 1 ? styles.industryCardAlt : ''}`}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className={styles.cardNum}>0{idx + 1}</span>
                      <h3 className={styles.cardTitle}>{ind.title}</h3>
                    </div>
                  </div>

                  <p className={styles.cardDesc}>{ind.description}</p>

                  <div className={styles.challengesSolutionsGrid}>
                    <div className={styles.subCol}>
                      <h5 className={styles.subColHeading}>
                        <AlertCircle size={14} className={styles.alertIcon} /> Key Industry Challenges
                      </h5>
                      <ul className={styles.challengeList}>
                        {ind.challenges.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.subCol}>
                      <h5 className={styles.subColHeading}>
                        <CheckCircle2 size={14} className={styles.checkIcon} /> INSICLE Digital Solutions
                      </h5>
                      <ul className={styles.solutionList}>
                        {ind.solutions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.cardAction}>
                    <Link to="/contact" className="btn btn-ghost">
                      Discuss {ind.title} Solutions <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        heading="Have an Industry-Specific Requirement?"
        subtext="Let our architects evaluate your domain workflow and suggest an optimal technology roadmap."
        cta="Consult Our Team"
      />
    </div>
  )
}
