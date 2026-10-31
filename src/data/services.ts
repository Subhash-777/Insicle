// Services data — proposed categories based on business reference
// All services marked with approved:true are visible in the published site

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  approved: boolean;
}

export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
  color: 'lime' | 'charcoal' | 'white' | 'lime-tint';
  services: ServiceItem[];
  approved: boolean;
}

export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'digital-engineering',
    number: '01',
    title: 'Digital Engineering',
    shortTitle: 'Digital Engineering',
    description:
      'We design and build custom software, web and mobile applications tailored to your business needs — from API integrations to full-stack platforms.',
    icon: 'Code2',
    image: '/images/digital-engineering.png',
    color: 'charcoal',
    approved: true,
    services: [
      { slug: 'application-development', title: 'Application Development', description: 'Custom web and desktop application development tailored to specific business workflows.', approved: true },
      { slug: 'website-development', title: 'Website Development', description: 'Professional corporate and marketing websites built for performance and conversions.', approved: true },
      { slug: 'web-application-development', title: 'Web Application Development', description: 'Full-stack web applications with modern frameworks and scalable architectures.', approved: true },
      { slug: 'mobile-application-development', title: 'Mobile Application Development', description: 'Native and cross-platform mobile apps for iOS and Android.', approved: true },
      { slug: 'custom-software', title: 'Custom Software', description: 'Bespoke software solutions designed around unique operational requirements.', approved: true },
      { slug: 'api-development', title: 'API Development & Integration', description: 'RESTful and GraphQL API design and third-party system integrations.', approved: true },
    ],
  },
  {
    id: 'ai-business-intelligence',
    number: '02',
    title: 'AI & Business Intelligence',
    shortTitle: 'AI & BI',
    description:
      'Leverage data, machine learning and intelligent automation to power smarter business decisions and automate complex processes.',
    icon: 'Brain',
    image: '/images/ai-network.png',
    color: 'white',
    approved: true,
    services: [
      { slug: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'AI solutions for pattern recognition, prediction and intelligent decision-making.', approved: true },
      { slug: 'machine-learning', title: 'Machine Learning', description: 'Custom ML model development and integration into business systems.', approved: true },
      { slug: 'business-intelligence', title: 'Business Intelligence', description: 'BI platforms providing clear visibility into business performance.', approved: true },
      { slug: 'data-analytics', title: 'Data Analytics', description: 'End-to-end data pipelines, analysis and actionable reporting.', approved: true },
      { slug: 'reporting-visualization', title: 'Reporting & Visualization', description: 'Interactive dashboards and reports that make data accessible.', approved: true },
      { slug: 'intelligent-automation', title: 'Intelligent Automation', description: 'Workflow automation powered by AI to reduce manual effort and errors.', approved: true },
    ],
  },
  {
    id: 'enterprise-solutions',
    number: '03',
    title: 'Enterprise Solutions',
    shortTitle: 'Enterprise Solutions',
    description:
      'Streamline core business operations with capable enterprise systems — CRM, HRM, finance, sales and customer service platforms.',
    icon: 'Building2',
    image: '/images/enterprise-systems.png',
    color: 'lime-tint',
    approved: true,
    services: [
      { slug: 'crm', title: 'CRM', description: 'Customer relationship management systems to manage leads, customers and communications.', approved: true },
      { slug: 'hrm', title: 'HRM', description: 'Human resource management platforms covering employee lifecycle and HR processes.', approved: true },
      { slug: 'accounting-finance', title: 'Accounting & Finance Systems', description: 'Financial management and accounting software for accurate reporting.', approved: true },
      { slug: 'customer-service', title: 'Customer Service Systems', description: 'Help desk and customer support platforms to improve service quality.', approved: true },
      { slug: 'sales-automation', title: 'Sales Automation', description: 'Tools and workflows that automate sales processes and improve productivity.', approved: true },
      { slug: 'implementation-integration', title: 'Implementation & Integration', description: 'Professional implementation and integration of enterprise software platforms.', approved: true },
    ],
  },
  {
    id: 'digital-growth',
    number: '04',
    title: 'Digital Growth',
    shortTitle: 'Digital Growth',
    description:
      'Grow your digital presence with data-driven marketing, SEO, content strategy and performance campaigns that deliver measurable results.',
    icon: 'TrendingUp',
    image: '/images/digital-growth.png',
    color: 'white',
    approved: true,
    services: [
      { slug: 'digital-marketing', title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies across channels and touchpoints.', approved: true },
      { slug: 'seo', title: 'Search Engine Optimization', description: 'Organic search strategies that improve visibility and qualified traffic.', approved: true },
      { slug: 'sem', title: 'Search Engine Marketing', description: 'Paid search campaigns designed to maximize ROI and conversions.', approved: true },
      { slug: 'social-media', title: 'Social Media Management', description: 'Social media strategy, content creation and community management.', approved: true },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Strategic content that educates, engages and converts audiences.', approved: true },
      { slug: 'performance-marketing', title: 'Performance Marketing', description: 'Data-driven paid campaigns optimized for measurable business outcomes.', approved: true },
    ],
  },
  {
    id: 'talent-solutions',
    number: '05',
    title: 'Talent Solutions',
    shortTitle: 'Talent Solutions',
    description:
      'Find and engage the right talent with professional recruitment outsourcing, screening and onboarding coordination services.',
    icon: 'Users',
    image: '/images/talent-solutions.png',
    color: 'charcoal',
    approved: true,
    services: [
      { slug: 'recruitment-outsourcing', title: 'Recruitment Outsourcing', description: 'End-to-end talent acquisition outsourcing for organisations at any scale.', approved: true },
      { slug: 'candidate-screening', title: 'Candidate Screening', description: 'Structured screening and evaluation processes to identify quality candidates.', approved: true },
      { slug: 'recruitment-coordination', title: 'Recruitment Coordination', description: 'Coordination and scheduling support throughout the hiring process.', approved: true },
      { slug: 'employee-onboarding', title: 'Employee Onboarding Solutions', description: 'Structured onboarding programmes and systems to support new hires.', approved: true },
    ],
  },
];

export const getServiceBySlug = (slug: string) => {
  for (const division of serviceDivisions) {
    const service = division.services.find((s) => s.slug === slug);
    if (service) return { service, division };
  }
  return null;
};

export const getDivisionById = (id: string) =>
  serviceDivisions.find((d) => d.id === id) || null;
