// Careers data — no real vacancies until company approves and supplies them

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
  approved: boolean;
}

// Empty — no vacancies to publish at launch
// Add real approved vacancies here when available
export const jobs: JobPosting[] = [];

export const getApprovedJobs = () => jobs.filter((j) => j.approved);
