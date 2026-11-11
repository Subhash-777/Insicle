import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import ContactCTA from '@/components/common/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'
import styles from './PrivacyPolicy.module.css'

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacy Policy',
    description: 'INSICLE Privacy Policy regarding data handling, collection, retention, and DPDP Act compliance.',
    path: '/privacy-policy',
  })
  return (
    <div className={styles.page}>
      <PageHero
        label="Legal & Privacy"
        heading="Privacy Policy."
        subheading="How INSICLE collects, processes, and protects your information in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023."
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />

      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.legalNotice}>
            <p>
              <strong>Notice:</strong> This policy outlines our general operational privacy practices.
              <em> TODO(client): legal review by corporate counsel prior to commercial contract execution.</em>
            </p>
          </div>

          <div className={styles.legalBody}>
            <AnimatedSection>
              <h2>1. Introduction & Scope</h2>
              <p>
                INSICLE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a technology and digital solutions proprietorship registered in Tamil Nadu, India, with its principal office at RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur &ndash; 601206. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of personal data when you visit our website (https://insicle.vercel.app) or submit an inquiry to our team.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>2. Information We Collect</h2>
              <p>We collect personal information solely when you voluntarily provide it through our website contact forms, email communications, or telephone inquiries. This data may include:</p>
              <ul>
                <li><strong>Identity & Contact Information:</strong> Your full name, business email address, telephone number, and company or organisation name.</li>
                <li><strong>Project Context:</strong> Selected service division interest, project scope requirements, and any notes or attachments provided during preliminary scoping.</li>
                <li><strong>Technical Telemetry:</strong> Standard, non-identifying server log data such as anonymized IP address, browser type, device category, referring URL, and page request timestamps necessary to maintain security and operational reliability.</li>
              </ul>
              <p>We do not use tracking cookies, cross-site trackers, or third-party behavioral profiling scripts on our website.</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>3. Purpose & Legal Basis for Processing</h2>
              <p>In alignment with the Digital Personal Data Protection Act, 2023 (DPDPA), we process your data on legitimate legal bases:</p>
              <ul>
                <li><strong>Responding to Enquiries:</strong> To review technical project requirements, prepare delivery proposals, and schedule architecture consultations requested by you.</li>
                <li><strong>Contractual Pre-steps:</strong> To conduct feasibility discussions prior to entering into a formal Master Services Agreement (MSA) or Statement of Work (SOW).</li>
                <li><strong>Security & Compliance:</strong> To prevent spam, fraud, unauthorized access, and malicious automated traffic on our contact channels.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2>4. Data Retention</h2>
              <p>
                Contact form submissions and prospective project inquiries are retained for a maximum of 24 months from the date of last correspondence, after which records are securely purged unless an active client engagement or statutory tax/accounting requirement necessitates longer retention.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>5. Data Disclosure & Cross-Border Transfers</h2>
              <p>
                INSICLE does not sell, license, rent, or trade your personal information. Data is shared only with trusted infrastructure providers (such as hosting and encrypted email transmission partners) operating under strict data processing agreements, or when mandated by applicable law, court order, or governmental authority in India.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2>6. Your Rights Under Indian Law</h2>
              <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
              <ul>
                <li>Request confirmation of whether we process your personal data and obtain a summary of such data.</li>
                <li>Request correction, completion, or updating of inaccurate or incomplete personal data.</li>
                <li>Request erasure of your personal data when it is no longer required for the purpose for which it was collected.</li>
                <li>Nominate an individual to exercise these rights in the event of death or incapacity.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2>7. Grievance Redressal & Contact</h2>
              <p>
                In accordance with Indian information technology regulations, any questions, concerns, or grievances regarding the processing of your data may be directed to our designated Grievance Officer:
              </p>
              <div className={styles.grievanceBox}>
                <p><strong>Grievance Officer:</strong> Management Office</p>
                <p><strong>Entity:</strong> INSICLE</p>
                <p><strong>Address:</strong> RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur &ndash; 601206, Tamil Nadu, India</p>
                <p><strong>Email:</strong> <a href="mailto:rmkinsicle@gmail.com">rmkinsicle@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919600142824">+91 96001 42824</a></p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
