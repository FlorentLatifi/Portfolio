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

initCopyButtons();
