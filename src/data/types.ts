export interface Project {
  index: string;
  dateRange: string;
  title: string;
  /** One-line outcome for recruiters */
  summary: string;
  description: string;
  tech: string[];
  sourceUrl: string;
  demoUrl?: string;
  featured?: boolean;
  /** Short monogram shown when no image */
  monogram?: string;
  /** Role label e.g. "Solo · Full-stack" */
  role?: string;
  /** Optional preview image path under public/ */
  imageUrl?: string;
}

export interface TimelineEntry {
  dateRange: string;
  title: string;
  description: string;
  kind?: "education" | "project" | "milestone";
}

export type SkillLevel = "core" | "solid" | "familiar";

export interface SkillItem {
  name: string;
  level?: SkillLevel;
}

export interface SkillGroup {
  heading: string;
  items: SkillItem[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}
