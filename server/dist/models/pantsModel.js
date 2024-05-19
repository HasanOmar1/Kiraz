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
    type: {
        type: String,
        default: "pants",
    },
}, {
    toJSON: {
        transform(_, ret) {
            delete ret.__v;
        },
    },
});
const Pants = mongoose.model("Pants", pantsSchema);
export default Pants;
