import type { SkillGroup } from "../data/types";
import { esc } from "./html";

export function renderSkills(groups: SkillGroup[]): string {
  return groups
    .map(
      (group) => `
      <div class="skill-row">
        <dt>${esc(group.label)}</dt>
        <dd>${group.items.map(esc).join(", ")}</dd>
      </div>`,
    )
    .join("");
}
