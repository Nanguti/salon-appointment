import mongoose from "mongoose";

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
});

const Salon = mongoose.model("Salon", salonSchema);

export default Salon;
