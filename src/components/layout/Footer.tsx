import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react'
import { company } from '@/data/company'
import { serviceDivisions } from '@/data/services'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logoWrap} aria-label="INSICLE — Home">
            <img
              src={company.logo.footer}
              alt={company.logo.alt}
              height={36}
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
          </Link>
          <p className={styles.brandDesc}>
            Technology, software development and digital solutions. Turning ambitious ideas into practical digital outcomes.
          </p>
          <div className={styles.contactList}>
            <a href={`tel:${company.contact.phone}`} className={styles.contactItem}>
              <Phone size={14} />
              <span>{company.contact.phone}</span>
            </a>
            <a href={`mailto:${company.contact.email}`} className={styles.contactItem}>
              <Mail size={14} />
              <span>{company.contact.email}</span>
            </a>
            <a
              href="https://wa.me/919600142824?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20INSICLE%27s%20services."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <MessageCircle size={14} />
              <span>WhatsApp: +91 96001 42824</span>
            </a>
            <div className={styles.contactItem}>
              <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{company.contact.fullAddress}</span>
            </div>
            <div className={styles.gstinWrap}>
              <span>GSTIN: <em>Pending Client Verification</em></span>
            </div>
          </div>
        </div>

        {/* Company links */}
        <div className={styles.linkCol}>
          <h3 className={styles.colHeading}>Company</h3>
          <ul className={styles.linkList}>
            <li><Link to="/about" className={styles.link}>About Us</Link></li>
            <li><Link to="/services" className={styles.link}>Services</Link></li>
            <li><Link to="/solutions" className={styles.link}>Solutions</Link></li>
            <li><Link to="/industries" className={styles.link}>Industries</Link></li>
            <li><Link to="/portfolio" className={styles.link}>Portfolio</Link></li>
            <li><Link to="/careers" className={styles.link}>Careers</Link></li>
            <li><Link to="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Services links */}
        <div className={styles.linkCol}>
          <h3 className={styles.colHeading}>Services</h3>
          <ul className={styles.linkList}>
            {serviceDivisions.filter(d => d.approved).map((div) => (
              <li key={div.id}>
                <Link to={`/services#${div.id}`} className={styles.link}>
                  {div.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA column */}
        <div className={styles.ctaCol}>
          <h3 className={styles.ctaColHeading}>Ready to start?</h3>
          <p className={styles.ctaText}>
            Got something ambitious in mind? Let&apos;s turn your next idea into something meaningful.
          </p>
          <Link to="/contact" className={`btn btn-dark ${styles.ctaBtn}`}>
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {currentYear} {company.name}. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link to="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.divider}>•</span>
              <Link to="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
