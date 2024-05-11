import express from "express";
import {
  addHoodie,
  getAllHoodies,
  getHoodieById,
  removeHoodie,
  updateHoodies,
} from "../controllers/hoodiesController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllHoodies);
router.get("/:id", getHoodieById);
router.post("/add", addHoodie);
router.put("/update/:id", protect, updateHoodies);
router.delete("/delete/:id", removeHoodie);

export default router;
