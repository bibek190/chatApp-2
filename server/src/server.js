import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// handle errors
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
