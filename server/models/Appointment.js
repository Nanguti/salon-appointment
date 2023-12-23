import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  stylist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stylist",
    required: true,
  },
  service: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
});

const Appointment = mongoose.model("Booking", appointmentSchema);

export default Appointment;
