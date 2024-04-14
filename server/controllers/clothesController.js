import Clothes from "../models/clothesModel.js";
import Hoodies from "../models/hoodiesModel.js";
import Pants from "../models/pantsModel.js";
import Shirts from "../models/shirtsModel.js";
import Shorts from "../models/shortsModel.js";
import { getAllClothesType } from "../utils/clothingTypeController.js";

export const getAllClothes = async (req, res, next) => {
  getAllClothesType(Clothes, req, res, next);
};

export const getClothesByQuery = async (req, res, next) => {
  const { type } = req.query;
  const { color } = req.query;
  const { size } = req.query;

  try {
    if (type && color && size) {
      const clothesByColor = await Clothes.find({ type, color, size });
      res.send(clothesByColor);
    } else if (type && color) {
      const clothesByColor = await Clothes.find({ type, color });
      res.send(clothesByColor);
    } else if (type && size) {
      const clothesByColor = await Clothes.find({ type, size });
      res.send(clothesByColor);
    } else if (color && size) {
      const clothesByColor = await Clothes.find({ color, size });
      res.send(clothesByColor);
    } else if (type) {
      const clothesByColor = await Clothes.find({ type });
      res.send(clothesByColor);
    } else if (color) {
      const clothesByColor = await Clothes.find({ color });
      res.send(clothesByColor);
    } else if (size) {
      const clothesByColor = await Clothes.find({ size });
      res.send(clothesByColor);
    }

    // if (type === "hoodies") {
    //   const hoodiesByColor = await Hoodies.find({ color });
    //   res.send(hoodiesByColor);
    // }

    // if (type === "pants") {
    //   const pantsByColor = await Pants.find({ color });
    //   res.send(pantsByColor);
    // }
    // if (type === "shirts") {
    //   const shirtsByColor = await Shirts.find({ color });
    //   res.send(shirtsByColor);
    // }
    // if (type === "shorts") {
    //   const shortsByColor = await Shorts.find({ color });
    //   res.send(shortsByColor);
    // }
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
