import type { SkillGroup } from "./types";

/** Only what the four projects use; same groups as the CV. */
export const skills: SkillGroup[] = [
  {
    label: "Programming languages",
    items: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Vite",
      "TanStack Query",
      "Zustand",
      "React Router",
      "Tailwind CSS",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    label: "Mobile",
    items: [
      "Android (Kotlin, Jetpack Compose, UiAutomation, adb)",
      "React Native (Expo)",
      "TalkBack",
    ],
  },
  {
    label: "Data & AI",
    items: [
      "scikit-learn",
      "NumPy",
      "pgvector",
      "recommender systems",
      "TF-IDF clustering",
      "LLM APIs (Claude)",
      "model evaluation",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Redis"],
  },
  {
    label: "Tools & DevOps",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Gradle",
      "pytest",
      "Vitest",
      "Playwright",
      "axe-core",
      "JUnit",
      "Vercel",
      "Render",
      "Neon",
    ],
  },
  {
    label: "Concepts",
    items: [
      "layered architecture",
      "CI/CD",
      "automated testing",
      "architecture decision records",
      "query optimisation",
      "accessibility (WCAG 2.2)",
    ],
  },
];
