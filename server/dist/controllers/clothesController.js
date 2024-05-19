import Clothes from "../models/clothesModel.js";
import Hoodies from "../models/hoodiesModel.js";
import Pants from "../models/pantsModel.js";
import Shirts from "../models/shirtsModel.js";
import Shorts from "../models/shortsModel.js";
import { getAllClothesType, getClothesTypeById, } from "../utils/clothingTypeController.js";
export const getAllClothes = async (req, res, next) => {
    getAllClothesType(Clothes, req, res, next);
};
export const getAllClothesById = async (req, res, next) => {
    try {
        getClothesTypeById(Clothes, req, res, next);
    }
    catch (error) {
        next(error);
    }
};
export const getLatestAddedClothes = async (req, res, next) => {
    try {
        const clothes = await Clothes.find({}).limit(5).sort({ createdAt: -1 });
        res.send(clothes);
    }
    catch (error) {
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
    }
    catch (error) {
        next(error);
    }
};
