import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Compass } from 'lucide-react'
import AnimatedSection from '@/components/common/AnimatedSection'
import styles from './NotFound.module.css'

export default function NotFound() {
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
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
