import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter a name"],
    },
    color: {
      type: String,
      required: [true, "Enter a color"],
    },
    size: {
      type: String,
      required: [true, "Enter a size"],
    },
    price: {
      type: Number,
      required: [true, "Enter a price"],
    },
    greenImg: String,
    blackImg: String,
    blueImg: String,
    type: String,
  },
  {
    toJSON: {
      transform(_, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const Clothes = mongoose.model("Clothes", clothesSchema);

export default Clothes;
