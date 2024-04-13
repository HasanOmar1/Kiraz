import mongoose from "mongoose";

const hoodiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  color: {
    type: String,
    required: [true, "Enter a color"],
  },
  size: {
    type: Number,
    required: [true, "Enter a size"],
  },
  price: {
    type: Number,
    required: [true, "Enter a price"],
  },
});

const Hoodies = mongoose.model("Hoodies", hoodiesSchema);

export default Hoodies;
