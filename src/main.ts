import "./style.css";
import { projects } from "./data/projects";
import { timeline } from "./data/timeline";
import { skills } from "./data/skills";
import { contactLinks } from "./data/contact";
import { coursework } from "./data/coursework";
import { renderProjects } from "./render/projects";
import { renderTimeline } from "./render/timeline";
import { renderSkills } from "./render/skills";
import { renderContact } from "./render/contact";
import { renderCoursework } from "./render/coursework";
import {
  initScrollReveal,
  initNavScrollEffect,
  initActiveSectionNav,
  initMobileNav,
} from "./reveal";

function mount(selector: string, html: string): void {
  const el = document.querySelector(selector);
  if (!el) {
    console.warn(`Mount target not found: ${selector}`);
    return;
  }
  el.innerHTML = html;
}

mount(".project-grid", renderProjects(projects));
mount(".timeline", renderTimeline(timeline));
mount(".skills-grid", renderSkills(skills));
mount(".contact-grid", renderContact(contactLinks));
mount(".course-list", renderCoursework(coursework));

initMobileNav();
initNavScrollEffect();
initActiveSectionNav();
initScrollReveal();
