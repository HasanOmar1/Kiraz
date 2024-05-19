import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorMiddleware.js";
import usersRoute from "./routes/usersRoute.js";
import hoodiesRoute from "./routes/hoodiesRoute.js";
import clothesRoute from "./routes/clothesRoute.js";
import pantsRoute from "./routes/pantsRoute.js";
import shirtsRoute from "./routes/shirtsRoute.js";
import shortsRoute from "./routes/shortsRoute.js";
import bagHistoryRoute from "./routes/bagHistoryRoute.js";
import bagItemsRoute from "./routes/bagItemsRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/clothes", clothesRoute);
app.use("/hoodies", hoodiesRoute);
app.use("/pants", pantsRoute);
app.use("/shirts", shirtsRoute);
app.use("/shorts", shortsRoute);
app.use("/bag", bagHistoryRoute);
app.use("/bag-items", bagItemsRoute);

app.use(errorHandler);

const port = process.env.PORT || 9999;

mongoose.connect(process.env.MONGO_URI || "").then(() => {
  app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
  });
});
