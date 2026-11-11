import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Layers, Sparkles, Filter } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'
import { projects, portfolioCategories } from '@/data/projects'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  usePageMeta({
    title: 'Technical Capabilities & Engineering Showcases',
    description: 'Explore INSICLE architectural prototypes, zero-trust property graphs, and cloud-native event streaming implementations.',
    path: '/portfolio',
  })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.categorySlug === activeCategory
  )

  return (
    <div className={styles.page}>
      <PageHero
        label="Project Showcase"
        heading="Technical Capabilities & Proof of Concepts."
        subheading="Explore our architectural prototypes, system implementations, and technical showcase projects."
        breadcrumb={[{ label: 'Portfolio' }]}
      />

      {/* Advisory Banner */}
      <section className={styles.advisorySection}>
        <div className="container">
          <div className={styles.advisoryCard}>
            <Sparkles size={20} className={styles.advisoryIcon} />
            <p className={styles.advisoryText}>
              <strong>Notice:</strong> The items presented below represent architectural prototypes, research projects, and capability demonstrations developed to illustrate technical depth. Proprietary client case studies are subject to non-disclosure agreements and published only upon client authorization.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.filterLabelWrap}>
              <Filter size={16} />
              <span>Filter Work:</span>
            </div>
            <div className={styles.filterTabs}>
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${
                    activeCategory === cat.id ? styles.activeFilter : ''
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className={styles.projectsGrid}
              >
                {filteredProjects.map((proj) => (
                  <article key={proj.id} className={styles.projectCard}>
                    <div className={styles.cardImageWrap}>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className={styles.projectImg}
                        loading="lazy"
                      />
                      <span className={styles.showcaseBadge}>
                        <Layers size={13} /> Technical Showcase
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.categoryTag}>{proj.category}</span>
                      <h3 className={styles.projectTitle}>
                        <Link to={`/portfolio/${proj.slug}`}>{proj.title}</Link>
                      </h3>
                      <p className={styles.projectDesc}>{proj.description}</p>

                      <div className={styles.techStack}>
                        {proj.technologies.map((tech) => (
                          <span key={tech} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className={styles.cardFooter}>
                        <Link
                          to={`/portfolio/${proj.slug}`}
                          className={`btn btn-secondary ${styles.detailBtn}`}
                        >
                          View Technical Breakdown <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.emptyState}
              >
                <div className={styles.emptyIcon}>
                  <Layers size={36} />
                </div>
                <h3 className={styles.emptyTitle}>
                  No showcases currently published in this category.
                </h3>
                <p className={styles.emptyDesc}>
                  We are actively documenting additional architectural demonstrations for this domain.
                </p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="btn btn-secondary"
                >
                  View All Categories
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        heading="Have a Unique Project Architecture in Mind?"
        subtext="Let's build a dedicated proof of concept or custom production application for your team."
        cta="Start Technical Consultation"
      />
    </div>
  )
}
