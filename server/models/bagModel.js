import mongoose from "mongoose";

const bagSchema = new mongoose.Schema(
  {
    clothes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BagItems",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
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

const Bag = mongoose.model("Bag", bagSchema);

export default Bag;
