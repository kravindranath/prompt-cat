import express from "express";
import { categorizePrompt } from "./services/nlpCategorization.js";

const router = express.Router();

// POST endpoint to capture user input
router.post("/capture", (req, res) => {
  const userInput = req.body;

  if (!userInput || Object.keys(userInput).length === 0) {
    return res.status(400).json({ error: "Invalid or empty JSON input" });
  }

  console.log("User Input Received:", userInput);

  res.json({
    message: "Input received successfully",
    receivedData: userInput,
  });
});

// POST endpoint to categorize
router.get("/categorize", (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const category = categorizePrompt(prompt);
  res.json({ prompt, category });
});

export default router;
