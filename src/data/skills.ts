import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Back end",
    items: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Front end",
    items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Data",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "scikit-learn",
    ],
  },
  {
    label: "Testing and delivery",
    items: [
      "xUnit",
      "pytest",
      "JUnit",
      "Testcontainers",
      "Playwright",
      "Docker",
      "GitHub Actions",
      "Git",
    ],
  },
  {
    label: "Design",
    items: [
      "Clean and Onion architecture",
      "Domain-driven design",
      "CQRS",
      "Design patterns",
    ],
  },
];
