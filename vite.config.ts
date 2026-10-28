import { defineConfig, type Plugin } from "vite";
import { benchDate, benchResults } from "./src/data/pragu";
import { projects } from "./src/data/projects";
import { skills } from "./src/data/skills";
import { thesisResults } from "./src/data/thesis";
import { renderBench } from "./src/render/pragu-bench";
import { renderProjects } from "./src/render/projects";
import { renderSkills } from "./src/render/skills";
import { renderThesisFigure } from "./src/render/thesis-chart";

/**
 * Renders the data-driven sections into index.html at build time, so the
 * page ships as plain HTML: readable without JavaScript, by crawlers, and
 * by link previews.
 */
function renderSections(): Plugin {
  const sections: Record<string, string> = {
    "pragu-bench": renderBench(benchResults, benchDate),
    projects: renderProjects(projects, { javasmell: renderThesisFigure(thesisResults) }),
    skills: renderSkills(skills),
  };

  return {
    name: "render-sections",
    transformIndexHtml(html) {
      return html.replace(/<!--\s*render:([\w-]+)\s*-->/g, (_match, key: string) => {
        const section = sections[key];
        if (section === undefined) {
          throw new Error(`index.html asks for unknown section "${key}"`);
        }
        return section;
      });
    },
  };
}

export default defineConfig({
  plugins: [renderSections()],
});
