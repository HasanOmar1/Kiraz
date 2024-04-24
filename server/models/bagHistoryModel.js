import mongoose from "mongoose";

const bagHistorySchema = new mongoose.Schema({
  bags: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bag",
  },
});

const BagHistory = mongoose.model("BagHistory", bagHistorySchema);
export default BagHistory;
