import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    heading: "Languages",
    items: [
      { name: "TypeScript", level: "solid" },
      { name: "JavaScript", level: "solid" },
      { name: "Java", level: "core" },
      { name: "C#", level: "core" },
    ],
  },
  {
    heading: "Frameworks",
    items: [
      { name: "ASP.NET Core", level: "core" },
      { name: "Spring Boot", level: "core" },
      { name: "Node.js", level: "solid" },
      { name: "React", level: "core" },
    ],
  },
  {
    heading: "Databases",
    items: [
      { name: "MySQL", level: "solid" },
      { name: "SQL Server", level: "core" },
      { name: "MongoDB", level: "solid" },
    ],
  },
  {
    heading: "Tools & Concepts",
    items: [
      { name: "Git", level: "core" },
      { name: "Trello", level: "familiar" },
      { name: "Clean Architecture", level: "core" },
      { name: "System Design", level: "solid" },
    ],
  },
];
