import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Suspense, lazy } from 'react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Lazy-load pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const Solutions = lazy(() => import('@/pages/Solutions'))
const SolutionDetail = lazy(() => import('@/pages/SolutionDetail'))
const Industries = lazy(() => import('@/pages/Industries'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const CaseStudy = lazy(() => import('@/pages/CaseStudy'))
const Careers = lazy(() => import('@/pages/Careers'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    background: 'var(--paper)',
  }}>
    <div className="loader" aria-label="Loading..."></div>
  </div>
)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main id="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
