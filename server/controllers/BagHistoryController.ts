import BagHistory from "../models/bagHistoryModel.js";
import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../utils/AuthenticatedRequest.js";

export const getAllBag = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const bag = await BagHistory.find({ user: req.user._id });
    res.send(bag);
  } catch (error) {
    next(error);
  }
};

export const deleteAllBagHistory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const bags = await BagHistory.deleteMany({});
    res.send(bags);
  } catch (error) {
    next(error);
  }
};
