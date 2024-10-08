import express from "express";
import { createUser, currentLoggedUser, deleteUser, getAllUsers, login, } from "../controllers/usersController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
router.get("/", getAllUsers);
router.get("/currentUser", protect, currentLoggedUser);
router.post("/create", createUser);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.delete("/delete", deleteUser);
export default router;
