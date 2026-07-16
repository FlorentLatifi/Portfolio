import type { SkillGroup, SkillItem } from "../data/types";

function renderSkillItem(item: SkillItem): string {
  const level = item.level ?? "solid";
  const levelLabel =
    level === "core" ? "Core" : level === "solid" ? "Solid" : "Familiar";
  return `<span class="tech tech-${level}" title="${levelLabel}">${item.name}</span>`;
}

function renderSkillGroup(group: SkillGroup): string {
  const items = group.items.map(renderSkillItem).join("");
  return `
    <div class="skill-group">
      <h3>${group.heading}</h3>
      <div class="tech-row">${items}</div>
    </div>
  `;
}

export function renderSkills(groups: SkillGroup[]): string {
  return groups.map(renderSkillGroup).join("");
}
