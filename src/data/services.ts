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
  businessProblem: string;
  useCaseExample: string;
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
      'We architect, engineer, and modernize custom web platforms, mobile applications, and enterprise microservices tailored to mission-critical operational requirements.',
    businessProblem:
      'Off-the-shelf software rarely fits nuanced organisational workflows, while legacy systems create technical debt, security liabilities, and sluggish feature cycles.',
    useCaseExample:
      'A cross-platform field service application synchronizing offline inspections with a central ERP via asynchronous event queues.',
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
      'Unlock predictive insights, automate cognitive repetitive tasks, and consolidate disparate organisational data into decision-ready business intelligence dashboards.',
    businessProblem:
      'Valuable data remains trapped in departmental silos, spreadsheets, and legacy databases, forcing executives to make strategic decisions based on delayed or incomplete reports.',
    useCaseExample:
      'Automated semantic extraction pipeline converting unstructured PDF vendor invoices into structured ledger records with validation checks.',
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
      'Design, configure, and integrate comprehensive operational backbones spanning customer relationship management, human resources, accounting, and automated sales.',
    businessProblem:
      'Fragmented vendor tools lead to duplicate data entry, inconsistent customer records, and manual billing reconciliation between departments.',
    useCaseExample:
      'Unified CRM and billing integration connecting customer contracts to automated milestone invoicing and finance reconciliation.',
    icon: 'Building2',
    image: '/images/enterprise-systems.png',
    color: 'lime-tint',
    approved: true,
    services: [
      { slug: 'crm', title: 'CRM Solutions', description: 'Customer relationship management systems to manage leads, accounts, and communication logs.', approved: true },
      { slug: 'hrm', title: 'HRM Systems', description: 'Human resource management platforms covering lifecycle management and attendance.', approved: true },
      { slug: 'accounting-finance', title: 'Accounting & Finance', description: 'Financial management and accounting software for accurate balance sheets.', approved: true },
      { slug: 'customer-service', title: 'Customer Service & Help Desk', description: 'Ticketing platforms to improve resolution speed and customer satisfaction.', approved: true },
      { slug: 'sales-automation', title: 'Sales Force Automation', description: 'Pipeline tools and automated triggers that eliminate manual data entry.', approved: true },
      { slug: 'implementation-integration', title: 'Implementation & Integration', description: 'Expert technical onboarding and cross-system database synchronizations.', approved: true },
    ],
  },
  {
    id: 'digital-growth',
    number: '04',
    title: 'Digital Growth',
    shortTitle: 'Digital Growth',
    description:
      'Expand organic market visibility and customer acquisition through structured technical SEO, content strategy, performance campaigns, and analytics instrumentation.',
    businessProblem:
      'High-performing technology investments fail to yield commercial returns if prospective buyers cannot find the business or encounter confusing customer journeys.',
    useCaseExample:
      'Technical SEO audit and conversion rate optimisation (CRO) overhaul turning passive web traffic into qualified sales inquiries.',
    icon: 'TrendingUp',
    image: '/images/digital-growth.png',
    color: 'white',
    approved: true,
    services: [
      { slug: 'digital-marketing', title: 'Digital Marketing Strategy', description: 'Comprehensive marketing roadmaps aligned with business revenue goals.', approved: true },
      { slug: 'seo', title: 'Technical Search Engine Optimization', description: 'Architecture, crawlability, and schema enhancements for high-intent search visibility.', approved: true },
      { slug: 'sem', title: 'Search Engine Marketing', description: 'Precision-targeted paid search campaigns optimised for cost-per-acquisition.', approved: true },
      { slug: 'social-media', title: 'Social Media Management', description: 'Strategic industry positioning and professional audience engagement.', approved: true },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Authority-building whitepapers, technical articles, and case documentation.', approved: true },
      { slug: 'performance-marketing', title: 'Performance Marketing', description: 'Data-driven multichannel campaigns managed against explicit ROI benchmarks.', approved: true },
    ],
  },
  {
    id: 'talent-solutions',
    number: '05',
    title: 'Talent Solutions',
    shortTitle: 'Talent Solutions',
    description:
      'Identify, screen, and coordinate specialised technical talent to augment internal engineering initiatives and accelerate project milestones.',
    businessProblem:
      'Engineering leaders spend disproportionate hours sifting through unqualified resumes rather than focusing on system architecture and code delivery.',
    useCaseExample:
      'Rigorous technical screening pipeline providing pre-vetted full-stack engineers within 10 business days for a major release milestone.',
    icon: 'Users',
    image: '/images/talent-solutions.png',
    color: 'charcoal',
    approved: true,
    services: [
      { slug: 'recruitment-outsourcing', title: 'Recruitment Process Outsourcing', description: 'End-to-end talent acquisition partnerships for growing engineering teams.', approved: true },
      { slug: 'candidate-screening', title: 'Technical Candidate Screening', description: 'Code evaluation and structured technical interviews conducted by engineers.', approved: true },
      { slug: 'recruitment-coordination', title: 'Recruitment Coordination', description: 'Interview logistics, candidate communication, and offer management.', approved: true },
      { slug: 'employee-onboarding', title: 'Onboarding Systemization', description: 'Structured documentation, access provisioning, and developer enablement.', approved: true },
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
