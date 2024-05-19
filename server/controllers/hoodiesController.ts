import Hoodies from "../models/hoodiesModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";
import { NextFunction, Request, Response } from "express";

export const getAllHoodies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getAllClothesType(Hoodies, req, res, next);
};

export const getHoodieById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getClothesTypeById(Hoodies, req, res, next);
};

export const addHoodie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  addClothesType(Hoodies, req, res, next);
};

export const removeHoodie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  removeClothingById(Hoodies, req, res, next);
};

export const updateHoodies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  updateClothing(Hoodies, req, res, next);
};
