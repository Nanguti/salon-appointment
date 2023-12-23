import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  bookings: [
    {
      stylist: { type: mongoose.Schema.Types.ObjectId, ref: "Stylist" },
      service: { type: String, required: true },
      appointmentDate: { type: Date, required: true },
    },
  ],
  preferences: {
    favoriteStylists: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Stylist" },
    ],
    notificationPreferences: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
    },
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
