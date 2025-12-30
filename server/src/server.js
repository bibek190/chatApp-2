import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoute from "./router/user.route.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoute);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is starting at http://localhost:${PORT}`);
  });
});
