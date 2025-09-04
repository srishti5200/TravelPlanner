import express from "express";
import Category from "../models/Category.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const cats = await Category.find();
  res.json(cats);
});

router.post("/", protect, admin, async (req, res) => {
  const cat = await Category.create(req.body);
  res.status(201).json(cat);
});

export default router;
