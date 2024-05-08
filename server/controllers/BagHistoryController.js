import BagHistory from "../models/bagHistoryModel.js";

export const getAllBag = async (req, res, next) => {
  try {
    const bag = await BagHistory.find({ user: req.user._id });
    res.send(bag);
  } catch (error) {
    next(error);
  }
};

export const deleteAllBagHistory = async (req, res, next) => {
  try {
    const bags = await BagHistory.deleteMany({});
    res.send(bags);
  } catch (error) {
    next(error);
  }
};
