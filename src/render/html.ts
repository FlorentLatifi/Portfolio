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
