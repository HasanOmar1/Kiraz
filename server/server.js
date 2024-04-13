// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import errorHandler from "./middlewares/errorMiddleware.js";
// import usersRoute from "./routes/usersRoute.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/users", usersRoute);

// app.use(errorHandler);

// const port = process.env.PORT || 9999;

// mongoose.connect(process.env.MONGO_URI).then(() => {
//   app.listen(port, () => {
//     console.log(`Server Listening on port ${port}`);
//   });
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import errorHandler from "./middlewares/errorMiddleware.js";
import usersRoute from "./routes/usersRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);

app.use(errorHandler);

const port = process.env.PORT || 9999;
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`);
  });
});
