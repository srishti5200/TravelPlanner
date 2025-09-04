import express from "express";
import Destination from "../models/Destination.js";
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

// GET /api/destinations?search=&page=&limit=&country=&category=&interest=&sort=
router.get("/", async (req, res) => {
  const { page = 1, limit = 12, search, country, category, interest, sort } = req.query;
  const q = {};
  if (search) {
    q.$or = [
      { name: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  if (country) q.country = country;
  if (category) q.category = category;
  if (interest) q.interests = { $in: [interest] };

  const skip = (page - 1) * limit;
  const total = await Destination.countDocuments(q);
  const results = await Destination.find(q)
    .populate("category interests")
    .sort(sort || "-createdAt")
    .skip(Number(skip))
    .limit(Number(limit));

  res.json({ data: results, total, page: Number(page), pages: Math.ceil(total / limit) });
});

// GET /api/destinations/featured
router.get("/featured", async (req, res) => {
  const items = await Destination.find({ featured: true }).limit(6).populate("category interests");
  res.json(items);
});

// GET /api/destinations/:id/nearby
router.get("/:id/nearby", async (req, res) => {
  const dest = await Destination.findById(req.params.id).populate({
    path: "nearby",
    populate: ["category","interests"]
  });
  if (!dest) return res.status(404).json({ message: "Destination not found" });
  res.json(dest.nearby);
});

// GET single
router.get("/:id", async (req, res) => {
  const dest = await Destination.findById(req.params.id).populate("category interests");
  if (!dest) return res.status(404).json({ message: "Not found" });
  res.json(dest);
});

// Admin create
router.post("/", protect, admin, async (req, res) => {
  const dest = await Destination.create(req.body);
  res.status(201).json(dest);
});

// Admin update
router.put("/:id", protect, admin, async (req, res) => {
  const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Admin delete
router.delete("/:id", protect, admin, async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
