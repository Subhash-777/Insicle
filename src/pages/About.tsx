import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Users } from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import PageHero from '@/components/common/PageHero'
import ContactCTA from '@/components/common/ContactCTA'
import SlashMark from '@/components/common/SlashMark'
import styles from './About.module.css'

const values = [
  { icon: Lightbulb, title: 'Innovation-Led', description: 'We pursue new approaches and apply current thinking in software, AI and digital strategy.' },
  { icon: Target, title: 'Outcome-Focused', description: 'Our work is measured by the business results it enables, not just technical delivery.' },
  { icon: Users, title: 'People-Centred', description: 'We design for the people who use our solutions — clear, accessible and practical.' },
  { icon: Shield, title: 'Reliable Delivery', description: 'We are honest about what is possible and consistent in how we deliver.' },
]

const capabilities = [
  { number: '01', title: 'Digital Engineering', desc: 'Custom software, web and mobile applications.' },
  { number: '02', title: 'AI & Business Intelligence', desc: 'Data analytics, machine learning and automation.' },
  { number: '03', title: 'Enterprise Solutions', desc: 'CRM, HRM, finance and operational systems.' },
  { number: '04', title: 'Digital Growth', desc: 'Marketing, SEO and performance campaigns.' },
  { number: '05', title: 'Talent Solutions', desc: 'Recruitment outsourcing and HR coordination.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        label="About INSICLE"
        heading="Ideas, Technology, Real Impact."
        subheading="A technology and digital solutions company working to turn ambitious ideas into practical digital outcomes."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* Company overview */}
      <section className={`section ${styles.overviewSection}`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection className={styles.overviewImage}>
              <img
                src="/images/about-visual.png"
                alt="Abstract editorial brand composition for INSICLE"
                className={styles.img}
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection className={styles.overviewContent} delay={0.15}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Our Story
              </span>
              <h2 className={styles.heading}>
                Building Technology That Works For Business.
              </h2>
              <p>
                INSICLE is a technology company focused on helping organisations build better
                software, make better use of their data, and operate more effectively in a
                digital world.
              </p>
              <p>
                We work across the full technology stack — from custom application development
                and enterprise systems to AI, business intelligence and digital marketing.
                Our goal is always the same: practical solutions that create real value.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--ink-800)', fontWeight: 500 }}>
                — <strong>Dr. S. Selvi</strong>, Proprietor, INSICLE
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <AnimatedSection className={styles.mvCard}>
              <Target size={28} className={styles.mvIcon} />
              <h3 className={styles.mvTitle}>Mission</h3>
              <p className={styles.mvText}>
                To deliver purposeful technology solutions that help businesses grow,
                operate efficiently and adapt to change — with clarity, honesty and care.
              </p>
              <p className={styles.mvNote}><em>Proposed copy — pending company approval</em></p>
            </AnimatedSection>
            <AnimatedSection className={`${styles.mvCard} ${styles.mvCardDark}`} delay={0.1}>
              <Eye size={28} className={styles.mvIconLime} />
              <h3 className={styles.mvTitleLight}>Vision</h3>
              <p className={styles.mvTextLight}>
                To become a trusted digital partner for businesses that want to turn
                ambitious ideas into practical, lasting outcomes using technology.
              </p>
              <p className={styles.mvNoteDark}><em>Proposed copy — pending company approval</em></p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <AnimatedSection>
            <span className="label">
              <SlashMark width={10} height={24} color="var(--steel-500)" /> Our Values
            </span>
            <h2 className={styles.sectionHeading}>What Guides Our Work.</h2>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <AnimatedSection key={val.title} delay={i * 0.08} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Icon size={20} />
                  </div>
                  <h4 className={styles.valueTitle}>{val.title}</h4>
                  <p className={styles.valueDesc}>{val.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={`section ${styles.capabilitiesSection}`}>
        <div className="container">
          <div className={styles.capGrid}>
            <AnimatedSection>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Capabilities
              </span>
              <h2 className={styles.sectionHeading}>What We Bring to the Table.</h2>
              <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.7, color: 'var(--color-slate)', maxWidth: 400 }}>
                Our capabilities span five areas, each focused on a different dimension of how technology can support your business.
              </p>
              <Link to="/services" className="btn btn-primary" style={{ marginTop: 24, alignSelf: 'flex-start' }}>
                Explore Services <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <div className={styles.capList}>
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.number} delay={i * 0.07} className={styles.capItem}>
                  <span className={styles.capNum}>{cap.number}</span>
                  <div>
                    <strong className={styles.capTitle}>{cap.title}</strong>
                    <p className={styles.capDesc}>{cap.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
