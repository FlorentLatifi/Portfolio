export type ProjectStatus = "Live" | "In development" | "BSc thesis";

export interface ProjectLink {
  label: string;
  href: string;
}

/** A screenshot, shipped as WebP at 800 and 1200 px wide (16:10) */
export interface ProjectImage {
  /** Path without the "-800.webp" / "-1200.webp" suffix */
  base: string;
  alt: string;
  caption: string;
}

export interface Project {
  /** Used as the element id, so a project can be linked to directly */
  slug: string;
  title: string;
  status: ProjectStatus;
  year: string;
  /** Who built it, e.g. "Solo project" or "Bachelor thesis, UBT" */
  context: string;
  /** One sentence: what the product does, in user terms */
  summary: string;
  /** What I built and why it's interesting. Wrap code in `backticks`. */
  highlights: string[];
  stack: string[];
  /** Live site first, then the source code */
  links: ProjectLink[];
  image?: ProjectImage;
}

/** Thesis evaluation: Matthews correlation coefficient against expert labels */
export interface SmellResult {
  smell: string;
  rules: number;
  ml: number;
  bestModel: string;
}

/** One Pragu rule as scored by Pragu Bench */
export interface BenchResult {
  rule: string;
  checks: string;
  wcag: string;
  severity: "error" | "warning";
  precision: number;
  recall: number;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
