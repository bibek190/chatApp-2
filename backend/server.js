import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import connectDB from "./db/connectDatabase.js";
import messageRoutes from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port : http://localhost:${PORT}`);
  });
});
