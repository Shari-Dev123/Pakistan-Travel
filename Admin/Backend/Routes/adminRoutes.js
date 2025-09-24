import express from "express";
import Booking from "../Models/Booking.js";

const router = express.Router();

router.get("/bookings" ,async (req, res)=>{
    try {
       const bookings = await Booking.find();
       res.json(bookings);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


router.post("/send-ticket/:id", async(req, res)=>{
    const{ tiketUrl } = req.body
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            {status: "ticketSent", tiketUrl},
            {new: true}
        )
        res.json(booking)
    } catch (error) {
        res.status(500).json({message: err.message})
    }
})


export default router;