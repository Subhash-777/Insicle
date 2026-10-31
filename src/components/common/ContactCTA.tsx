import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import styles from './ContactCTA.module.css'

interface ContactCTAProps {
  heading?: string
  subtext?: string
  cta?: string
}

export default function ContactCTA({
  heading = "Got Something Ambitious in Mind?",
  subtext = "Let's turn your next idea into something meaningful.",
  cta = "Start a Conversation",
}: ContactCTAProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.sub}>{subtext}</p>
          <Link to="/contact" className={`btn btn-dark ${styles.btn}`}>
            {cta} <ArrowRight size={18} />
          </Link>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.limeBlock}></div>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
        </div>
      </div>
    </section>
  )
}
