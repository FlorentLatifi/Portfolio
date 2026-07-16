export function renderCoursework(items: string[]): string {
  return items.map((item) => `<li class="course-item">${item}</li>`).join("");
}
