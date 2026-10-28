import "@fontsource-variable/archivo/wdth.css";
import "./style.css";

/** "Copy email" buttons are hidden until we know the clipboard is usable. */
function initCopyButtons(): void {
  if (!navigator.clipboard) return;

  document
    .querySelectorAll<HTMLButtonElement>("button[data-copy]")
    .forEach((button) => {
      const label = button.textContent ?? "";
      const status = document.getElementById(button.dataset.status ?? "");
      let reset: number | undefined;

      button.hidden = false;
      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copy ?? "");
          button.textContent = "Copied";
          if (status) status.textContent = "Email address copied";
        } catch {
          button.textContent = "Couldn't copy";
        }
        window.clearTimeout(reset);
        reset = window.setTimeout(() => {
          button.textContent = label;
          if (status) status.textContent = "";
        }, 2000);
      });
    });
}

type Theme = "light" | "dark";

/**
 * The toggle stores an explicit choice; without one the page follows the
 * system setting. The inline script in index.html applies a stored choice
 * before the first paint.
 */
function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>(".theme-toggle");
  if (!button) return;

  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const current = (): Theme => {
    const chosen = root.dataset.theme;
    if (chosen === "light" || chosen === "dark") return chosen;
    return systemDark.matches ? "dark" : "light";
  };
  const sync = (): void => {
    button.setAttribute("aria-pressed", String(current() === "dark"));
  };

  button.hidden = false;
  sync();
  systemDark.addEventListener("change", sync);
  button.addEventListener("click", () => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the choice lasts until the page is closed.
    }
    sync();
  });
}

initCopyButtons();
initThemeToggle();
