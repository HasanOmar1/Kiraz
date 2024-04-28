import STATUS_CODE from "../constants/statusCodes.js";
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

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { bag: newBag } },
      { new: true }
    ).populate({
      path: "bag",
      populate: {
        path: "clothes",
      },
    });

    res.status(STATUS_CODE.CREATED);
    res.send(updatedUser);
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
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { bag: id } },
      { new: true }
    ).populate({
      path: "bag",
      populate: {
        path: "clothes",
      },
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const checkout = async (req, res, next) => {
  try {
    const updateUser = await User.updateMany(
      { _id: req.user._id },
      {
        $unset: { bag: 1 },
      }
    );

    res.send(updateUser);
  } catch (error) {
    next(error);
  }
};

export const getBagHistory = async (req, res, next) => {
  try {
    const bagHistory = await Bag.find({ user: req.user._id }).populate(
      "clothes"
    );
    res.send(bagHistory);
  } catch (error) {
    next(error);
  }
};
