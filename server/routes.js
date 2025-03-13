import express from "express";
import {
  findBestCategory,
  extractKeywords,
} from "./services/nlpCategorization.js";

const router = express.Router();

// POST endpoint to capture user input
router.post("/capture", (req, res) => {
  const data = req.body;
  const { prompt } = { ...data };

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "Invalid or empty JSON input" });
  }

  //categorize prompt
  const inputKeywords = extractKeywords(prompt);
  console.log("User Input Received:", prompt, inputKeywords);

  const category = findBestCategory(inputKeywords);

  res.json({
    status: 200,
    data: { category, inputKeywords },
  });
});

// POST endpoint to categorize
router.get("/categorize", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const category = findBestCategory(prompt);
  res.json({ prompt, category });
});

export default router;
