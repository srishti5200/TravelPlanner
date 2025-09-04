import express from "express";
import Destination from "../models/Destination.js";

const router = express.Router();

// POST /api/planner
// body: { category, interests: [id,...], budget, dates, travelers }
router.post("/", async (req, res) => {
  const { category, interests = [], budget } = req.body;
  const filter = {};
  if (category) filter.category = category;
  if (interests.length) filter.interests = { $in: interests };
  if (budget) filter.priceEstimate = { $lte: budget };

  // simple score: match count of interests
  const suggestions = await Destination.find(filter).limit(10).populate("category interests");
  res.json(suggestions);
});

export default router;
