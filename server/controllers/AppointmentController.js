import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { user, stylist, service, appointmentDate } = req.body;
    const newAppointment = new Appointment({
      user,
      stylist,
      service,
      appointmentDate,
    });
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
