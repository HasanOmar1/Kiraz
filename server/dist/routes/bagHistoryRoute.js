import express from "express";
import { deleteAllBagHistory, getAllBag, } from "../controllers/BagHistoryController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
router.get("/history", protect, getAllBag);
router.delete("/delete-all", deleteAllBagHistory);
export default router;
