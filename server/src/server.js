import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
