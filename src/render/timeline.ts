import type { TimelineEntry } from "../data/types";

function renderTimelineItem(entry: TimelineEntry): string {
  const kindClass = entry.kind ? ` timeline-item--${entry.kind}` : "";
  const kindLabel =
    entry.kind === "project"
      ? "Project"
      : entry.kind === "milestone"
        ? "Milestone"
        : entry.kind === "education"
          ? "Education"
          : "";

  const badge = kindLabel
    ? `<span class="timeline-kind">${kindLabel}</span>`
    : "";

  return `
    <div class="timeline-item${kindClass}">
      <div class="timeline-marker"></div>
      <div class="timeline-meta">
        <div class="timeline-date">${entry.dateRange}</div>
        ${badge}
      </div>
      <div class="timeline-content">
        <h3>${entry.title}</h3>
        <p>${entry.description}</p>
      </div>
    </div>
  `;
}

export function renderTimeline(entries: TimelineEntry[]): string {
  return entries.map(renderTimelineItem).join("");
}
