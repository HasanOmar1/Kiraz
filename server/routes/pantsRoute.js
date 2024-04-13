import express from "express";
import {
  addPants,
  getAllPants,
  getPantsById,
  removePants,
} from "../controllers/pantsController.js";

const route = express.Router();

route.get("/", getAllPants);
route.get("/:id", getPantsById);
route.post("/add", addPants);
route.delete("/delete/:id", removePants);

export default route;
