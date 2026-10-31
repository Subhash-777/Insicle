import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Compass, FileCheck2 } from 'lucide-react'
import styles from './ContactCTA.module.css'

interface ContactCTAProps {
  heading?: string
  subtext?: string
  cta?: string
  showSteps?: boolean
}

const steps = [
  { num: '01', icon: MessageSquare, title: 'Initial Briefing', desc: 'Share your requirements and operational context.' },
  { num: '02', icon: Compass, title: 'Technical Scoping', desc: 'We evaluate system architecture, constraints and feasibility.' },
  { num: '03', icon: FileCheck2, title: 'Actionable Proposal', desc: 'Receive a clear delivery roadmap with phased milestones.' },
]

export default function ContactCTA({
  heading = 'Have a Challenge Worth Solving?',
  subtext = "Tell us what you're trying to build, improve or simplify. Let's explore the right digital approach.",
  cta = 'Start a Conversation',
  showSteps = true,
}: ContactCTAProps) {
  return (
    <section className={styles.section} aria-label="Start a project consultation">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Next Steps</span>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.sub}>{subtext}</p>
          </div>
          <div className={styles.actionWrap}>
            <Link to="/contact" className={`btn btn-dark ${styles.btn}`}>
              {cta} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {showSteps && (
          <div className={styles.stepsGrid}>
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.num} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>{s.num}</span>
                    <Icon size={18} className={styles.stepIcon} />
                  </div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
