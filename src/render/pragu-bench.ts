import type { BenchResult } from "../data/types";
import { esc } from "./html";

const score = (value: number): string => value.toFixed(2);

function renderRow(result: BenchResult): string {
  return `
            <tr>
              <th scope="row">${esc(result.checks)}<code>${esc(result.rule)}</code></th>
              <td>${score(result.precision)}</td>
              <td>${score(result.recall)}</td>
              <td>${esc(result.wcag)}</td>
              <td>${result.severity === "error" ? "Error" : "Warning"}</td>
            </tr>`;
}

/**
 * Pragu Bench as a captioned table. Precision and recall come first so they stay
 * in view on a phone; the rest scrolls, so the region takes keyboard focus.
 */
export function renderBench(results: BenchResult[], date: string): string {
  return `
    <figure class="bench">
      <figcaption>
        <span class="figure-title" id="bench-title">Pragu Bench, ${esc(date)}</span>
        <span class="figure-note">
          Precision: how often a reported barrier is real. Recall: how many of the
          labelled barriers Pragu finds. Six labelled screens from the React Native
          and Jetpack Compose test apps, so these are early signals, not final figures.
        </span>
      </figcaption>
      <div class="table-scroll" role="region" aria-labelledby="bench-title" tabindex="0">
        <table class="data-table">
          <thead>
            <tr>
              <th scope="col">What the rule checks</th>
              <th scope="col">Precision</th>
              <th scope="col">Recall</th>
              <th scope="col">WCAG</th>
              <th scope="col">Severity</th>
            </tr>
          </thead>
          <tbody>${results.map(renderRow).join("")}</tbody>
        </table>
      </div>
    </figure>`;
}
