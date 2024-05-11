import express from "express";
import {
  addShirts,
  getAllShirts,
  getShirtsById,
  removeShirts,
  updateShirts,
} from "../controllers/shirtsController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllShirts);
router.get("/:id", getShirtsById);
router.post("/add", addShirts);
router.put("/update/:id", protect, updateShirts);
router.delete("/delete/:id", removeShirts);

export default router;
