import type { SmellResult } from "../data/types";
import { esc } from "./html";

/** Axis runs 0 → 0.8; every result sits inside it. */
const AXIS_MAX = 0.8;
const TICKS = [0, 0.2, 0.4, 0.6, 0.8];

const pos = (value: number): string =>
  `${((value / AXIS_MAX) * 100).toFixed(2)}%`;
const short = (value: number): string => value.toFixed(2);
const full = (value: number): string => value.toFixed(3);

function renderRow(result: SmellResult): string {
  const rules = pos(result.rules);
  const ml = pos(result.ml);
  return `
    <li class="dumbbell-row">
      <span class="dumbbell-label">${esc(result.smell)}</span>
      <span class="dumbbell-track">
        <span class="dumbbell-span" style="--from: ${rules}; --to: ${ml}"></span>
        <span class="dumbbell-dot dumbbell-dot--rules" style="--x: ${rules}"></span>
        <span class="dumbbell-dot dumbbell-dot--ml" style="--x: ${ml}"></span>
        <span class="dumbbell-value dumbbell-value--rules" style="--x: ${rules}">${short(result.rules)}</span>
        <span class="dumbbell-value dumbbell-value--ml" style="--x: ${ml}">${short(result.ml)}</span>
      </span>
    </li>`;
}

function summarise(results: SmellResult[]): string {
  const pairs = results
    .map((r) => `${r.smell} ${short(r.ml)} versus ${short(r.rules)}`)
    .join(", ");
  return `Machine learning scored higher than rules on all four smells: ${pairs}.`;
}

export function renderThesisChart(results: SmellResult[]): string {
  const rows = results.map(renderRow).join("");

  const ticks = TICKS.map(
    (t) => `<span class="dumbbell-tick" style="--x: ${pos(t)}">${t.toFixed(1)}</span>`,
  ).join("");

  const tableRows = results
    .map(
      (r) => `
        <tr>
          <th scope="row">${esc(r.smell)}</th>
          <td>${full(r.rules)}</td>
          <td>${full(r.ml)}</td>
          <td>${esc(r.bestModel)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div class="dumbbell-legend" aria-hidden="true">
      <span class="legend-key"><span class="key key--rules"></span>Rules and metrics</span>
      <span class="legend-key"><span class="key key--ml"></span>Machine learning</span>
    </div>
    <div class="dumbbell" role="img" aria-label="${esc(summarise(results))}">
      <ol class="dumbbell-rows" aria-hidden="true">${rows}</ol>
      <div class="dumbbell-axis" aria-hidden="true">
        <span class="dumbbell-axis-ticks">${ticks}</span>
      </div>
    </div>
    <details class="chart-table">
      <summary>Show the numbers</summary>
      <table>
        <thead>
          <tr>
            <th scope="col">Smell</th>
            <th scope="col">Rules and metrics</th>
            <th scope="col">Machine learning</th>
            <th scope="col">Best model</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </details>`;
}
