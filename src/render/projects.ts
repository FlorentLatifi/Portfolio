import type { Project } from "../data/types";
import { esc, inline } from "./html";

function renderProject(project: Project): string {
  const points = project.highlights
    .map((point) => `<li>${inline(point)}</li>`)
    .join("");

  const source = project.source
    ? `<a class="project-link" href="${esc(project.source)}" target="_blank" rel="noopener">Source code on GitHub</a>`
    : "";

  return `
    <article class="project" id="${esc(project.slug)}">
      <header class="project-head">
        <h3 class="project-title">${esc(project.title)}</h3>
        <p class="project-meta">${esc(project.year)}<br />${esc(project.context)}</p>
      </header>
      <div class="project-body">
        <p class="project-summary">${inline(project.summary)}</p>
        <ul class="project-points">${points}</ul>
        <p class="project-stack"><span class="visually-hidden">Built with </span>${project.stack.map((item) => `<span>${esc(item)}</span>`).join(", ")}</p>
        ${source}
      </div>
    </article>`;
}

export function renderProjects(projects: Project[]): string {
  return projects.map(renderProject).join("");
}
