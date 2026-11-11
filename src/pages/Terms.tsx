import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'
import styles from './PrivacyPolicy.module.css'

export default function Terms() {
  usePageMeta({
    title: 'Terms of Service',
    description: 'INSICLE Terms of Service governing website usage, intellectual property, and general service principles.',
    path: '/terms',
  })
  return (
    <div className={styles.page}>
      <PageHero
        label="Legal & Governance"
        heading="Terms of Service."
        subheading="General website access terms, intellectual property protections, and service engagement principles for INSICLE."
        breadcrumb={[{ label: 'Terms of Service' }]}
      />

      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.legalNotice}>
            <p>
              <strong>Notice:</strong> These terms govern general digital browsing on our website. Professional software development, integration, and engineering services are governed by separate, mutually executed Master Services Agreements (MSAs) and Statements of Work (SOWs).
              <em> TODO(client): legal review by corporate counsel.</em>
            </p>
          </div>

          <div className={styles.legalBody}>
            <AnimatedSection>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or browsing this website (https://insicle.vercel.app), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of this site.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>2. Intellectual Property Rights</h2>
              <p>
                All proprietary content on this website, including but not limited to the INSICLE name, wordmark, official dry-brush brand mark, architectural diagrams, written technical copy, layouts, and software code samples, is the property of INSICLE or its licensors and is protected under applicable Indian and international copyright and trademark laws.
              </p>
              <p>
                You may view and download single copies of publicly available materials solely for internal informational and evaluation purposes. You may not republish, distribute, reverse engineer, or commercially exploit any website assets without prior written consent from INSICLE.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>3. Scope of Website Demonstrations</h2>
              <p>
                Descriptions of capabilities, architectural frameworks, solution blueprints, and research prototypes presented on this website are intended for educational and demonstrative scoping purposes. Commercial software deliveries, warranties, service level agreements (SLAs), and deliverables are defined exclusively in signed commercial contracts.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>4. Acceptable Website Use</h2>
              <p>When using our website and communication channels, you agree not to:</p>
              <ul>
                <li>Submit false, misleading, defamatory, or unlawful information through contact forms.</li>
                <li>Transmit malicious software, worms, automated bot inquiries, or unsolicited bulk promotions.</li>
                <li>Interfere with or probe website infrastructure, hosting boundaries, or network security controls.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2>5. Limitation of Liability</h2>
              <p>
                This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable Indian law, INSICLE disclaims liability for any indirect, incidental, consequential, or punitive damages arising from the use of or inability to access this website.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>6. Governing Law & Jurisdiction</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to website access shall be subject to the exclusive jurisdiction of the competent courts in Thiruvallur / Chennai, Tamil Nadu, India.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>7. Contact & Official Notice</h2>
              <p>For questions or formal inquiries concerning these Terms of Service, contact:</p>
              <div className={styles.grievanceBox}>
                <p><strong>Legal & Operations Office</strong></p>
                <p><strong>INSICLE</strong> (Proprietor: Dr. S. Selvi)</p>
                <p>RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur &ndash; 601206, Tamil Nadu, India</p>
                <p>Email: <a href="mailto:rmkinsicle@gmail.com">rmkinsicle@gmail.com</a> | Phone: <a href="tel:+919600142824">+91 96001 42824</a></p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
