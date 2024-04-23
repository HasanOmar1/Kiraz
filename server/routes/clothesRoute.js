import express from "express";
import {
  getAllClothes,
  getAllClothesById,
  removeAllClothes,
} from "../controllers/clothesController.js";

const route = express.Router();

route.get("/", getAllClothes);
route.get("/:id", getAllClothesById);
route.delete("/delete-all", removeAllClothes);

export default route;
