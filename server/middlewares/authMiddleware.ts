import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import STATUS_CODE from "../constants/statusCodes.js";
import { AuthenticatedRequest } from "../utils/AuthenticatedRequest.js";

const protect = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      let token: string | undefined;

      const authHeader = req.headers.authorization || req.headers.Authorization;
      if (
        authHeader &&
        typeof authHeader === "string" &&
        authHeader.startsWith("Bearer")
      ) {
        token = authHeader.split(" ")[1];
        if (!process.env.JWT_SECRET) {
          res.status(STATUS_CODE.FORBIDDEN);
          throw new Error("JWT_SECRET is not defined");
        }

        try {
          const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
          req.user = await User.findById(decoded.id).select("-password");

          next();
        } catch (error) {
          console.error("Token Verification error: " + error);
          res
            .status(STATUS_CODE.FORBIDDEN)
            .send("You must be logged in to do this action");
        }
      }

      if (!token) {
        res.status(STATUS_CODE.FORBIDDEN);
        throw new Error("You must be logged in to do this action");
      }
    } catch (error) {
      next(error);
    }
  }
);

export default protect;
