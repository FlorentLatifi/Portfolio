export function initScrollReveal(): void {
  const revealTargets = document.querySelectorAll<HTMLElement>(
    ".about-grid, .timeline-item, .project-card, .skill-group, .contact-card, .core-stack, .stats-row, .build-note, .course-list, .section-eyebrow, .section-title",
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach((el) => observer.observe(el));
}

export function initNavScrollEffect(): void {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const onScroll = (): void => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 40);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Highlight nav link for the section currently in view */
export function initActiveSectionNav(): void {
  const sectionIds = ["about", "journey", "projects", "skills", "contact"];
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']"),
  );

  if (!links.length) return;

const setActive = (id: string | null): void => {
    links.forEach((a) => {
      const match = id !== null && a.getAttribute("href") === `#${id}`;
      a.classList.toggle("is-active", match);
      if (match) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target.id) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75],
    },
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Clear active state near top of page
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY < 120) setActive(null);
    },
    { passive: true },
  );
}

/** Mobile hamburger menu */
export function initMobileNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const links = document.querySelector<HTMLElement>(".nav-links");
  if (!toggle || !links) return;

  const close = (): void => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  };

  const open = (): void => {
    links.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", () => {
    if (links.classList.contains("is-open")) close();
    else open();
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => close());
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 760) close();
    },
    { passive: true },
  );
}
