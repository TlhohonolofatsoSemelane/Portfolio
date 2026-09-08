export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
  dot: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconType: 'database' | 'book-open' | 'smartphone' | 'network';
  iconColor: string;
  iconBg: string;
  github: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  detail: string;
  color: string;
  badgeColor: string;
}

export interface ContactItem {
  iconType: 'mail' | 'phone' | 'linkedin' | 'github';
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}
