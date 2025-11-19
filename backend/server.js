import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import connectDB from "./db/connectDatabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/auth", authRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port : http://localhost:${PORT}`);
  });
});
