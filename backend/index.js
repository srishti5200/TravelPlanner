import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Route imports
import authRoutes from "./routes/auth.js";
import destinationRoutes from "./routes/destinations.js";
import bookingRoutes from "./routes/bookings.js";
import plannerRoutes from "./routes/planner.js";
import interestRoutes from "./routes/interests.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/planner", plannerRoutes);
app.use("/api/interests", interestRoutes);
app.use("/api/admin", adminRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("🌍 Travel Planner API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
