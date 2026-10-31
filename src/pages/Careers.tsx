import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Briefcase,
  Mail,
  ArrowRight,
  Code2,
  Users2,
  Lightbulb,
  CheckCircle,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { company } from '@/data/company'
import { getApprovedJobs } from '@/data/careers'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './Careers.module.css'

const culturePillars = [
  {
    icon: Code2,
    title: 'Engineering Rigor',
    desc: 'We care deeply about clean architectures, maintainable codebases, and reliable testing standards.',
  },
  {
    icon: Lightbulb,
    title: 'Autonomous Problem Solving',
    desc: 'We value initiative, curiosity, and engineers who enjoy taking ideas from ambiguity to clear execution.',
  },
  {
    icon: Users2,
    title: 'Collaborative Environment',
    desc: 'A supportive, respectful team culture that emphasizes shared knowledge and continuous professional growth.',
  },
]

export default function Careers() {
  const approvedJobs = getApprovedJobs()

  return (
    <div className={styles.page}>
      <PageHero
        label="Join INSICLE"
        heading="Build What's Next in Technology & Digital Solutions."
        subheading="Join a dedicated team focused on solving complex challenges through disciplined software engineering and modern intelligence systems."
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Engineering Culture Pillars */}
      <section className={`section ${styles.cultureSection}`}>
        <div className="container">
          <AnimatedSection>
            <span className="label">Life at INSICLE</span>
            <h2 className={styles.sectionHeading}>Principles of Our Practice</h2>
          </AnimatedSection>

          <motion.div
            className={styles.cultureGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {culturePillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div key={i} variants={staggerItem} className={styles.pillarCard}>
                  <div className={styles.iconCircle}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions or Transparent Empty State */}
      <section className={`section ${styles.positionsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className="label">Open Opportunities</span>
              <h2 className={styles.sectionHeading}>Current Vacancies</h2>
            </div>
          </AnimatedSection>

          {approvedJobs.length > 0 ? (
            <div className={styles.jobList}>
              {approvedJobs.map((job) => (
                <div key={job.id} className={styles.jobCard}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className={styles.jobType}>{job.type}</span>
                    </div>
                    <p className={styles.jobDesc}>{job.description}</p>
                  </div>
                  <a
                    href={`mailto:${company.contact.email}?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="btn btn-primary"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <AnimatedSection className={styles.emptyWrap}>
              <div className={styles.emptyCard}>
                <div className={styles.emptyIcon}>
                  <Briefcase size={36} />
                </div>
                <h3 className={styles.emptyTitle}>No Active Vacancies at This Moment</h3>
                <p className={styles.emptyDesc}>
                  We are not actively advertising open requisitions right now. However, we are always eager to connect with talented developers, architects, and researchers.
                </p>
                <div className={styles.speculativeContact}>
                  <p className={styles.speculativeText}>
                    Send your portfolio, GitHub, or CV directly to our engineering leadership:
                  </p>
                  <a
                    href={`mailto:${company.contact.email}?subject=Speculative Application — INSICLE`}
                    className={`btn btn-primary ${styles.emailBtn}`}
                  >
                    <Mail size={16} /> {company.contact.email}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        heading="Have Questions About Opportunities?"
        subtext="Reach out directly to learn more about our upcoming initiatives and technical projects."
        cta="Get In Touch"
      />
    </div>
  )
}
