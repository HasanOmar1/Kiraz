import Pants from "../models/pantsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";
import { NextFunction, Request, Response } from "express";

export const getAllPants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getAllClothesType(Pants, req, res, next);
};

export const getPantsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getClothesTypeById(Pants, req, res, next);
};

export const addPants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  addClothesType(Pants, req, res, next);
};

export const removePants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  removeClothingById(Pants, req, res, next);
};

export const updatePants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  updateClothing(Pants, req, res, next);
};
