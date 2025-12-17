import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

export const register = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existingUser) {
    return res.status(400).json({ message: "User already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({
    message: "User registered succesfully",
    user: {
      id: newUser._id,
      name: newUser.userName,
      email: newUser.email,
    },
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.userName,
      email: user.email,
    },
  });
});
