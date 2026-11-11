// Portfolio projects — using demonstrative placeholders
// No real client work, metrics or testimonials are claimed.
// Set approved:true and isPlaceholder:false only when actual company-approved commercial project data is available.

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcome: string | null;
  image: string;
  approved: boolean;
  isPlaceholder: boolean; // true = demonstrative technical showcase, not a commercial client claim
}

export const projects: Project[] = [
  {
    id: 'semantic-graph-zero-trust',
    slug: 'semantic-graph-zero-trust',
    title: 'Semantic-Graph-Based Zero-Trust Policy Verification',
    category: 'AI & Business Intelligence',
    categorySlug: 'ai-bi',
    description:
      'A technical research prototype modeling complex microservice security policies as high-dimensional property graphs to algorithmically detect conflicting authorization rules in real time.',
    challenge:
      'In multi-cloud zero-trust architectures, security access control lists and IAM roles rapidly scale into thousands of overlapping rules, making manual conflict verification mathematically intractable.',
    solution:
      'Implemented a graph-theoretic validation engine utilizing semantic property graph traversals to evaluate transitive policy permissions and automatically identify policy shadowing and privilege escalations.',
    technologies: ['Property Graphs', 'Python', 'Neo4j / GQL', 'Zero-Trust Architecture', 'Semantic Reasoning'],
    outcome: 'Demonstrated deterministic rule conflict resolution and policy visualization in benchmark simulation testing.',
    image: '/images/ai-network.png',
    approved: true,
    isPlaceholder: true,
  },
  {
    id: 'cloud-native-event-engine',
    slug: 'cloud-native-event-engine',
    title: 'Cloud-Native Distributed Event Architecture',
    category: 'Digital Engineering',
    categorySlug: 'digital-engineering',
    description:
      'A high-throughput distributed messaging architecture designed for multi-tenant enterprise event streaming and sub-second ingestion latency.',
    challenge:
      'High-velocity transaction workloads often trigger cascading failures and latency spikes across legacy monolithic database backends.',
    solution:
      'Engineered an event-driven decoupled pipeline leveraging asynchronous worker queues, distributed caching, and containerized microservices.',
    technologies: ['Go', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
    outcome: 'Demonstrated resilient horizontal autoscaling under simulated peak transaction loads in staging benchmarks.',
    image: '/images/digital-engineering.png',
    approved: true,
    isPlaceholder: true,
  },
  {
    id: 'enterprise-telemetry-bi',
    slug: 'enterprise-telemetry-bi',
    title: 'Enterprise Operational Telemetry & BI Dashboard',
    category: 'Enterprise Solutions',
    categorySlug: 'enterprise',
    description:
      'An end-to-end data consolidation and interactive visualization framework uniting disparate ERP, CRM, and transactional data streams.',
    challenge:
      'Departmental data silos prevent leadership from accessing unified operational visibility, leading to delayed decision cycles.',
    solution:
      'Architected automated ETL pipelines into a central warehouse with role-governed semantic reporting models and interactive executive dashboards.',
    technologies: ['Data Warehouse', 'SQL', 'Interactive BI', 'Python Data Pipelines', 'Role-Based Access'],
    outcome: 'Enabled instant cross-departmental KPI exploration with drill-down audit trails in prototype testing.',
    image: '/images/enterprise-systems.png',
    approved: true,
    isPlaceholder: true,
  },
];

export const portfolioCategories = [
  { id: 'all', label: 'All Categories' },
  { id: 'digital-engineering', label: 'Digital Engineering' },
  { id: 'ai-bi', label: 'AI & BI' },
  { id: 'enterprise', label: 'Enterprise Solutions' },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug) || null;

export const getApprovedProjects = () =>
  projects.filter((p) => p.approved);
