import express from "express";
import {
  addPants,
  getAllPants,
  getPantsById,
  removePants,
  updatePants,
} from "../controllers/pantsController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPants);
router.get("/:id", getPantsById);
router.post("/add", addPants);
router.put("/update/:id", protect, updatePants);
router.delete("/delete/:id", removePants);

export default router;
