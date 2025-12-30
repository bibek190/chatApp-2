import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateTokenAndCookie.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    throw new Error("All fields are required");
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("User Already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const avatar = "https://api.dicebear.com/7.x/adventurer/svg?seed=dfdf";

  const newUser = await User.create({
    username,
    fullName,
    password: hashedPassword,
    gender,
    avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${username}`,
  });
  generateTokenAndSetCookie({
    userId: newUser._id,
    res,
  });

  res.status(201).json({
    id: newUser._id,
    username: newUser.username,
    fullName: newUser.fullName,
    gender: newUser.gender,
    avatar: newUser.avatar,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new Error("All fields are required");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Please enter valid username or password");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error("Please enter valid username or password");
  }

  generateTokenAndSetCookie({ userId: user._id, res });

  res.status(200).json({
    id: user._id,
    username: user.username,
    fullName: user.fullName,
    gender: user.gender,
    avatar: user.avatar,
  });
});
