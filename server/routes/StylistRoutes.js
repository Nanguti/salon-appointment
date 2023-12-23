import express from "express";
import * as StylistController from "../controllers/StylistController.js";

const router = express.Router();

router.get("/stylists", StylistController.getAllStylists);
router.get("/stylists/:id", StylistController.getStylistById);
router.post("/stylists", StylistController.createStylist);
router.put("/stylists/:id", StylistController.updateStylistById);
router.delete("/stylists/:id", StylistController.deleteStylistById);

export default router;
