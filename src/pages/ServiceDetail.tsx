import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, Layers, Cpu, Compass, ArrowLeft } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import SlashMark from '@/components/common/SlashMark'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getServiceBySlug } from '@/data/services'
import { staggerContainer, staggerItem } from '@/animations/variants'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? getServiceBySlug(slug) : null

  if (!data || !data.service.approved) {
    return <Navigate to="/services" replace />
  }

  const { service, division } = data
  const otherServices = division.services.filter((s) => s.slug !== service.slug && s.approved).slice(0, 3)

  usePageMeta({
    title: `${service.title} — ${division.shortTitle}`,
    description: service.description,
    path: `/services/${service.slug}`,
  })

  return (
    <div className={styles.page}>
      <PageHero
        label={`${division.number} — ${division.shortTitle}`}
        heading={service.title}
        subheading={service.description}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: division.shortTitle, href: `/services#${division.id}` },
          { label: service.title },
        ]}
      />

      {/* Main Overview Section */}
      <section className={`section ${styles.overviewSection}`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection className={styles.overviewContent}>
              <span className="label">
                <SlashMark width={10} height={24} color="var(--steel-500)" /> Overview
              </span>
              <h2 className={styles.sectionHeading}>
                Engineered for Performance and Enterprise Value.
              </h2>
              <p className={styles.leadText}>
                {service.description} At INSICLE, our approach couples disciplined architectural standards with agile delivery, ensuring that each capability scales naturally alongside your organisational goals.
              </p>
              <p>
                Whether modernizing a legacy component or launching a zero-to-one capability, we ensure clean integrations, rigorous testing, and clear handover documentation.
              </p>
              <div className={styles.actionRow}>
                <Link to="/contact" className="btn btn-primary">
                  Inquire About This Service <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn btn-ghost">
                  <ArrowLeft size={16} /> Back to Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className={styles.overviewMedia} delay={0.15}>
              <div className={styles.imageCard}>
                <img
                  src={division.image}
                  alt={`${service.title} architectural visual`}
                  className={styles.divisionImg}
                  loading="lazy"
                />
                <div className={styles.imageBadge}>
                  <Layers size={18} />
                  <span>Division {division.number}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Challenges & Solutions */}
      <section className={`section ${styles.problemSection}`}>
        <div className="container">
          <AnimatedSection>
            <span className="label">Business Value</span>
            <h2 className={styles.sectionHeadingLight}>The Business Problem Addressed</h2>
          </AnimatedSection>

          <div className={styles.problemGrid}>
            <AnimatedSection className={styles.problemCard}>
              <div className={styles.cardHeader}>
                <Cpu size={24} className={styles.cardIconLime} />
                <h3 className={styles.cardTitleLight}>Operational Complexity</h3>
              </div>
              <p className={styles.cardTextLight}>
                Modern teams are burdened with fragmented workflows, disconnected tools, and manual interventions that throttle throughput. We deliver tailored implementations that streamline workflows into intuitive, unified systems.
              </p>
            </AnimatedSection>

            <AnimatedSection className={styles.problemCard} delay={0.1}>
              <div className={styles.cardHeader}>
                <Compass size={24} className={styles.cardIconLime} />
                <h3 className={styles.cardTitleLight}>Scalability & Reliability</h3>
              </div>
              <p className={styles.cardTextLight}>
                Growth quickly tests the boundaries of initial setups. Our solutions prioritise maintainability, security compliance, and resilience so your operational backbone expands effortlessly with demand.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className={`section ${styles.capabilitiesSection}`}>
        <div className="container">
          <AnimatedSection>
            <span className="label">
              <SlashMark width={10} height={24} color="var(--steel-500)" /> Capabilities
            </span>
            <h2 className={styles.sectionHeading}>What We Deliver</h2>
          </AnimatedSection>

          <motion.div
            className={styles.deliveryGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              {
                title: 'Tailored Architecture & Design',
                desc: 'Bespoke design specifications matching your operational constraints and technical stack.',
              },
              {
                title: 'Enterprise Integration',
                desc: 'Seamless data flow and API connectivity across existing internal databases and third-party tools.',
              },
              {
                title: 'Comprehensive Verification & QA',
                desc: 'End-to-end testing covering functional correctness, edge-case resilience, and responsive performance.',
              },
              {
                title: 'Structured Handover & Training',
                desc: 'Complete documentation, technical handover, and staff enablement for frictionless adoption.',
              },
            ].map((cap, i) => (
              <motion.div key={i} variants={staggerItem} className={styles.deliveryCard}>
                <CheckCircle2 size={24} className={styles.checkIcon} />
                <h3 className={styles.deliveryTitle}>{cap.title}</h3>
                <p className={styles.deliveryDesc}>{cap.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services in Division */}
      {otherServices.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.relatedHeader}>
                <div>
                  <span className="label">
                    <SlashMark width={10} height={24} color="var(--steel-500)" /> Complementary Offerings
                  </span>
                  <h2 className={styles.sectionHeading}>Related in {division.shortTitle}</h2>
                </div>
                <Link to={`/services#${division.id}`} className="btn btn-secondary">
                  View Division <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <div className={styles.relatedGrid}>
              {otherServices.map((rel) => (
                <Link key={rel.slug} to={`/services/${rel.slug}`} className={styles.relatedCard}>
                  <h4 className={styles.relatedTitle}>{rel.title}</h4>
                  <p className={styles.relatedDesc}>{rel.description}</p>
                  <span className={styles.relatedLink}>
                    Explore Service <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry CTA */}
      <ContactCTA
        heading={`Ready to implement ${service.title}?`}
        subtext="Contact our engineering team to discuss scope, timeline, and architectural alignment."
        cta="Start Project Discussion"
      />
    </div>
  )
}
