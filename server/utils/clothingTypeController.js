import STATUS_CODE from "../constants/statusCodes.js";
import Clothes from "../models/clothesModel.js";

export const getAllClothesType = async (type, req, res, next) => {
  try {
    const clothes = await type.find({});
    res.send(clothes);
  } catch (error) {
    next(error);
  }
};

export const getClothesTypeById = async (type, req, res, next) => {
  const { id } = req.params;
  try {
    const clothesById = await type.findById(id);

    if (!clothesById) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error(`No clothes found with this id`);
    }

    res.send(clothesById);
  } catch (error) {
    next(error);
  }
};

export const addClothesType = async (type, req, res, next) => {
  try {
    const { name, color, size, price, greenImg, blackImg, blueImg } = req.body;

    if (!name || !color || !size || !price) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error("Please fill all fields");
    }

    const newClothes = await type.create({
      name,
      color,
      size,
      price,
      greenImg,
      blueImg,
      blackImg,
    });

    await Clothes.create({
      _id: newClothes._id,
      name,
      color,
      size,
      price,
      greenImg,
      blueImg,
      blackImg,
      type: newClothes.type,
    });

    res.status(STATUS_CODE.CREATED);
    res.send(newClothes);
  } catch (error) {
    next(error);
  }
};

export const removeClothingById = async (type, req, res, next) => {
  const { id } = req.params;
  try {
    const removedClothes = await type.findByIdAndDelete(id);
    await Clothes.findByIdAndDelete(id);

    if (!removedClothes) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error(`No Clothes found with this ID`);
    }

    res.send({
      message: `This type of clothes has been deleted`,
      removedClothes,
    });
  } catch (error) {
    next(error);
  }
};
