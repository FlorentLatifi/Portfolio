import type { SmellResult } from "./types";

/**
 * Results from the thesis README: 4,534 MLCQ samples from 512 Java
 * repositories, train/test split grouped by repository.
 */
export const thesisResults: SmellResult[] = [
  { smell: "Long Method", rules: 0.58, ml: 0.713, bestModel: "Random forest" },
  {
    smell: "Feature Envy",
    rules: 0.271,
    ml: 0.669,
    bestModel: "Gradient boosting",
  },
  { smell: "Data Class", rules: 0.275, ml: 0.5, bestModel: "Gradient boosting" },
  { smell: "Blob", rules: 0.232, ml: 0.488, bestModel: "Gradient boosting" },
];
