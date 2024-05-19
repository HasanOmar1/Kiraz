import { NextFunction, Request, Response } from "express";
import STATUS_CODE from "../constants/statusCodes.js";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    res.statusCode === STATUS_CODE.OK
      ? STATUS_CODE.INTERNAL_SERVER_ERROR
      : res.statusCode;

  res.status(statusCode);
  res.send({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    ok: false,
    data: {},
  });
};

export default errorHandler;
