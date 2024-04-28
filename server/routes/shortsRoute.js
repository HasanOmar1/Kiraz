import express from "express";
import {
  addShorts,
  getAllShorts,
  getShortsById,
  removeShorts,
} from "../controllers/shortsController.js";

const router = express.Router();

router.get("/", getAllShorts);
router.get("/:id", getShortsById);
router.post("/add", addShorts);
router.delete("/delete/:id", removeShorts);

export default router;
