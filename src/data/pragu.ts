import type { BenchResult } from "./types";

/** When the numbers below were copied from Pragu's docs/STATUS.md */
export const benchDate = "28 October 2026";

/** Pragu Bench: 6 labelled screens from the React Native and Jetpack Compose test apps */
export const benchResults: BenchResult[] = [
  {
    rule: "name/interactive-missing",
    checks: "Controls with no accessible name",
    wcag: "4.1.2",
    severity: "error",
    precision: 1,
    recall: 1,
  },
  {
    rule: "name/image-missing",
    checks: "Images with no text alternative",
    wcag: "1.1.1",
    severity: "error",
    precision: 1,
    recall: 1,
  },
  {
    rule: "input/missing-label",
    checks: "Text fields with no label",
    wcag: "1.3.1, 4.1.2",
    severity: "error",
    precision: 1,
    recall: 1,
  },
  {
    rule: "state/not-exposed",
    checks: "Checkboxes and switches that hide their state",
    wcag: "4.1.2",
    severity: "error",
    precision: 1,
    recall: 0.5,
  },
  {
    rule: "focus/unreachable",
    checks: "Controls hidden from assistive technology",
    wcag: "2.1.1, 4.1.2",
    severity: "error",
    precision: 1,
    recall: 0.5,
  },
  {
    rule: "contrast/text",
    checks: "Text contrast, measured from the screenshot",
    wcag: "1.4.3",
    severity: "error",
    precision: 1,
    recall: 1,
  },
  {
    rule: "target/size",
    checks: "Touch targets smaller than 24 dp",
    wcag: "2.5.8",
    severity: "warning",
    precision: 0.75,
    recall: 0.5,
  },
];
