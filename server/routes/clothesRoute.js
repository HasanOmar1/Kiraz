import express from "express";
import {
  getAllClothes,
  getAllClothesById,
  removeAllClothes,
  updateClothing,
} from "../controllers/clothesController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllClothes);
router.get("/:id", getAllClothesById);
router.put("/update/:id", protect, updateClothing);
router.delete("/delete-all", removeAllClothes);

export default router;
