import express from "express";
import {
  addToBag,
  deleteAllBags,
  deleteBag,
  getAllBag,
} from "../controllers/BagController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBag);
router.post("/add", protect, addToBag);
router.delete("/delete/:id", protect, deleteBag);
router.delete("/delete-all", deleteAllBags);

export default router;
