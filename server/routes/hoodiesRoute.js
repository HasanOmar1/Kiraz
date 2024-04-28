import express from "express";
import {
  addHoodie,
  getAllHoodies,
  getHoodieById,
  removeHoodie,
} from "../controllers/hoodiesController.js";

const router = express.Router();

router.get("/", getAllHoodies);
router.get("/:id", getHoodieById);
router.post("/add", addHoodie);
router.delete("/delete/:id", removeHoodie);

export default router;
