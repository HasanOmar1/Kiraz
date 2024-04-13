import Clothes from "../models/clothesModel.js";
import { getAllClothesType } from "../utils/clothingTypeController.js";

export const getAllClothes = async (req, res, next) => {
  getAllClothesType(Clothes, req, res, next);
};

export const removeAllClothes = async (req, res, next) => {
  try {
    const clothes = await Clothes.deleteMany({});
    res.send(clothes);
  } catch (error) {
    next(error);
  }
};
