import express from "express";
import {
  addPants,
  getAllPants,
  getPantsById,
  removePants,
} from "../controllers/pantsController.js";

const router = express.Router();

router.get("/", getAllPants);
router.get("/:id", getPantsById);
router.post("/add", addPants);
router.delete("/delete/:id", removePants);

export default router;
