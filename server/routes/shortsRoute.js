import express from "express";
import {
  addShorts,
  getAllShorts,
  getShortsById,
  removeShorts,
} from "../controllers/shortsController.js";

const route = express.Router();

route.get("/", getAllShorts);
route.get("/:id", getShortsById);
route.post("/add", addShorts);
route.delete("/delete/:id", removeShorts);

export default route;
