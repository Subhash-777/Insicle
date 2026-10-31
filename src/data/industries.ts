// Industries data — proposed application areas, subject to company approval

export interface Industry {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  icon: string;
  approved: boolean;
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Digital solutions that support healthcare providers in managing patient data, appointments and administrative workflows more efficiently.',
    challenges: ['Patient data management', 'Appointment scheduling', 'Regulatory compliance', 'Billing complexity'],
    solutions: ['Custom patient management systems', 'Digital health records', 'Appointment automation', 'Billing integration'],
    icon: 'Heart',
    approved: true,
  },
  {
    id: 'education',
    title: 'Education',
    description:
      'Technology platforms that help educational institutions manage students, courses and administrative processes digitally.',
    challenges: ['Student information management', 'Remote learning delivery', 'Assessment and grading', 'Communication'],
    solutions: ['Learning management systems', 'Student portals', 'Assessment platforms', 'Communication tools'],
    icon: 'GraduationCap',
    approved: true,
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description:
      'Digital commerce and retail management solutions that help businesses sell more effectively online and in store.',
    challenges: ['Inventory management', 'Customer experience', 'Multichannel selling', 'Order fulfilment'],
    solutions: ['E-commerce platforms', 'Inventory systems', 'Customer loyalty tools', 'Order management'],
    icon: 'ShoppingCart',
    approved: true,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Systems and tools that help manufacturing operations track production, manage quality and reduce operational inefficiencies.',
    challenges: ['Production tracking', 'Quality management', 'Supply chain visibility', 'Maintenance scheduling'],
    solutions: ['Production management systems', 'Quality control tools', 'Supply chain dashboards', 'Asset tracking'],
    icon: 'Factory',
    approved: true,
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description:
      'Digital solutions for financial service organisations requiring accuracy, compliance and real-time reporting.',
    challenges: ['Data accuracy and compliance', 'Customer onboarding', 'Reporting requirements', 'Fraud prevention'],
    solutions: ['Financial reporting systems', 'Customer onboarding portals', 'Compliance dashboards', 'Audit trails'],
    icon: 'Landmark',
    approved: true,
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'Track, manage and optimise logistics operations with digital tools that provide real-time visibility and efficiency.',
    challenges: ['Shipment tracking', 'Route optimisation', 'Warehouse management', 'Delivery coordination'],
    solutions: ['Shipment tracking systems', 'Route management tools', 'Warehouse management', 'Delivery platforms'],
    icon: 'Truck',
    approved: true,
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description:
      'Practice management and client relationship tools for professional service firms looking to improve efficiency.',
    challenges: ['Project management', 'Client billing', 'Resource allocation', 'Knowledge management'],
    solutions: ['Project management platforms', 'Time and billing systems', 'Resource planning tools', 'CRM for services'],
    icon: 'Briefcase',
    approved: true,
  },
];

export const getIndustryById = (id: string) =>
  industries.find((i) => i.id === id) || null;
