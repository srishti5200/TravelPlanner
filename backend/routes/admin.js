import express from "express";
import User from "../models/User.js";
import Booking from "../models/Booking.js";
import Destination from "../models/Destination.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/admin/stats
router.get("/stats", protect, admin, async (req, res) => {
  const usersCount = await User.countDocuments();
  const destCount = await Destination.countDocuments();
  const bookingsCount = await Booking.countDocuments();

  // bookings per month (last 6 months)
  const bookingsTrend = await Booking.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: 180 }, // limit scanning
    { $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        count: { $sum: 1 }
    }},
    { $sort: { _id: 1 } }
  ]);

  res.json({ usersCount, destCount, bookingsCount, bookingsTrend });
});

// Admin: manage users
router.get("/users", protect, admin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

router.patch("/users/:id/role", protect, admin, async (req, res) => {
  const { role } = req.body;
  const u = await User.findById(req.params.id);
  if (!u) return res.status(404).json({ message: "Not found" });
  u.role = role;
  await u.save();
  res.json(u);
});

export default router;
