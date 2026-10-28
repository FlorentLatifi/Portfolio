import type { Project } from "./types";

/**
 * Pragu, the featured project, is the case study in index.html; these are the
 * other three. Two points each on purpose: visitors skim, and the CV and the
 * repositories carry the detail.
 */
export const projects: Project[] = [
  {
    slug: "gjurme",
    title: "Gjurmë",
    status: "Live",
    year: "2026",
    context: "Solo project",
    summary:
      "Groups Albanian-language news from 19 outlets into stories and shows who covered each one, by perspective, region and ownership.",
    highlights: [
      "Collects RSS feeds, removes duplicates in four layers and groups reports of the same event into stories with TF-IDF clustering tuned for Albanian.",
      "Index and query fixes made entity analytics up to 4.5× faster on a year of synthetic data; 500+ automated tests run in CI.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Claude API",
      "React",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],
    links: [
      { label: "Live site", href: "https://gjurm.vercel.app" },
      { label: "Source on GitHub", href: "https://github.com/FlorentLatifi/Gjurm-" },
    ],
    image: {
      base: "/img/projects/gjurme-dashboard",
      alt: "Gjurmë's dashboard: 1,073 articles today and 9,599 in the last 30 days from 19 outlets, a daily volume chart, and the people and organisations rising in the news.",
      caption: "The live dashboard, in Albanian, the site's default language.",
    },
  },
  {
    slug: "cinetaste",
    title: "CineTaste",
    status: "Live",
    year: "2026",
    context: "Solo project",
    summary:
      "A movie and TV recommender that learns your taste from your ratings and explains every pick in a sentence you can check.",
    highlights: [
      "Combines interpretable taste features with vector search in pgvector, so every pick comes with a reason.",
      "An offline evaluation on held-out MovieLens ratings guided the ranker: hit rate@20 rose from 0.155 to 0.254.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "React",
      "TypeScript",
      "Playwright",
      "Docker",
    ],
    links: [
      { label: "Live site", href: "https://cinetaste-rho.vercel.app" },
      { label: "Source on GitHub", href: "https://github.com/FlorentLatifi/cinetaste" },
    ],
    image: {
      base: "/img/projects/cinetaste-for-you",
      alt: "CineTaste recommending The Green Mile, with its reasons: you rated The Shawshank Redemption highly and it has the same director, Frank Darabont; and it is highly rated but not a chart-topper.",
      caption: "Every pick says why it was chosen.",
    },
  },
  {
    slug: "javasmell",
    title: "JavaSmell",
    status: "BSc thesis",
    year: "2026",
    context: "Bachelor thesis, UBT",
    summary:
      "Finds code smells in Java projects with rules and machine learning, and offers only the refactorings that still compile.",
    highlights: [
      "Machine-learning models beat published detection rules on 4,534 expert-labelled samples from 512 Java repositories.",
      "Presented at the 15th UBT Annual International Conference on Computer Science and Engineering, October 2026.",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "tree-sitter",
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/FlorentLatifi/Code-Smell-Detection-and-Refactoring-Recommendations",
      },
    ],
  },
];
