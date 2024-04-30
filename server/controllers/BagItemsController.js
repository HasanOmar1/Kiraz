import STATUS_CODE from "../constants/statusCodes.js";
import BagItems from "../models/bagItemsModel.js";
import User from "../models/usersModel.js";

export const getBagItems = async (req, res, next) => {
  try {
    const bagItems = await BagItems.find({});
    res.send(bagItems);
  } catch (error) {
    next(error);
  }
};

export const addItemToBag = async (req, res, next) => {
  try {
    const { name, color, size, price, img, type, id } = req.body;

    if (!name || !color || !size || !price || !img || !type || !id) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error("Please fill all fields");
    }
    const newBag = await BagItems.create({
      id,
      name,
      color,
      size,
      price,
      img,
      type,
      user: req.user._id,
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { bag: newBag } },
      { new: true }
    ).populate("bag");

    res.status(STATUS_CODE.CREATED);
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteBagItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bag = await BagItems.findByIdAndDelete(id);
    if (!bag) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Bag id not found");
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { bag: id } },
      { new: true }
    ).populate("bag");
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

// export const clearBag = async (req, res, next) => {
//   try {
//     const bagItems = await BagItems.deleteMany({ user: req.user._id });
//     res.send(bagItems);
//   } catch (error) {
//     next(error);
//   }
// };

export const getBagItemsHistory = async (req, res, next) => {
  try {
    const bagHistory = await BagItems.find({ user: req.user._id });
    res.send(bagHistory);
  } catch (error) {
    next(error);
  }
};
