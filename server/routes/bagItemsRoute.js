import express from "express";
import {
  addItemToBag,
  checkout,
  deleteBagItem,
  getBagItems,
  getBagItemsHistory,
} from "../controllers/BagItemsController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getBagItems);
router.post("/add", protect, addItemToBag);
router.get("/history", protect, getBagItemsHistory);
router.delete("/delete/:id", protect, deleteBagItem);
router.delete("/checkout", protect, checkout);

export default router;
