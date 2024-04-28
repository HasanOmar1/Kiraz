import STATUS_CODE from "../constants/statusCodes.js";
import Clothes from "../models/clothesModel.js";
import Hoodies from "../models/hoodiesModel.js";
import Pants from "../models/pantsModel.js";
import Shirts from "../models/shirtsModel.js";
import Shorts from "../models/shortsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
} from "../utils/clothingTypeController.js";

export const getAllClothes = async (req, res, next) => {
  getAllClothesType(Clothes, req, res, next);
};

export const getAllClothesById = async (req, res, next) => {
  try {
    getClothesTypeById(Clothes, req, res, next);
  } catch (error) {
    next(error);
  }
};

export const removeAllClothes = async (req, res, next) => {
  try {
    const clothes = await Clothes.deleteMany({});
    await Hoodies.deleteMany({});
    await Pants.deleteMany({});
    await Shirts.deleteMany({});
    await Shorts.deleteMany({});
    res.send(clothes);
  } catch (error) {
    next(error);
  }
};

// not used
export const updateClothing = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { color } = req.body;
    if (!color) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error("add the new color");
    }
    const clothing = await Clothes.findByIdAndUpdate(
      id,
      {
        color,
      },
      { new: true }
    );
    res.send(clothing);
  } catch (error) {
    next(error);
  }
};
