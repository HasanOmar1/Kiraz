import express from "express";
import {
  getAllClothes,
  getClothesByColor,
  removeAllClothes,
} from "../controllers/clothesController.js";

const route = express.Router();

route.get("/", getAllClothes);
route.get("/by", getClothesByColor); // query: color
route.delete("/delete-all", removeAllClothes);

export default route;
