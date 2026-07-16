import type { ContactLink } from "../data/types";

function renderContactCard(link: ContactLink): string {
  const targetAttrs = link.external ? ' target="_blank" rel="noopener"' : "";
  return `
    <a href="${link.href}"${targetAttrs} class="contact-card">
      <span class="contact-label">${link.label}</span>
      <span class="contact-value">${link.value}</span>
    </a>
  `;
}

export function renderContact(links: ContactLink[]): string {
  return links.map(renderContactCard).join("");
}
