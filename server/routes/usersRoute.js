import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  login,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/create", createUser);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.delete("/delete", deleteUser);

export default router;
