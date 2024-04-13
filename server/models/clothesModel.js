import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema(
  {
    hoodies: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hoodies",
    },
    pants: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pants",
    },
    shirts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shirts",
    },
    shorts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shorts",
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        delete ret.__v;
      },
    },
  }
);

const Clothes = mongoose.model("Clothes", clothesSchema);

export default Clothes;
