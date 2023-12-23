import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import SalonRoutes from "./routes/SalonRoutes.js";
import StylistRoutes from "./routes/StylistRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import AppointmentRoutes from "./routes/AppointmentRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI);

app.use("/api", SalonRoutes);
app.use("/api", StylistRoutes);
app.use("/api", UserRoutes);
app.use("/api", AppointmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
