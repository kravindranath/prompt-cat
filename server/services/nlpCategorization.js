import nlp from "compromise";
import { categories } from "../constants/categories.js";

function extractKeywords(prompt) {
  const doc = nlp(prompt);
  return [...doc.nouns().out("array"), ...doc.verbs().out("array")];
}

function findBestCategory(keywords) {
  let bestCategory = "general";
  let maxMatches = 0;

  for (const [category, data] of Object.entries(categories)) {
    const matchCount = data.keywords.filter((word) =>
      keywords.includes(word)
    ).length;

    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      bestCategory = category;
    }
  }

  return bestCategory;
}

export { findBestCategory };
