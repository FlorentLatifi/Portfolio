export interface Project {
  /** Used as the element id, so a project can be linked to directly */
  slug: string;
  title: string;
  year: string;
  /** Who built it, e.g. "Solo project" or "Team of five, top contributor" */
  context: string;
  /** One sentence: what the product does, in user terms */
  summary: string;
  /** What I built and why it's interesting. Wrap code in `backticks`. */
  highlights: string[];
  stack: string[];
  /** Omitted when the code isn't public */
  source?: string;
}

/** Thesis evaluation: Matthews correlation coefficient against expert labels */
export interface SmellResult {
  smell: string;
  rules: number;
  ml: number;
  bestModel: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
