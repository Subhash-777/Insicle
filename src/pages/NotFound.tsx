import { Link } from 'react-router-dom'
import { Home, Compass, MessageSquare } from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import { usePageMeta } from '@/hooks/usePageMeta'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageMeta({
    title: '404 — Page Not Found',
    description: 'The requested page does not exist. Explore INSICLE services, capabilities, or contact our team.',
    path: '/404',
  })
  return (
    <div className={styles.page}>
      <div className="container">
        <AnimatedSection className={styles.content}>
          <div className={styles.badge}>
            <span>Error 404</span>
          </div>

          <h1 className={styles.title}>404</h1>
          <h2 className={styles.heading}>Page Not Found</h2>
          <p className={styles.text}>
            The path you are attempting to access does not exist or has been relocated within our architecture.
          </p>

          <div className={styles.actions}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Return to Homepage
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <Compass size={16} /> Explore Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <MessageSquare size={16} /> Contact Team
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
