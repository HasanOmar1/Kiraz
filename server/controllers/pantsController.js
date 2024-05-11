import Pants from "../models/pantsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";

export const getAllPants = async (req, res, next) => {
  getAllClothesType(Pants, req, res, next);
};

export const getPantsById = async (req, res, next) => {
  getClothesTypeById(Pants, req, res, next);
};

export const addPants = async (req, res, next) => {
  addClothesType(Pants, req, res, next);
};

export const removePants = async (req, res, next) => {
  removeClothingById(Pants, req, res, next);
};

export const updatePants = async (req, res, next) => {
  updateClothing(Pants, req, res, next);
};
