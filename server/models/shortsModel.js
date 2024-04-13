import mongoose from "mongoose";

const shortsSchema = new mongoose.Schema(
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
    type: {
      type: String,
      default: "shorts",
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

const Shorts = mongoose.model("Shorts", shortsSchema);

export default Shorts;
