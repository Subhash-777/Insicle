// Solutions data — proposed enterprise solution categories
// NOTE: These are illustrative capability areas, not confirmed proprietary INSICLE products.
// Update the `approved` flag and descriptions after company review.

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  features: SolutionFeature[];
  useCases: string[];
  approved: boolean;
  isProprietaryProduct: boolean; // If false, it's a service capability, not an owned product
}

export const solutions: Solution[] = [
  {
    id: 'crm-solution',
    slug: 'crm',
    title: 'Customer Relationship Management',
    subtitle: 'CRM',
    description: 'Centralise customer data, manage relationships and streamline sales pipelines.',
    longDescription:
      'A modern CRM capability that consolidates customer interactions, tracks leads through the pipeline, and provides sales teams with the context they need to close deals effectively.',
    icon: 'Users',
    color: '#385068',
    approved: true,
    isProprietaryProduct: false,
    features: [
      { title: 'Contact & Account Management', description: 'Centralised database for customer contacts, accounts and interaction history.' },
      { title: 'Pipeline Tracking', description: 'Visual sales pipeline with deal stages and forecasting.' },
      { title: 'Activity Management', description: 'Tasks, calls and meetings linked directly to customer records.' },
      { title: 'Reporting & Analytics', description: 'Sales performance dashboards and revenue reporting.' },
    ],
    useCases: ['Sales team productivity', 'Customer retention', 'Lead management', 'Account management'],
  },
  {
    id: 'hrm-solution',
    slug: 'hrm',
    title: 'Human Resource Management',
    subtitle: 'HRM',
    description: 'Manage employee lifecycle, performance and HR processes in one place.',
    longDescription:
      'A comprehensive HRM capability that covers employee data management, attendance, leave, performance reviews and HR workflows.',
    icon: 'UserCheck',
    color: '#14212F',
    approved: true,
    isProprietaryProduct: false,
    features: [
      { title: 'Employee Records', description: 'Centralised employee profiles with complete employment history.' },
      { title: 'Attendance & Leave', description: 'Automated attendance tracking and leave management workflows.' },
      { title: 'Performance Management', description: 'Structured review cycles, goal setting and feedback tools.' },
      { title: 'Payroll Integration', description: 'Seamless connection to payroll processing systems.' },
    ],
    useCases: ['HR process automation', 'Employee self-service', 'Compliance management', 'Workforce planning'],
  },
  {
    id: 'helpdesk-solution',
    slug: 'customer-service',
    title: 'Customer Service Platform',
    subtitle: 'Help Desk',
    description: 'Deliver consistent, efficient customer support across all channels.',
    longDescription:
      'A customer service platform designed to manage support tickets, streamline agent workflows and maintain high customer satisfaction levels.',
    icon: 'HeadphonesIcon',
    color: '#EEF2F7',
    approved: true,
    isProprietaryProduct: false,
    features: [
      { title: 'Ticket Management', description: 'Centralised ticket queue with priority, assignment and SLA tracking.' },
      { title: 'Multi-Channel Support', description: 'Email, chat and phone support in a single agent workspace.' },
      { title: 'Knowledge Base', description: 'Self-service knowledge base to reduce ticket volume.' },
      { title: 'Customer Satisfaction', description: 'Automated CSAT surveys and feedback collection.' },
    ],
    useCases: ['Customer support operations', 'IT service desk', 'Field service management'],
  },
  {
    id: 'accounting-solution',
    slug: 'accounting-finance',
    title: 'Accounting & Finance',
    subtitle: 'Finance System',
    description: 'Financial management tools for accurate reporting and compliance.',
    longDescription:
      'A financial management capability that handles accounts, invoicing, expense tracking and financial reporting with accuracy and compliance.',
    icon: 'BarChart3',
    color: '#FFFFFF',
    approved: true,
    isProprietaryProduct: false,
    features: [
      { title: 'General Ledger', description: 'Comprehensive chart of accounts and double-entry bookkeeping.' },
      { title: 'Invoicing & Billing', description: 'Professional invoice creation, delivery and payment tracking.' },
      { title: 'Expense Management', description: 'Structured expense capture, approval and reimbursement workflows.' },
      { title: 'Financial Reporting', description: 'Balance sheet, P&L and cash flow statements on demand.' },
    ],
    useCases: ['SME financial management', 'Invoice automation', 'Expense control', 'Financial compliance'],
  },
  {
    id: 'sales-automation',
    slug: 'sales-automation',
    title: 'Sales Force Automation',
    subtitle: 'Sales Automation',
    description: 'Automate repetitive sales tasks and focus your team on closing.',
    longDescription:
      'Sales force automation tools that eliminate manual tasks, keep data accurate and give sales leaders the visibility they need to manage team performance.',
    icon: 'Zap',
    color: '#385068',
    approved: true,
    isProprietaryProduct: false,
    features: [
      { title: 'Lead Capture & Assignment', description: 'Automated lead capture from web forms and instant assignment rules.' },
      { title: 'Workflow Automation', description: 'Trigger-based workflows for follow-up tasks and notifications.' },
      { title: 'Quote & Proposal', description: 'Template-driven quote generation and approval workflows.' },
      { title: 'Performance Dashboards', description: 'Real-time team performance metrics and individual KPIs.' },
    ],
    useCases: ['B2B sales operations', 'Field sales management', 'Inside sales teams'],
  },
];

export const getSolutionBySlug = (slug: string) =>
  solutions.find((s) => s.slug === slug) || null;
