import express from "express";
import Interest from "../models/Interests.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const list = await Interest.find();
  res.json(list);
});

router.post("/", protect, admin, async (req, res) => {
  const it = await Interest.create(req.body);
  res.status(201).json(it);
});

export default router;
