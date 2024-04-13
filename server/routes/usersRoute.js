import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  login,
} from "../controllers/usersController.js";

const route = express.Router();

route.get("/", getAllUsers);
route.post("/create", createUser);
route.post("/login", login);
route.delete("/delete/:id", deleteUser);
route.delete("/delete", deleteUser);

export default route;
