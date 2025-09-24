import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  persons: { type: Number, required: true },
  ticketNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed"],
    default: "pending",   
  },
});

export default mongoose.model("Booking", bookingSchema);
