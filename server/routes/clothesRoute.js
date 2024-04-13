import express from "express";
import {
  getAllClothes,
  removeAllClothes,
} from "../controllers/clothesController.js";

const route = express.Router();

route.get("/", getAllClothes);
route.delete("/delete-all", removeAllClothes);

export default route;
