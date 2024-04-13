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

app.use(errorHandler);

const port = process.env.PORT || 9999;

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
  });
});
