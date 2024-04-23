import express from "express";
import {
  getAllClothes,
  getAllClothesById,
  getClothesByQuery,
  removeAllClothes,
} from "../controllers/clothesController.js";

const route = express.Router();

route.get("/", getAllClothes);
route.get("/:id", getAllClothesById);
route.get("/by", getClothesByQuery); // query: type / color / size
route.delete("/delete-all", removeAllClothes);

export default route;
