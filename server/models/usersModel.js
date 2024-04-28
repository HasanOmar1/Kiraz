import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
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
      minLength: [2, "Please provide at least two characters"],
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
