import Bag from "../models/bagModel.js";

export const getAllBag = async (req, res, next) => {
  try {
    const bag = await Bag.find({ user: req.user._id });
    res.send(bag);
  } catch (error) {
    next(error);
  }
};

export const deleteAllBagHistory = async (req, res, next) => {
  try {
    const bags = await Bag.deleteMany({});
    res.send(bags);
  } catch (error) {
    next(error);
  }
};
