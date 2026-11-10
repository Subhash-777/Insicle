import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SlashMark from './SlashMark'
import styles from './PageHero.module.css'

interface PageHeroProps {
  label?: string
  heading: string
  subheading?: string
  breadcrumb?: Array<{ label: string; href?: string }>
  dark?: boolean
  centered?: boolean
}

export default function PageHero({
  label,
  heading,
  subheading,
  breadcrumb,
  dark = false,
  centered = false,
}: PageHeroProps) {
  return (
    <section
      className={`${styles.hero} ${dark ? styles.dark : styles.light} ${centered ? styles.centered : ''}`}
    >
      <div className="container">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={i}>
                  <ArrowRight size={12} />
                  {crumb.href ? (
                    <Link to={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={styles.content}>
          {label && (
            <span className={`label ${dark ? 'label-dark' : ''} ${styles.label}`}>
              <SlashMark
                width={10}
                height={24}
                color={dark ? 'var(--steel-300)' : 'var(--steel-500)'}
              />
              {label}
            </span>
          )}
          <h1 className={styles.heading}>{heading}</h1>
          {subheading && <p className={styles.subheading}>{subheading}</p>}
        </div>
      </div>
    </section>
  )
}
