import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Code2, Brain, Building2, TrendingUp, Users } from 'lucide-react'
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
  { q: 'Do you work with small businesses?', a: 'Yes. Our solutions are designed to scale — from early-stage businesses to established enterprises.' },
  { q: 'Can you handle end-to-end projects?', a: 'We can support the full project lifecycle — from initial discovery and design through to development, testing and deployment.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. Support and maintenance arrangements can be agreed as part of a project engagement.' },
  { q: 'How do I get started?', a: 'Contact us through our contact page or call us directly. We\'ll schedule an initial conversation to understand your requirements.' },
]

export default function Services() {
  return (
    <div>
      <PageHero
        label="Services"
        heading="Five Capability Divisions. One Integrated Team."
        subheading="Explore our service areas and find the capabilities that match your business needs."
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* Division overview */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="label">Our Capabilities</span>
            <h2 className={styles.sectionHeading}>How We Help Businesses Grow.</h2>
          </AnimatedSection>

          <div className={styles.divisionsGrid}>
            {serviceDivisions.filter(d => d.approved).map((division, idx) => {
              const Icon = iconMap[division.icon] || Code2
              return (
                <AnimatedSection key={division.id} delay={idx * 0.08} id={division.id}>
                  <div className={`${styles.divisionCard} ${idx % 2 === 1 ? styles.divisionCardAlt : ''}`}>
                    <div className={styles.divisionHeader}>
                      <div className={styles.divisionMeta}>
                        <span className={styles.divNum}>{division.number}</span>
                        <div className={styles.divIcon}>
                          <Icon size={22} />
                        </div>
                      </div>
                      <h3 className={styles.divTitle}>{division.title}</h3>
                      <p className={styles.divDesc}>{division.description}</p>
                    </div>
                    <ul className={styles.serviceList}>
                      {division.services.filter(s => s.approved).map((svc) => (
                        <li key={svc.slug}>
                          <Link to={`/services/${svc.slug}`} className={styles.serviceItem}>
                            <span>{svc.title}</span>
                            <ArrowRight size={12} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--color-charcoal)' }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ color: 'var(--color-lime)' }}>How We Work</span>
            <h2 className={styles.sectionHeadingLight}>Our Delivery Approach.</h2>
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

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <AnimatedSection>
            <span className="label">FAQ</span>
            <h2 className={styles.sectionHeading}>Common Questions.</h2>
          </AnimatedSection>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07} className={styles.faqItem}>
                <h4 className={styles.faqQ}>{faq.q}</h4>
                <p className={styles.faqA}>{faq.a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
