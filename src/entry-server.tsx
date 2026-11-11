import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Solutions from '@/pages/Solutions'
import Industries from '@/pages/Industries'
import Portfolio from '@/pages/Portfolio'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Terms from '@/pages/Terms'
import NotFound from '@/pages/NotFound'

interface RouteMeta {
  title: string
  description: string
  Component: React.ComponentType
}

export const routesMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'INSICLE | Technology & Digital Solutions',
    description: "Explore INSICLE's technology, software development and digital solutions. Contact our engineering team to discuss your business requirements.",
    Component: Home,
  },
  '/about': {
    title: 'About Us | INSICLE',
    description: 'Learn about INSICLE, our engineering practice, core values, and leadership under Dr. S. Selvi.',
    Component: About,
  },
  '/services': {
    title: 'Our Services & Capability Divisions | INSICLE',
    description: 'Explore INSICLE five core capability divisions: Digital Engineering, AI & BI, Enterprise Solutions, Digital Growth, and Talent Solutions.',
    Component: Services,
  },
  '/solutions': {
    title: 'Enterprise Solutions & Frameworks | INSICLE',
    description: 'Customizable enterprise frameworks covering CRM, HRM, Accounting, Help Desk, and Sales Automation.',
    Component: Solutions,
  },
  '/industries': {
    title: 'Industry Sector Solutions | INSICLE',
    description: 'Explore INSICLE domain architectures across Healthcare, Education, E-Commerce, Manufacturing, Finance, and Logistics.',
    Component: Industries,
  },
  '/portfolio': {
    title: 'Technical Capabilities & Engineering Showcases | INSICLE',
    description: 'Explore INSICLE architectural prototypes, zero-trust property graphs, and cloud-native event streaming implementations.',
    Component: Portfolio,
  },
  '/careers': {
    title: 'Careers & Engineering Practice | INSICLE',
    description: 'Explore opportunities and engineering culture at INSICLE. Send your CV to join our software and AI team.',
    Component: Careers,
  },
  '/contact': {
    title: 'Talk to Our Team | INSICLE',
    description: 'Get in touch with INSICLE engineering leadership to discuss technology solutions, system scoping, and custom development.',
    Component: Contact,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | INSICLE',
    description: 'INSICLE Privacy Policy regarding data handling, collection, retention, and DPDP Act compliance.',
    Component: PrivacyPolicy,
  },
  '/terms': {
    title: 'Terms of Service | INSICLE',
    description: 'INSICLE Terms of Service governing website usage, intellectual property, and general service principles.',
    Component: Terms,
  },
  '/404': {
    title: '404 — Page Not Found | INSICLE',
    description: 'The requested page does not exist. Explore INSICLE services, capabilities, or contact our team.',
    Component: NotFound,
  },
}

export function render(url: string) {
  const route = routesMeta[url] || routesMeta['/404']
  const { Component } = route

  const appHtml = renderToString(
    <StaticRouter location={url}>
      <Navbar />
      <main id="main-content">
        <Component />
      </main>
      <Footer />
    </StaticRouter>
  )

  return {
    appHtml,
    title: route.title,
    description: route.description,
  }
}
