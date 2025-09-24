import express from "express";
import Booking from "../Models/Booking.js";

const router = express.Router();

router.post("create", async (req, res)=>{
    const {userName, userEmail, route} = req.body;
    const booking = new Booking({userName, userEmail, route})

    try {
        const saveBooking = await booking.save()
        res.status(500).json(saveBooking)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



router.get("/", async(req, res)=>{
    try {
        const bookings = await Booking.find();
        res.json(bookings)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }

})

export default router;