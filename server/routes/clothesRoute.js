import express from "express";
import {
  getAllClothes,
  getAllClothesById,
  getLatestAddedClothes,
  removeAllClothes,
} from "../controllers/clothesController.js";

const router = express.Router();

router.get("/", getAllClothes);
router.get("/latest", getLatestAddedClothes);
router.get("/:id", getAllClothesById);
router.delete("/delete-all", removeAllClothes);

export default router;
