import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (process.env.NODE_ENV === "development") {
      console.log(
        `MongoDB connected to host: ${conn.connection.host}, db: ${conn.connection.name}`
      );
    } else {
      console.log(`Database connected succesfully`);
    }
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
    process.exit(1); // 🔥 kill app if DB fails
  }
};

export default connectDB;
