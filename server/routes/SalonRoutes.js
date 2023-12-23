import express from "express";
import * as SalonController from "../controllers/SalonController.js";

const router = express.Router();

router.get("/salons", SalonController.getAllSalons);

export default router;
