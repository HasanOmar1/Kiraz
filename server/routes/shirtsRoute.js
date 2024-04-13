import express from "express";
import {
  addShirts,
  getAllShirts,
  getShirtsById,
  removeShirts,
} from "../controllers/shirtsController.js";

const route = express.Router();

route.get("/", getAllShirts);
route.get("/:id", getShirtsById);
route.post("/add", addShirts);
route.delete("/delete/:id", removeShirts);

export default route;
