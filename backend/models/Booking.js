import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  date: { type: Date, required: true },
  travelers: { type: Number, default: 1 },
  totalPrice: Number,
  status: { type: String, enum: ["pending","confirmed","cancelled"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
