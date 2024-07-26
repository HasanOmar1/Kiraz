import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/usersModel.js";
import STATUS_CODE from "../constants/statusCodes.js";
import { capitalLetter } from "../utils/capitalLetter.js";
const generateToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET ?? "", {
        expiresIn: "7d",
    });
};
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).populate({
            path: "bag",
        });
        res.send(users);
    }
    catch (error) {
        next(error);
    }
};
export const createUser = async (req, res, next) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        if (!name || !email || !password) {
            res.status(STATUS_CODE.BAD_REQUEST);
            throw new Error("Please fill all fields");
        }
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            res.status(STATUS_CODE.CONFLICT);
            throw new Error("This email is already taken");
        }
        const nameExists = await User.findOne({ name: capitalLetter(name) });
        if (nameExists) {
            res.status(STATUS_CODE.CONFLICT);
            throw new Error("This name is already taken");
        }
        if (password.length <= 2) {
            res.status(STATUS_CODE.BAD_REQUEST);
            throw new Error("Password must be at least three characters long");
        }
        if (name.length <= 2) {
            res.status(STATUS_CODE.BAD_REQUEST);
            throw new Error("Name must be at least three characters long");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await User.create({
            name: capitalLetter(name),
            email,
            password: hashedPassword,
            isAdmin,
        });
        if (createdUser) {
            res.status(STATUS_CODE.CREATED);
            res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                isAdmin: createdUser.isAdmin,
                bag: createdUser.bag,
                password: createdUser.password,
                token: generateToken(createdUser._id, createdUser.email),
            });
        }
    }
    catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(STATUS_CODE.BAD_REQUEST);
            throw new Error("All fields must be filled");
        }
        const user = await User.findOne({ email }).populate("bag");
        if (user && (await bcrypt.compare(password, user.password))) {
            res.send({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id, user.email),
                bag: user.bag,
                isAdmin: user.isAdmin,
            });
        }
        else {
            res.status(STATUS_CODE.BAD_REQUEST);
            throw new Error("Invalid Credentials");
        }
    }
    catch (error) {
        next(error);
    }
};
export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(STATUS_CODE.NOT_FOUND);
            throw new Error("User with this ID not found");
        }
        res.send({
            message: "User has been deleted",
            user,
        });
    }
    catch (error) {
        next(error);
    }
};
