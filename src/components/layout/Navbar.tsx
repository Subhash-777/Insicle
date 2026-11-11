import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, ChevronUp } from 'lucide-react'
import { company } from '@/data/company'
import { serviceDivisions } from '@/data/services'
import { megaMenuVariants, mobileMenuVariants } from '@/animations/variants'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasMega: true },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const WHATSAPP_URL =
  'https://wa.me/919600142824?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20INSICLE%27s%20services.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const location = useLocation()
  const megaRef = useRef<HTMLDivElement>(null)
  const megaTriggerRef = useRef<HTMLButtonElement>(null)
  const openTimeout = useRef<number | null>(null)
  const closeTimeout = useRef<number | null>(null)
  // Focus trap refs
  const mobileMenuRef = useRef<HTMLElement>(null)
  const mobileFirstFocusRef = useRef<HTMLAnchorElement>(null)
  const mobileLastFocusRef = useRef<HTMLAnchorElement>(null)

  // Scroll state: scrolled + back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setShowBackTop(y > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  // Hover-intent: open after 120ms, close after 150ms
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    openTimeout.current = window.setTimeout(() => setMegaOpen(true), 120)
  }

  const handleMouseLeave = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current)
    closeTimeout.current = window.setTimeout(() => setMegaOpen(false), 150)
  }

  // Scroll lock on body when mobile drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mega menu on outside click + ESC
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        megaTriggerRef.current &&
        !megaTriggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Focus trap for mobile drawer
  const handleMobileKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!mobileOpen) return
    if (e.key !== 'Tab') return
    const menu = mobileMenuRef.current
    if (!menu) return
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [mobileOpen])

  const isContactPage = location.pathname === '/contact'
  const isDarkHero = location.pathname === '/'
  const isSolid = scrolled || !isDarkHero || megaOpen || mobileOpen

  // Header state classes for 4 states
  const headerStateClass = (() => {
    if (mobileOpen) return styles.mobileOpenState
    if (megaOpen) return styles.menuOpenState
    if (isSolid) return styles.scrolled
    return styles.transparent
  })()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`${styles.header} ${headerStateClass}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="INSICLE — Home">
            <img
              src={isSolid ? company.logo.svg : company.logo.svgLight}
              alt={company.logo.alt}
              width={160}
              height={56}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) =>
                link.hasMega ? (
                  <li
                    key={link.href}
                    className={styles.navItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      ref={megaTriggerRef}
                      className={`${styles.navLink} ${styles.megaTrigger} ${
                        location.pathname.startsWith('/services') ? styles.active : ''
                      }`}
                      onClick={() => setMegaOpen((v) => !v)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ''}`}
                      />
                    </button>
                  </li>
                ) : (
                  <li key={link.href} className={styles.navItem}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                      end={link.href === '/'}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* CTA */}
          <div className={styles.ctaArea}>
            <Link
              to="/contact"
              className={`btn btn-primary ${styles.ctaBtn}`}
              aria-label="Let's Talk — Contact INSICLE"
            >
              Let's Talk
              <ArrowRight size={16} />
            </Link>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              ref={megaRef}
              className={styles.megaMenu}
              variants={megaMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="dialog"
              aria-label="Services menu"
            >
              <div className="container">
                <div className={styles.megaGrid}>
                  {serviceDivisions.filter(d => d.approved).map((division) => (
                    <div key={division.id} className={styles.megaCol}>
                      <Link
                        to={`/services#${division.id}`}
                        className={styles.megaDivHeader}
                        onClick={() => setMegaOpen(false)}
                      >
                        <span className={styles.megaDivNumber}>{division.number}</span>
                        <h4 className={styles.megaDivTitle}>{division.shortTitle}</h4>
                      </Link>
                      <ul className={styles.megaServiceList}>
                        {division.services.slice(0, 3).map((svc) => (
                          <li key={svc.slug}>
                            <Link
                              to={`/services/${svc.slug}`}
                              className={styles.megaServiceLink}
                              onClick={() => setMegaOpen(false)}
                            >
                              {svc.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/services#${division.id}`}
                        className={styles.megaExploreLink}
                        onClick={() => setMegaOpen(false)}
                      >
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                  ))}

                  <div className={styles.megaCtaCard}>
                    <div className={styles.megaCtaContent}>
                      <span className={styles.megaCtaEyebrow}>CUSTOM ENGAGEMENTS</span>
                      <h4 className={styles.megaCtaTitle}>Need a Tailored Team?</h4>
                      <p className={styles.megaCtaDesc}>
                        Practical technical solutions tailored to your operational constraints.
                      </p>
                    </div>
                    <div className={styles.megaCtaActions}>
                      <Link
                        to="/contact"
                        className={`btn btn-primary ${styles.megaCtaBtn}`}
                        onClick={() => setMegaOpen(false)}
                      >
                        Talk to our team <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/services"
                        className={styles.megaCtaSecondary}
                        onClick={() => setMegaOpen(false)}
                      >
                        All 5 Divisions Overview →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              ref={mobileMenuRef}
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-label="Mobile navigation"
              aria-modal="true"
              onKeyDown={handleMobileKeyDown}
            >
              <div className={styles.mobileHeader}>
                <Link
                  ref={mobileFirstFocusRef}
                  to="/"
                  onClick={() => setMobileOpen(false)}
                >
                  <img src={company.logo.header} alt={company.logo.alt} height={44} style={{ objectFit: 'contain' }} />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className={styles.mobileClose}
                >
                  <X size={24} />
                </button>
              </div>

              <ul className={styles.mobileNavList}>
                <li>
                  <NavLink to="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)} end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>About</NavLink>
                </li>
                <li>
                  <button
                    className={`${styles.mobileNavLink} ${styles.mobileNavToggle}`}
                    onClick={() => setMobileServicesOpen(v => !v)}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown size={16} className={mobileServicesOpen ? styles.chevronOpen : ''} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.ul
                        className={styles.mobileSubList}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {serviceDivisions.map((div) => (
                          <li key={div.id}>
                            <Link
                              to={`/services#${div.id}`}
                              className={styles.mobileSubLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className={styles.mobileSubNum}>{div.number}</span>
                              {div.shortTitle}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to="/services" className={`${styles.mobileSubLink} ${styles.mobileSubAll}`} onClick={() => setMobileOpen(false)}>
                            View all services →
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li><NavLink to="/solutions" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Solutions</NavLink></li>
                <li><NavLink to="/industries" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Industries</NavLink></li>
                <li><NavLink to="/portfolio" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Portfolio</NavLink></li>
                <li><NavLink to="/careers" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Careers</NavLink></li>
                <li><NavLink to="/contact" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Contact</NavLink></li>
              </ul>

              <div className={styles.mobileCta}>
                <Link
                  ref={mobileLastFocusRef}
                  to="/contact"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Let's Talk <ArrowRight size={16} />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.whatsappFloat} ${isContactPage ? styles.whatsappHidden : ''}`}
        aria-label="Chat with INSICLE on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
