import jwt from "jsonwebtoken";

const genereateTokenAndSetCookie = async (userId, res) => {
  const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default genereateTokenAndSetCookie;
