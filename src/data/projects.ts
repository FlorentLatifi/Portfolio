import type { Project } from "./types";

export const projects: Project[] = [
  {
    index: "01",
    dateRange: "Mar — Sep 2025",
    title: "Freelance Marketplace",
    monogram: "FM",
    role: "Solo · Full-stack",
    summary:
      "End-to-end freelance platform: projects, contracts, milestones, and admin tooling.",
    description:
      "Clients post work and hire talent; freelancers deliver through structured contracts & milestones. Admins manage catalog, import/export, reporting, auditing, and moderation. Built solo as top contributor on a team-scoped repo.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    sourceUrl: "https://github.com/FlorentLatifi",
    featured: true,
  },
  {
    index: "02",
    dateRange: "Apr 2025 — Jul 2026",
    title: "Flight Booking System",
    monogram: "FB",
    role: "Solo · Backend / architecture",
    summary:
      "Clean Architecture flight reservation with pricing strategies and async notifications.",
    description:
      "ASP.NET Core MVC with Onion architecture — Domain, Application, Infrastructure, and Web kept separate. Strategy for dynamic ticket pricing, Observer for parallel email/SMS (Task.WhenAll), Repository over EF Core + SQL Server.",
    tech: ["C# / .NET Core", "EF Core", "SQL Server", "Onion Architecture"],
    sourceUrl: "https://github.com/FlorentLatifi/FlightBookingSystem",
  },
  {
    index: "03",
    dateRange: "Oct 2025 — Feb 2026",
    title: "EcoKosova",
    monogram: "EK",
    role: "Full-stack",
    summary:
      "Real-time waste monitoring with REST APIs and live analytics dashboards.",
    description:
      "Spring Boot APIs for data ingestion and management, React dashboards for live analytics, and a normalized relational schema designed for growth. Focused on clear API contracts and readable UI for operators.",
    tech: ["Spring Boot", "React", "SQL"],
    sourceUrl: "https://github.com/FlorentLatifi/eEcoKosova",
  },
  {
    index: "04",
    dateRange: "Nov 2025 — Mar 2026",
    title: "Healthcare Appointment System",
    monogram: "HA",
    role: "Backend services",
    summary:
      "Appointment scheduling, notifications, and patient data with modular services.",
    description:
      "ASP.NET Core services for doctor scheduling and notification handling. Modular layout with clear separation of concerns so appointment logic stays testable and easy to extend.",
    tech: ["ASP.NET Core", "C#", "SQL Server"],
    sourceUrl:
      "https://github.com/FlorentLatifi/Healthcare-Appointment-Notification-System",
  },
];
