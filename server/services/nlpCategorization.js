import nlp from "compromise";
import stopword from "stopword";
import { removeStopwords } from "stopword";
import { categories } from "../constants/categories.js";
const BEST_CATEGORY = "general";

function extractKeywords(prompt) {
  const doc = nlp(prompt);

  // Extract lowercase nouns and verbs
  let nouns = doc
    .terms()
    .out("array")
    .map((word) => word.toLowerCase());

  // Merge and filter stop words
  let keywords = [...nouns];

  // Remove stop words (like "am", "not", "a", etc.)
  words = removeStopwords(keywords);
  return words;
}

function findBestCategory(keywords) {
  let bestCategory = categories[BEST_CATEGORY];
  let maxMatches = 0;
  let bestEntry = { category: BEST_CATEGORY, entry: bestCategory[0] };

  for (const [category, entries] of Object.entries(categories)) {
    for (const entry of entries) {
      const matchCount = entry.keywords.filter((word) =>
        keywords.includes(word)
      ).length;

      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestCategory = category;
        bestEntry = { category, entry };
      }
    }
  }

  return bestCategory ? bestEntry : null;
}

export { findBestCategory, extractKeywords };
