import type { Project } from "./types";

/**
 * Pragu, the featured project, is the case study in index.html; these are the
 * other three. The highlights use the same wording as the CV.
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
      "Built a pipeline that collects RSS feeds from 19 outlets in Kosovo, Albania and North Macedonia, removes duplicates in four layers and groups reports of the same event into stories with TF-IDF clustering tuned for Albanian.",
      "Added LLM tagging with Claude: schema-validated JSON, a check that drops names not in the source, and a daily cost cap.",
      "Benchmarked a year of synthetic data (365,000 articles); index and query fixes made entity queries up to 4.5× faster.",
      "Wrote 500+ tests (pytest on real PostgreSQL, Vitest, Playwright with axe), run in CI with strict typing and security scans.",
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
      "Designed a content-based ranker that combines interpretable taste features with 384-dimension vectors searched in pgvector (HNSW), then diversifies the slate, so every pick comes with a reason the user can check.",
      "Built an offline evaluation on held-out MovieLens ratings; reweighting the ranker raised hit rate@20 from 0.155 to 0.254.",
      "Implemented secure sign-in (short-lived JWTs, rotating refresh tokens in httpOnly cookies, email verification, rate limiting) and 350+ automated tests, including Playwright and axe checks.",
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
      "Trained random-forest and gradient-boosting models on 26 code metrics that beat published detection rules on 4,534 expert-labelled samples from 512 Java repositories (MCC 0.49–0.72 vs 0.23–0.58).",
      "Built AST refactorings (Guard Clauses, Extract Method, Introduce Parameter Object) offered only if they compile with `javac`.",
      "Released it as a multi-arch Docker image, a CLI that writes reviewable git patches, and a GitHub Action with SARIF output.",
      "Presented as a paper with my supervisor, Altina Salihu, at the 15th UBT Annual International Conference on Computer Science and Engineering, October 2026.",
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
    image: {
      base: "/img/projects/javasmell-dashboard",
      alt: "JavaSmell's dashboard after analysing the jsoup library: 121 classes and methods with problems, 55 of which it can fix itself, grouped by smell and severity.",
      caption: "Analysing jsoup, in the plain-language Albanian mode.",
    },
  },
];
