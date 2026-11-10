import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Code2, Brain, Building2, TrendingUp, Users, ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import PageHero from '@/components/common/PageHero'
import ContactCTA from '@/components/common/ContactCTA'
import { serviceDivisions } from '@/data/services'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './Services.module.css'

const iconMap: Record<string, React.ElementType> = { Code2, Brain, Building2, TrendingUp, Users }

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business context, goals and constraints.' },
  { step: '02', title: 'Planning', desc: 'Defining scope, approach and a realistic delivery plan.' },
  { step: '03', title: 'Delivery', desc: 'Building, testing and iterating with regular communication.' },
  { step: '04', title: 'Handover', desc: 'Documentation, training and ongoing support as needed.' },
]

const faqs = [
  { q: 'Do you work with early-stage as well as established organizations?', a: 'Yes. Our architectures and engagement models are designed to scale — from targeted prototypes for emerging teams to mission-critical operational systems for established companies.' },
  { q: 'Can INSICLE handle complete end-to-end technical lifecycles?', a: 'We can support the entire lifecycle — from initial problem framing, scoping, and systems architecture through to full-stack implementation, quality assurance, deployment, and handover.' },
  { q: 'Do you offer ongoing architecture advisory and maintenance support?', a: 'Yes. Support, code review, and maintenance arrangements can be structured as part of any project engagement to guarantee system reliability and team adoption.' },
  { q: 'What is the recommended first step to engage?', a: 'Reach out through our project inquiry form or contact our engineering leadership directly. We will schedule an initial briefing to understand your operational context and provide a structured technical proposal.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div>
      <PageHero
        breadcrumb={[{ label: 'Services' }]}
        label="Services"
        heading="Five Capability Divisions. One Integrated Team."
        subheading="Explore our service areas and find the capabilities that match your business needs."
      />

      {/* Divisions Section */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="label">Our Capabilities</span>
            <h2 className={styles.sectionHeading}>How We Help Businesses Grow.</h2>
          </AnimatedSection>

          <div className={styles.divisionsGrid}>
            {serviceDivisions.map((division, idx) => {
              const Icon = iconMap[division.icon] || Code2
              return (
                <AnimatedSection
                  key={division.id}
                  id={division.id}
                  delay={idx * 0.08}
                  className={`${styles.divisionCard} ${
                    idx % 2 === 1 ? styles.divisionCardAlt : ''
                  }`}
                >
                  <div className={styles.divisionHeader}>
                    <div className={styles.divisionMeta}>
                      <span className={styles.divNum}>{division.number}</span>
                      <div className={styles.divIcon}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 className={styles.divTitle}>{division.title}</h3>
                    <p className={styles.divDesc}>{division.description}</p>
                    <Link
                      to={`/services/${division.services[0].slug}`}
                      className="btn btn-secondary"
                      style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                    >
                      Explore {division.shortTitle} <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className={styles.serviceList}>
                    {division.services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className={styles.serviceItem}
                      >
                        <span>{service.title}</span>
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--ink-900)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ color: 'var(--steel-300)' }}>Our Approach</span>
            <h2 className={styles.sectionHeadingLight}>How We Deliver.</h2>
          </AnimatedSection>

          <motion.div
            className={styles.processGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {process.map((step) => (
              <motion.div key={step.step} variants={staggerItem} className={styles.processStep}>
                <span className={styles.processNum}>{step.step}</span>
                <h4 className={styles.processTitle}>{step.title}</h4>
                <p className={styles.processDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <AnimatedSection>
            <span className="label">FAQ</span>
            <h2 className={styles.sectionHeading}>Common Questions.</h2>
          </AnimatedSection>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className={styles.faqQ}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={styles.faqAnswerWrap}
                    >
                      <p className={styles.faqA}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
