import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import AnimatedSection from '@/components/common/AnimatedSection'
import { company } from '@/data/company'
import styles from './Contact.module.css'

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your full name (at least 2 characters).' }),
  email: z.string().email({ message: 'Please enter a valid business email address.' }),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number.' })
    .regex(/^[+0-9\s\-()]{7,20}$/, { message: 'Phone number format is invalid.' }),
  companyName: z.string().min(2, { message: 'Please enter your company or organization name.' }),
  serviceInterest: z.string().min(1, { message: 'Please select a service or area of interest.' }),
  requirements: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters describing your project requirements.' }),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  'Digital Engineering (Custom Software / Web / Apps)',
  'AI & Business Intelligence (Analytics / ML / Automation)',
  'Enterprise Solutions (CRM / HRM / ERP Integration)',
  'Digital Growth (Marketing / SEO / SEM)',
  'Talent Solutions (Technical Recruitment Outsourcing)',
  'Other / Multi-disciplinary Inquiry',
]

export default function Contact() {
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'submitting' | 'dispatched' | 'error'
  >('idle')
  const [dispatchedData, setDispatchedData] = useState<ContactFormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      serviceInterest: '',
      requirements: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState('submitting')

    // Simulate adapter latency
    await new Promise((resolve) => setTimeout(resolve, 800))

    try {
      // Configurable submission adapter / honest mailto client dispatch
      const subject = encodeURIComponent(`Project Inquiry from ${data.name} (${data.companyName})`)
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
          `Company: ${data.companyName}\n` +
          `Email: ${data.email}\n` +
          `Phone: ${data.phone}\n` +
          `Service of Interest: ${data.serviceInterest}\n\n` +
          `Requirements:\n${data.requirements}\n`
      )

      const mailtoUrl = `mailto:${company.contact.email}?subject=${subject}&body=${body}`

      setDispatchedData(data)
      setSubmissionState('dispatched')
      reset()

      // Safely attempt dispatch without interrupting single-page app state
      try {
        const link = document.createElement('a')
        link.href = mailtoUrl
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch {
        // Handled via visible button in dispatch notice
      }
    } catch {
      setSubmissionState('error')
    }
  }

  return (
    <div className={styles.page}>
      <PageHero
        label="Start a Conversation"
        heading="Let's Build Something Meaningful Together."
        subheading="Reach out directly to our engineering leadership to discuss technical requirements, project scoping, or architecture consultations."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Info */}
            <AnimatedSection className={styles.infoCol}>
              <div className={styles.infoCard}>
                <span className="label">Contact Information</span>
                <h2 className={styles.infoHeading}>Direct Office Details</h2>
                <p className={styles.infoSub}>
                  We are available for project discussions, technical consultations, and strategic partnerships.
                </p>

                <div className={styles.contactChannels}>
                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className={styles.channelLabel}>Email Us Directly</span>
                      <a href={`mailto:${company.contact.email}`} className={styles.channelValue}>
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className={styles.channelLabel}>Telephone</span>
                      <a href={`tel:${company.contact.phone}`} className={styles.channelValue}>
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className={styles.channelLabel}>Registered Address</span>
                      <address className={styles.channelAddress}>
                        {company.contact.fullAddress}
                      </address>
                      <span className={styles.proprietorTag}>
                        Proprietor: <strong>{company.proprietor}</strong>
                      </span>
                    </div>
                  </div>

                  <div className={styles.channelItem}>
                    <div className={styles.channelIcon}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className={styles.channelLabel}>Operating Hours</span>
                      <span className={styles.channelValue}>
                        Monday – Friday, 9:00 AM – 6:00 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.infoVisual}>
                  <img
                    src="/images/contact-visual.png"
                    alt="INSICLE modern lime technology composition"
                    className={styles.contactImg}
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection className={styles.formCol} delay={0.15}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send a Project Inquiry</h3>
                <p className={styles.formSub}>
                  Please fill out the form below. When submitted, this securely launches your email client pre-populated with your exact parameters.
                </p>

                {submissionState === 'dispatched' && dispatchedData && (
                  <div className={styles.successNotice} role="alert">
                    <CheckCircle size={22} className={styles.noticeIcon} />
                    <div>
                      <h4 className={styles.noticeTitle}>Inquiry Dispatched to Mail Client</h4>
                      <p className={styles.noticeText}>
                        Your inquiry has been compiled and handed off to your device&apos;s email client addressed to <strong>{company.contact.email}</strong>. If your email application did not launch automatically, please send your details directly.
                      </p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                        <a
                          href={`mailto:${company.contact.email}?subject=${encodeURIComponent(`Project Inquiry from ${dispatchedData.name} (${dispatchedData.companyName})`)}`}
                          className="btn btn-primary"
                          style={{ fontSize: 13, padding: '8px 16px' }}
                        >
                          <Send size={14} /> Open in Email App
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmissionState('idle')}
                          className={`btn btn-secondary ${styles.resetBtn}`}
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {submissionState === 'error' && (
                  <div className={styles.errorNotice} role="alert">
                    <AlertCircle size={22} />
                    <p>An unexpected error occurred. Please contact us directly at {company.contact.email}.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                  <div className={styles.fieldRow}>
                    {/* Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Jane Doe"
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        {...register('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" className={styles.errorMessage} role="alert">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Business Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        {...register('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className={styles.errorMessage} role="alert">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    {/* Phone */}
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        {...register('phone')}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <span id="phone-error" className={styles.errorMessage} role="alert">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Company */}
                    <div className={styles.formGroup}>
                      <label htmlFor="companyName" className={styles.label}>
                        Company / Organization <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Acme Enterprises"
                        className={`${styles.input} ${errors.companyName ? styles.inputError : ''}`}
                        {...register('companyName')}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                      />
                      {errors.companyName && (
                        <span id="companyName-error" className={styles.errorMessage} role="alert">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div className={styles.formGroup}>
                    <label htmlFor="serviceInterest" className={styles.label}>
                      Service of Interest <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      className={`${styles.select} ${errors.serviceInterest ? styles.inputError : ''}`}
                      {...register('serviceInterest')}
                      aria-invalid={!!errors.serviceInterest}
                      aria-describedby={errors.serviceInterest ? 'serviceInterest-error' : undefined}
                    >
                      <option value="">Select a service category...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.serviceInterest && (
                      <span id="serviceInterest-error" className={styles.errorMessage} role="alert">
                        {errors.serviceInterest.message}
                      </span>
                    )}
                  </div>

                  {/* Requirements */}
                  <div className={styles.formGroup}>
                    <label htmlFor="requirements" className={styles.label}>
                      Project Scope & Requirements <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="requirements"
                      rows={4}
                      placeholder="Describe your project objectives, timeline, existing stack, and any specific requirements..."
                      className={`${styles.textarea} ${errors.requirements ? styles.inputError : ''}`}
                      {...register('requirements')}
                      aria-invalid={!!errors.requirements}
                      aria-describedby={errors.requirements ? 'requirements-error' : undefined}
                    />
                    {errors.requirements && (
                      <span id="requirements-error" className={styles.errorMessage} role="alert">
                        {errors.requirements.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submitBtn}`}
                  >
                    {isSubmitting ? (
                      <span>Preparing Dispatch...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className={styles.privacyNote}>
                    We respect your privacy. Inquiries are handled strictly between you and INSICLE leadership.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
