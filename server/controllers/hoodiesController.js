import STATUS_CODE from "../constants/statusCodes.js";
import Hoodies from "../models/hoodiesModel.js";

export const getAllHoodies = async (req, res, next) => {
  try {
    const hoodies = await Hoodies.find({});
    res.send(hoodies);
  } catch (error) {
    next(error);
  }
};

export const getHoodieById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hoodie = await Hoodies.findById(id);

    if (!hoodie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("No hoodie found with this id");
    }

    res.send(hoodie);
  } catch (error) {
    next(error);
  }
};

export const addHoodie = async (req, res, next) => {
  try {
    const { name, color, size, price, img } = req.body;

    if (!name || !color || !size || !price || !img) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error("Please fill all fields");
    }

    const newHoodie = await Hoodies.create({
      name,
      color,
      size,
      price,
      img,
    });

    res.status(STATUS_CODE.CREATED);
    res.send(newHoodie);
  } catch (error) {
    next(error);
  }
};

export const removeHoodie = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hoodie = await Hoodies.findByIdAndDelete(id);

    if (!hoodie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("No hoodie found with this ID");
    }

    res.send({
      message: "Hoodie has been deleted",
      hoodie,
    });
  } catch (error) {
    next(error);
  }
};
