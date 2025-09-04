import express from "express";
import Booking from "../models/Booking.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/bookings  (create booking)
router.post("/", protect, async (req, res) => {
  const { destination, date, travelers, totalPrice } = req.body;
  const booking = await Booking.create({
    user: req.user._id,
    destination,
    date,
    travelers,
    totalPrice
  });
  res.status(201).json(booking);
});

// GET /api/bookings  (user's bookings)
router.get("/", protect, async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const total = await Booking.countDocuments({ user: req.user._id });
  const bookings = await Booking.find({ user: req.user._id })
    .populate("destination")
    .sort("-createdAt")
    .skip(Number(skip))
    .limit(Number(limit));
  res.json({ data: bookings, total, page: Number(page), pages: Math.ceil(total / limit) });
});

// PATCH /api/bookings/:id/cancel
router.patch("/:id/cancel", protect, async (req, res) => {
  const b = await Booking.findOne({ _id: req.params.id, user: req.user._id });
  if (!b) return res.status(404).json({ message: "Not found" });
  b.status = "cancelled";
  await b.save();
  res.json(b);
});

// Admin: view all bookings (with pagination)
router.get("/admin/all", protect, admin, async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const total = await Booking.countDocuments();
  const bookings = await Booking.find()
    .populate("user destination")
    .sort("-createdAt")
    .skip(Number(skip))
    .limit(Number(limit));
  res.json({ data: bookings, total, page: Number(page), pages: Math.ceil(total / limit) });
});

// Admin: update booking status
router.patch("/admin/:id", protect, admin, async (req, res) => {
  const { status } = req.body;
  const b = await Booking.findById(req.params.id);
  if (!b) return res.status(404).json({ message: "Not found" });
  b.status = status || b.status;
  await b.save();
  res.json(b);
});

export default router;
