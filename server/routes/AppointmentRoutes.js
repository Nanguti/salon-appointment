// routes/bookingRoutes.js
import express from "express";
import { createAppointment } from "../controllers/AppointmentController.js";

const router = express.Router();

// Route to create a new booking
router.post("/appointments", createAppointment);

export default router;
