import Shirts from "../models/shirtsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";

export const getAllShirts = async (req, res, next) => {
  getAllClothesType(Shirts, req, res, next);
};

export const getShirtsById = async (req, res, next) => {
  getClothesTypeById(Shirts, req, res, next);
};

export const addShirts = async (req, res, next) => {
  addClothesType(Shirts, req, res, next);
};

export const removeShirts = async (req, res, next) => {
  removeClothingById(Shirts, req, res, next);
};

export const updateShirts = async (req, res, next) => {
  updateClothing(Shirts, req, res, next);
};
