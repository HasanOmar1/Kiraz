import express from "express";
import {
  addShorts,
  getAllShorts,
  getShortsById,
  removeShorts,
  updateShorts,
} from "../controllers/shortsController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllShorts);
router.get("/:id", getShortsById);
router.post("/add", addShorts);
router.put("/update/:id", protect, updateShorts);
router.delete("/delete/:id", removeShorts);

export default router;
