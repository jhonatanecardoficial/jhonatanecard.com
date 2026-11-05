export type Locale = "pt" | "en";
export type Theme = "dark" | "light";

export interface NavItem {
  id: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  architectureHighlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  proprietary?: boolean;
  proprietaryLabel?: string;
  accentFrom: string;
  accentTo: string;
  monogram: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  highlightBadge?: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status: string;
  category: "postgrad" | "cert";
}

export interface ServiceItem {
  id: string;
  icon: "code" | "cpu" | "layers" | "server";
  title: string;
  description: string;
  tags: [string, string];
  deliverables: string[];
}

export interface StackCategory {
  id: string;
  name: string;
  items: { name: string; level: string }[];
}
