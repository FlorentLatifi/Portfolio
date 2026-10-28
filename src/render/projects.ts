import type { Project, ProjectImage, ProjectStatus } from "../data/types";
import { esc, external, inline } from "./html";

const STATUS_CLASS: Record<ProjectStatus, string> = {
  Live: "status--live",
  "In development": "status--dev",
  "BSc thesis": "status--thesis",
};

function renderStatus(status: ProjectStatus): string {
  return `<span class="status ${STATUS_CLASS[status]}">${esc(status)}</span>`;
}

function renderImage(image: ProjectImage): string {
  return `
        <figure class="project-shot">
          <img
            src="${esc(image.base)}-1200.webp"
            srcset="${esc(image.base)}-800.webp 800w, ${esc(image.base)}-1200.webp 1200w"
            sizes="(min-width: 800px) 680px, 92vw"
            width="1200"
            height="750"
            alt="${esc(image.alt)}"
            loading="lazy"
            decoding="async"
          />
          <figcaption>${esc(image.caption)}</figcaption>
        </figure>`;
}

function renderProject(project: Project, extra = ""): string {
  const points = project.highlights
    .map((point) => `<li>${inline(point)}</li>`)
    .join("");

  const links = project.links
    .map((link) => external(link.href, link.label, "project-link"))
    .join("");

  const tags = project.stack.map((item) => `<li>${esc(item)}</li>`).join("");

  return `
    <article class="project" id="${esc(project.slug)}" aria-labelledby="${esc(project.slug)}-title">
      <header class="project-head">
        <h3 class="project-title" id="${esc(project.slug)}-title">${esc(project.title)}</h3>
        <p class="project-meta">${renderStatus(project.status)} ${esc(project.year)} · ${esc(project.context)}</p>
        <p class="project-links">${links}</p>
      </header>
      <div class="project-body">
        <p class="project-summary">${inline(project.summary)}</p>
        ${project.image ? renderImage(project.image) : extra}
        <ul class="project-points">${points}</ul>
        <ul class="tags" role="list" aria-label="${esc(project.title)} is built with">${tags}</ul>
      </div>
    </article>`;
}

/** `extras` fills the visual slot of a project with no screenshot, such as JavaSmell's chart. */
export function renderProjects(
  projects: Project[],
  extras: Record<string, string> = {},
): string {
  return projects.map((project) => renderProject(project, extras[project.slug])).join("");
}
