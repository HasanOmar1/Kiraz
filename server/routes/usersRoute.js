import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  login,
  getCurrentUser,
} from "../controllers/usersController.js";
import protect from "../middlewares/authMiddleware.js";

const route = express.Router();

route.get("/", getAllUsers);
route.get("/current-user/:id", getCurrentUser);
route.post("/create", createUser);
route.post("/login", login);
route.delete("/delete/:id", deleteUser);
route.delete("/delete", deleteUser);

export default route;
