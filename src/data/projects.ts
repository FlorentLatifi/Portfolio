import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "healthcare",
    title: "Healthcare appointment system",
    year: "2025–2026",
    context: "Solo project",
    summary:
      "Patients book, pay for and cancel doctor appointments, doctors get a dashboard, and reminders go out by email.",
    highlights: [
      "ASP.NET Core 8 API split into domain, application, adapter and API layers, with CQRS handlers and architecture tests that fail the build when a layer depends on the wrong one.",
      "A Redis lock per doctor and time slot, so two patients can't book the same appointment at once. Domain events leave through a transactional outbox.",
      "Integration tests run against real SQL Server and Redis in Testcontainers. JWT auth, Stripe payments, a React 19 front end, and one `docker compose up` for the whole stack.",
    ],
    stack: [
      "C#",
      "ASP.NET Core 8",
      "EF Core",
      "SQL Server",
      "Redis",
      "Stripe",
      "xUnit",
      "Testcontainers",
      "React 19",
      "Docker",
    ],
    source:
      "https://github.com/FlorentLatifi/Healthcare-Appointment-Notification-System",
  },
  {
    slug: "cinetaste",
    title: "CineTaste",
    year: "2026",
    context: "Solo project",
    summary:
      "A movie and TV recommender that learns your taste from a quick swipe onboarding and explains every pick in plain language.",
    highlights: [
      "FastAPI back end with SQLAlchemy and Alembic migrations on PostgreSQL, title embeddings stored in pgvector behind an HNSW index, and Redis alongside.",
      "Ranking mixes in exploration and lesser-known titles so recommendations don't collapse into a filter bubble.",
      "Accessibility checked with axe in the end-to-end tests, rotating refresh tokens for login, and Docker Compose stacks for local, staging and production-like runs.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "React",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    source: "https://github.com/FlorentLatifi/cinetaste",
  },
  {
    slug: "flight-booking",
    title: "Flight booking system",
    year: "2025",
    context: "Solo university project",
    summary:
      "Search, reserve and pay for flights. Built to practise Onion architecture and classic design patterns on a realistic domain.",
    highlights: [
      "Domain, application, infrastructure and web layers kept separate, with business rules like `CanBeCancelled()` on the entities rather than in controllers.",
      "Strategy pattern for ticket pricing, Observer for email and SMS notifications sent in parallel with `Task.WhenAll`, and repositories over EF Core.",
    ],
    stack: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    source: "https://github.com/FlorentLatifi/FlightBookingSystem",
  },
  {
    slug: "ecokosova",
    title: "EcoKosova",
    year: "2025",
    context: "Team of five, top contributor",
    summary:
      "Waste-container monitoring for Kosovo: live fill levels, alerts for full containers, collection route planning and an operator dashboard.",
    highlights: [
      "Spring Boot REST API designed with DDD: bounded contexts for monitoring, collection and reporting, CQRS commands and queries, and domain events such as `ContainerFullEvent`.",
      "React and TypeScript dashboard over a normalised SQL Server schema, run together with Docker Compose.",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3",
      "React",
      "TypeScript",
      "SQL Server",
      "Docker",
    ],
    source: "https://github.com/FlorentLatifi/eEcoKosova",
  },
  {
    slug: "freelance-marketplace",
    title: "Freelance marketplace",
    year: "2025",
    context: "Full-stack",
    summary:
      "Clients post projects and hire, freelancers deliver through contracts and milestones, and admins moderate the platform.",
    highlights: [
      "Admin tooling for the catalogue, bulk import and export, reporting and audit logs.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];
