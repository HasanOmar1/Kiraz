import express from "express";
import {
  addShirts,
  getAllShirts,
  getShirtsById,
  removeShirts,
} from "../controllers/shirtsController.js";

const router = express.Router();

router.get("/", getAllShirts);
router.get("/:id", getShirtsById);
router.post("/add", addShirts);
router.delete("/delete/:id", removeShirts);

export default router;
