import mongoose from "mongoose";

const hoodiesSchema = new mongoose.Schema(
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
    img: {
      type: String,
      required: [true, "Enter an img"],
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

const Hoodies = mongoose.model("Hoodies", hoodiesSchema);

export default Hoodies;
