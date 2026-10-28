import type { SmellResult } from "./types";

/**
 * Results from the thesis README (JavaSmell v1.2.0): 4,534 MLCQ samples from
 * 512 Java repositories, train/test split grouped by repository.
 */
export const thesisResults: SmellResult[] = [
  { smell: "Long Method", rules: 0.58, ml: 0.724, bestModel: "Random forest" },
  {
    smell: "Feature Envy",
    rules: 0.271,
    ml: 0.696,
    bestModel: "Gradient boosting",
  },
  { smell: "Data Class", rules: 0.275, ml: 0.498, bestModel: "Random forest" },
  { smell: "Blob", rules: 0.232, ml: 0.488, bestModel: "Gradient boosting" },
];
