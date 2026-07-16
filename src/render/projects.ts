import type { Project } from "../data/types";

function renderPreview(project: Project): string {
  const monogram = project.monogram ?? project.title.slice(0, 2).toUpperCase();
  const leadTech = project.tech[0] ?? "Project";

  if (project.imageUrl) {
    return `
      <div class="project-preview project-preview--image">
        <img src="${project.imageUrl}" alt="" loading="lazy" width="640" height="200" />
        <span class="project-preview-stack">${leadTech}</span>
      </div>
    `;
  }

  return `
    <div class="project-preview" aria-hidden="true">
      <span class="project-preview-mono">${monogram}</span>
      <span class="project-preview-stack">${leadTech}</span>
      <div class="project-preview-grid"></div>
    </div>
  `;
}

function renderProjectCard(project: Project): string {
  const featuredClass = project.featured ? " featured" : "";
  const techRow = project.tech
    .map((t) => `<span class="tech">${t}</span>`)
    .join("");

  const demoLink = project.demoUrl
    ? `<a href="${project.demoUrl}" target="_blank" rel="noopener">Live demo ↗</a>`
    : "";

  const role = project.role
    ? `<span class="project-role">${project.role}</span>`
    : "";

  return `
    <article class="project-card${featuredClass}">
      ${renderPreview(project)}
      <div class="project-body">
        <div class="project-top">
          <span class="project-index">${project.index}</span>
          <span class="project-date">${project.dateRange}</span>
        </div>
        <h3>${project.title}</h3>
        ${role}
        <p class="project-summary">${project.summary}</p>
        <p class="project-desc">${project.description}</p>
        <div class="tech-row">${techRow}</div>
        <div class="project-links">
          <a href="${project.sourceUrl}" target="_blank" rel="noopener">Source ↗</a>
          ${demoLink}
        </div>
      </div>
    </article>
  `;
}

export function renderProjects(projects: Project[]): string {
  return projects.map(renderProjectCard).join("");
}
