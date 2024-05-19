import mongoose from "mongoose";

const hoodiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
    },
    greenImg: {
      type: String,
      default: "",
    },
    blackImg: {
      type: String,
      default: "",
    },
    blueImg: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "hoodies",
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
