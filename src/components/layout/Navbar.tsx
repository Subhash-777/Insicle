import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const megaRef = useRef<HTMLDivElement>(null)
  const megaTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mega menu on outside click
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

  const isDarkHero = location.pathname === '/'
  const isSolid = scrolled || !isDarkHero

  return (
    <>
      <header
        className={`${styles.header} ${isSolid ? styles.scrolled : styles.transparent}`}
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
                  <li key={link.href} className={styles.navItem}>
                    <button
                      ref={megaTriggerRef}
                      className={`${styles.navLink} ${styles.megaTrigger} ${
                        location.pathname.startsWith('/services') ? styles.active : ''
                      }`}
                      onClick={() => setMegaOpen((v) => !v)}
                      onMouseEnter={() => setMegaOpen(true)}
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
              onMouseLeave={() => setMegaOpen(false)}
              role="dialog"
              aria-label="Services menu"
            >
              <div className="container">
                <div className={styles.megaGrid}>
                  {serviceDivisions.filter(d => d.approved).map((division) => (
                    <Link
                      key={division.id}
                      to={`/services#${division.id}`}
                      className={styles.megaCard}
                      onClick={() => setMegaOpen(false)}
                    >
                      <span className={styles.megaDivNumber}>{division.number}</span>
                      <span className={styles.megaDivTitle}>{division.shortTitle}</span>
                      <ul className={styles.megaServiceList}>
                        {division.services.slice(0, 3).map((svc) => (
                          <li key={svc.slug}>{svc.title}</li>
                        ))}
                      </ul>
                    </Link>
                  ))}
                  <div className={styles.megaCta}>
                    <p>Need a custom solution?</p>
                    <Link to="/contact" className="btn btn-primary" onClick={() => setMegaOpen(false)}>
                      Start a Conversation <ArrowRight size={14} />
                    </Link>
                    <Link to="/services" className={styles.allServices} onClick={() => setMegaOpen(false)}>
                      View all services <ArrowRight size={14} />
                    </Link>
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
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-label="Mobile navigation"
            >
              <div className={styles.mobileHeader}>
                <Link to="/" onClick={() => setMobileOpen(false)}>
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
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  Let's Talk <ArrowRight size={16} />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
