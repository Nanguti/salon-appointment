import express from "express";
import * as UserController from "../controllers/UserController.js";

const router = express.Router();
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUserById);
router.delete("/users/:id", UserController.deleteUserById);

export default router;
