import nlp from "compromise";
import { categories } from "../constants/categories.js";

function extractKeywords(prompt) {
  const doc = nlp(prompt);
  return [...doc.nouns().out("array"), ...doc.verbs().out("array")];
}

function categorizePrompt(prompt) {
  const keywords = extractKeywords(prompt);
  let bestCategory = "general";
  let maxMatches = 0;

  for (const [category, words] of Object.entries(categories)) {
    const matchCount = words.filter((word) => keywords.includes(word)).length;

    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      bestCategory = category;
    }
  }

  return bestCategory;
}

export { categorizePrompt };
