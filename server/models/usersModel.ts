import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      minlength: [3, "Please provide at least three characters"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [3, "Please provide at least three characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BagItems",
      },
    ],
  },
  {
    toJSON: {
      transform(_, ret) {
        delete ret.__v;
      },
    },
  }
);

const User = mongoose.model("Users", usersSchema);
export default User;
