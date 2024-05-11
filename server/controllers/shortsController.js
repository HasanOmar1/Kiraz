import Shorts from "../models/shortsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";

export const getAllShorts = async (req, res, next) => {
  getAllClothesType(Shorts, req, res, next);
};

export const getShortsById = async (req, res, next) => {
  getClothesTypeById(Shorts, req, res, next);
};

export const addShorts = async (req, res, next) => {
  addClothesType(Shorts, req, res, next);
};

export const removeShorts = async (req, res, next) => {
  removeClothingById(Shorts, req, res, next);
};

export const updateShorts = async (req, res, next) => {
  updateClothing(Shorts, req, res, next);
};
