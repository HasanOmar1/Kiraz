import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import STATUS_CODE from "../constants/statusCodes.js";
import Clothes from "../models/clothesModel.js";

export const getAllClothesType = async (
  type: Model<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clothes = await type.find({});
    res.send(clothes);
  } catch (error) {
    next(error);
  }
};

export const getClothesTypeById = async (
  type: Model<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const addClothesType = async (
  type: Model<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

// use it only if i want to insert an array of objects [used it to insert what i scrapped]
// export const addClothesType = async (type, req:Request, res:Response, next:NextFunction) => {
//   try {
//     const clothesArray = req.body;
//     if (!Array.isArray(clothesArray) || clothesArray.length === 0) {
//       res.status(STATUS_CODE.BAD_REQUEST);
//       throw new Error("Please provide an array of clothes objects");
//     }

//     const newTypes = await type.insertMany(
//       clothesArray.map((clothes) => ({
//         name: clothes.name,
//         color: clothes.color,
//         size: clothes.size,
//         price: clothes.price,
//         greenImg: clothes.greenImg,
//         blueImg: clothes.blueImg,
//         blackImg: clothes.blackImg,
//       }))
//     );

//     // Insert documents into Clothes collection for each new type
//     const newClothes = [];
//     for (let i = 0; i < newTypes.length; i++) {
//       const newCloth = await Clothes.create({
//         _id: newTypes[i]._id,
//         name: newTypes[i].name,
//         color: newTypes[i].color,
//         size: newTypes[i].size,
//         price: newTypes[i].price,
//         greenImg: newTypes[i].greenImg,
//         blueImg: newTypes[i].blueImg,
//         blackImg: newTypes[i].blackImg,
//         type: newTypes[i].type,
//       });
//       newClothes.push(newCloth);
//     }

//     res.status(STATUS_CODE.CREATED);
//     res.send(newClothes);
//   } catch (error) {
//     next(error);
//   }
// };

export const removeClothingById = async (
  type: Model<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const updateClothing = async (
  type: Model<any>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const { name, color, size, price, greenImg, blackImg, blueImg } = req.body;

    const clothing = await type.findByIdAndUpdate(
      id,
      {
        name,
        color,
        size,
        price,
        greenImg,
        blackImg,
        blueImg,
      },
      { new: true }
    );

    await Clothes.findByIdAndUpdate(id, {
      name,
      color,
      size,
      price,
      greenImg,
      blackImg,
      blueImg,
    });

    res.send(clothing);
  } catch (error) {
    next(error);
  }
};
