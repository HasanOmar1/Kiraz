import Shorts from "../models/shortsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";
import { NextFunction, Request, Response } from "express";

export const getAllShorts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getAllClothesType(Shorts, req, res, next);
};

export const getShortsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getClothesTypeById(Shorts, req, res, next);
};

export const addShorts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  addClothesType(Shorts, req, res, next);
};

export const removeShorts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  removeClothingById(Shorts, req, res, next);
};

export const updateShorts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  updateClothing(Shorts, req, res, next);
};
