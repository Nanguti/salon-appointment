// models/stylist.mjs
import mongoose from "mongoose";

const stylistSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  services: [{ type: String, required: true }],
  availability: {
    Monday: [{ type: String }],
    Tuesday: [{ type: String }],
    Wednesday: [{ type: String }],
    Thursday: [{ type: String }],
    Friday: [{ type: String }],
    Saturday: [{ type: String }],
    Sunday: [{ type: String }],
  },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, required: true },
      comment: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
  certifications: [{ type: String }],
  experience: { type: String },
  portfolioLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Stylist = mongoose.model("Stylist", stylistSchema);

export default Stylist;
