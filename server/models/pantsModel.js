import mongoose from "mongoose";

const pantsSchema = new mongoose.Schema({
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

const Pants = mongoose.model("Pants", pantsSchema);
export default Pants;
