import mongoose from "mongoose";

const bagSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
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
