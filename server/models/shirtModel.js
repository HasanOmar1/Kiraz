import mongoose from "mongoose";

const shirtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter a name"],
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

const Shirt = mongoose.model("Shirt", shirtSchema);
export default Shirt;
