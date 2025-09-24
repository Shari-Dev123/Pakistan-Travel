import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    destination: String,
    date: String,
    persons: Number,
    ticketNumber: String,
    status: {
        type: String,
        enum: ["pending", "confirmed"],
        default: "pending",
    },
});

export default mongoose.model("Booking", bookingSchema);