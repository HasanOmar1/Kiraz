import Hoodies from "../models/hoodiesModel.js";
import { getAllClothesType, getClothesTypeById, addClothesType, removeClothingById, updateClothing, } from "../utils/clothingTypeController.js";
export const getAllHoodies = async (req, res, next) => {
    getAllClothesType(Hoodies, req, res, next);
};
export const getHoodieById = async (req, res, next) => {
    getClothesTypeById(Hoodies, req, res, next);
};
export const addHoodie = async (req, res, next) => {
    addClothesType(Hoodies, req, res, next);
};
export const removeHoodie = async (req, res, next) => {
    removeClothingById(Hoodies, req, res, next);
};
export const updateHoodies = async (req, res, next) => {
    updateClothing(Hoodies, req, res, next);
};
