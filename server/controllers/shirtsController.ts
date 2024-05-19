import Shirts from "../models/shirtsModel.js";
import {
  getAllClothesType,
  getClothesTypeById,
  addClothesType,
  removeClothingById,
  updateClothing,
} from "../utils/clothingTypeController.js";
import { NextFunction, Request, Response } from "express";

export const getAllShirts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getAllClothesType(Shirts, req, res, next);
};

export const getShirtsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getClothesTypeById(Shirts, req, res, next);
};

export const addShirts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  addClothesType(Shirts, req, res, next);
};

export const removeShirts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  removeClothingById(Shirts, req, res, next);
};

export const updateShirts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  updateClothing(Shirts, req, res, next);
};
