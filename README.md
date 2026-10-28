# Florent Latifi, portfolio

Personal site: **[florentlatifi.vercel.app](https://florentlatifi.vercel.app)**

A single page covering Pragu, my current project, then my other projects, skills and contact details.

## How it's built

- **Vite + TypeScript**, no framework.
- **Content is data.** Projects, skills, the thesis results and Pragu's benchmark live in `src/data/` as typed objects.
- **Rendered at build time.** A small Vite plugin in `vite.config.ts` turns that data into HTML and writes it into `index.html`, so the page ships as plain HTML. It reads fine without JavaScript, and crawlers and link previews see the full content.
- **The thesis chart** (in the JavaSmell project) is plain HTML and CSS positioned from the data, with a text summary for screen readers and a table view of the numbers.
- **Light and dark themes** follow the system setting until the visitor picks one with the toggle; the choice is remembered.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

## Structure

```
index.html            page structure; <!-- render:name --> marks generated sections
vite.config.ts        build-time rendering plugin
src/data/             projects, skills, thesis results, Pragu Bench results
src/render/           data → HTML
src/style.css         all styles
src/main.ts           font + stylesheet imports, copy-email button, theme toggle
public/               CV, images (project screenshots in img/projects), favicon, robots.txt, sitemap.xml
```
