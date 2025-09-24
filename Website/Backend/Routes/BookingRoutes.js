import express from "express";
import { createBooking, getBookings, updateBooking } from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);  
router.get("/", getBookings);      
router.put("/:id", updateBooking); 

export default router;
