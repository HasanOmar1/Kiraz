import express from "express";
import {
  addHoodie,
  getAllHoodies,
  getHoodieById,
  removeHoodie,
} from "../controllers/hoodiesController.js";

const route = express.Router();

route.get("/", getAllHoodies);
route.get("/:id", getHoodieById);
route.post("/add", addHoodie);
route.delete("/delete/:id", removeHoodie);

export default route;
