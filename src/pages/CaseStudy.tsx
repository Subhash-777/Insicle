import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Cpu,
  Target,
  Sparkles,
  Terminal,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import SlashMark from '@/components/common/SlashMark'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getProjectBySlug, projects } from '@/data/projects'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : null

  if (!project || !project.approved) {
    return <Navigate to="/portfolio" replace />
  }

  const related = projects.filter((p) => p.slug !== project.slug && p.approved).slice(0, 2)

  usePageMeta({
    title: `${project.title} — Technical Showcase`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
  })

  return (
    <div className={styles.page}>
      <PageHero
        label={`Case Study — ${project.category}`}
        heading={project.title}
        subheading={project.description}
        breadcrumb={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.title },
        ]}
      />

      {/* Hero Media / Banner */}
      <section className={styles.mediaSection}>
        <div className="container">
          <div className={styles.bannerWrap}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.bannerImg}
            />
            <div className={styles.bannerBadge}>
              <Sparkles size={16} /> Architectural Proof of Concept
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Scope */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.editorialGrid}>
            <div className={styles.mainCol}>
              <AnimatedSection>
                <span className="label">
                  <SlashMark width={10} height={24} color="var(--steel-500)" /> The Challenge
                </span>
                <h2 className={styles.sectionHeading}>Navigating Scale & System Bottlenecks</h2>
                <p className={styles.bodyParagraph}>{project.challenge}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <span className="label" style={{ marginTop: 32 }}>
                  <SlashMark width={10} height={24} color="var(--steel-500)" /> Our Solution & Approach
                </span>
                <h2 className={styles.sectionHeading}>Architectural Design & Implementation</h2>
                <p className={styles.bodyParagraph}>{project.solution}</p>
                <p className={styles.bodyParagraph}>
                  INSICLE&apos;s technical engineers applied a first-principles approach: evaluating interface requirements, constructing formal models, and implementing deterministic verification algorithms with rigorous automated tests.
                </p>
              </AnimatedSection>

              {project.outcome && (
                <AnimatedSection delay={0.2} className={styles.outcomeBox}>
                  <div className={styles.outcomeHeader}>
                    <Target size={24} className={styles.outcomeIcon} />
                    <h3 className={styles.outcomeTitle}>Demonstrated Outcomes</h3>
                  </div>
                  <p className={styles.outcomeText}>{project.outcome}</p>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar Meta */}
            <aside className={styles.sideCol}>
              <div className={styles.metaCard}>
                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Project Type</span>
                  <span className={styles.metaValue}>Technical Showcase</span>
                </div>

                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Category</span>
                  <span className={styles.metaValue}>{project.category}</span>
                </div>

                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Technology Stack</span>
                  <div className={styles.techTags}>
                    {project.technologies.map((t) => (
                      <span key={t} className={styles.techTag}>
                        <Terminal size={12} /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Validation</span>
                  <span className={styles.metaValue}>Simulation & Benchmark Lab</span>
                </div>

                <div className={styles.sideAction}>
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Consult on Similar Work <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.relatedHeader}>
                <div>
                  <span className="label">
                    <SlashMark width={10} height={24} color="var(--steel-500)" /> Other Showcases
                  </span>
                  <h2 className={styles.sectionHeading}>Related Technical Prototypes</h2>
                </div>
                <Link to="/portfolio" className="btn btn-ghost">
                  <ArrowLeft size={16} /> All Work
                </Link>
              </div>
            </AnimatedSection>

            <div className={styles.relatedGrid}>
              {related.map((rel) => (
                <Link key={rel.slug} to={`/portfolio/${rel.slug}`} className={styles.relatedCard}>
                  <img src={rel.image} alt={rel.title} className={styles.relatedImg} />
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{rel.category}</span>
                    <h4 className={styles.relatedTitle}>{rel.title}</h4>
                    <p className={styles.relatedDesc}>{rel.description}</p>
                    <span className={styles.relatedLink}>
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactCTA
        heading="Ready to Engineer Your Next Solution?"
        subtext="From initial architectural spike to enterprise deployment, INSICLE delivers robust systems."
        cta="Start a Conversation"
      />
    </div>
  )
}
