import mongoose from "mongoose";
const clothesSchema = new mongoose.Schema({
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
    type: String,
}, {
    toJSON: {
        transform(_, ret) {
            delete ret.__v;
        },
    },
    timestamps: true,
});
const Clothes = mongoose.model("Clothes", clothesSchema);
export default Clothes;
