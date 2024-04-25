import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import STATUS_CODE from "../constants/statusCodes.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log("Token Verification error: " + error);
      res.status(STATUS_CODE.FORBIDDEN);
      res.send("You must be logged in to do this action");
    }
  }

  if (!token) {
    res.status(STATUS_CODE.FORBIDDEN);
    throw new Error("You must be logged in to do this action");
  }
});

export default protect;
