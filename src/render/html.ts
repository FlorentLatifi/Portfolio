const entities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape text for use in HTML content or a quoted attribute. */
export function esc(text: string): string {
  return text.replace(/[&<>"']/g, (c) => entities[c]);
}

/** Escape text, then turn `backtick` spans into <code>. */
export function inline(text: string): string {
  return esc(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

/** A link that opens in a new tab, and tells screen reader users so. */
export function external(href: string, label: string, className: string): string {
  return `<a class="${className}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}<span class="visually-hidden"> (opens in a new tab)</span></a>`;
}
