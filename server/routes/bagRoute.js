import express from "express";
import {
  addToBag,
  checkout,
  deleteBag,
  getAllBag,
  getBagHistory,
} from "../controllers/BagController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBag);
router.get("/history", protect, getBagHistory);
router.post("/add", protect, addToBag);
router.delete("/delete/:id", protect, deleteBag);
router.delete("/checkout", protect, checkout);

export default router;
