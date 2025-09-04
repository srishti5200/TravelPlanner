import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  description: String,
  image: String,                // URL or /uploads/...
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  interests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Interest" }],
  featured: { type: Boolean, default: false },
  nearby: [{ type: mongoose.Schema.Types.ObjectId, ref: "Destination" }], // store related destinations
  priceEstimate: Number
}, { timestamps: true });

export default mongoose.model("Destination", destinationSchema);
