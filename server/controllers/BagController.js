import STATUS_CODE from "../constants/statusCodes.js";
import BagHistory from "../models/bagHistoryModel.js";
import Bag from "../models/bagModel.js";
import User from "../models/usersModel.js";

export const getAllBag = async (req, res, next) => {
  try {
    const bag = await Bag.find({}).populate("clothes");
    res.send(bag);
  } catch (error) {
    next(error);
  }
};

export const addToBag = async (req, res, next) => {
  try {
    const { clothes } = req.body;
    if (!clothes) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error("Clothe's id is missing");
    }
    const newBag = await Bag.create({
      clothes,
      user: req.user._id,
    });

    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { bag: newBag } },
      { new: true }
    );

    await BagHistory.create({
      bags: newBag,
    });

    res.status(STATUS_CODE.CREATED);
    res.send(newBag);
  } catch (error) {
    next(error);
  }
};

export const deleteBag = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bag = await Bag.findByIdAndDelete(id);
    if (!bag) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Bag id not found");
    }
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { bag: id } },
      { new: true }
    );
    res.send({
      message: "Bag has been deleted",
      bag: bag,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAllBags = async (req, res, next) => {
  try {
    const bags = await Bag.deleteMany({});
    res.send(bags);
  } catch (error) {
    next(error);
  }
};

export const bagHistory = async (req, res, next) => {
  try {
    const bag = await Bag.find({});
    console.log(bag);
  } catch (error) {
    next(error);
  }
};

// Bag History

export const getBagHistory = async (req, res, next) => {
  try {
    const bagHistory = await BagHistory.find({}).populate("bags");
    res.send(bagHistory);
  } catch (error) {
    next(error);
  }
};
