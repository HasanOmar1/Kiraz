import express from "express";
import {
  deleteAllBagHistory,
  getAllBag,
} from "../controllers/BagController.js";
// import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBag);
router.delete("/delete-all", deleteAllBagHistory);
// router.get("/history", protect, getBagHistory);
// router.post("/add", protect, addToBag);
// router.delete("/delete/:id", protect, deleteBag);
// router.delete("/checkout", protect, checkout);

export default router;
