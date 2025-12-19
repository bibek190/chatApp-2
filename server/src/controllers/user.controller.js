import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import { Error } from "mongoose";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const register = asyncHandler(async (req, res) => {
  const { userName, email, password, gender, profilePicture } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const existingUser = await User.findOne({
    userName,
  });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const boyProfilePics =
    "https://avatar.iran.liara.run/public/boy?username=boy";
  const girlProfilePics =
    "https://avatar.iran.liara.run/public/girl?username= girl ";

  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
    gender,
    profilePicture: gender === "male" ? boyProfilePics : girlProfilePics,
  });

  await newUser.save();
  // JWT
  await generateTokenAndSetCookie(newUser._id, res);

  res.status(201).json({
    message: "User registered succesfully",
    user: {
      id: newUser._id,
      name: newUser.userName,
      email: newUser.email,
      gender: newUser.gender,
      profilePicture: newUser.profilePicture,
    },
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  generateTokenAndSetCookie(user._id, res);
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.userName,
      email: user.email,
    },
  });
});
