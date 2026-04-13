import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const adminApp = exp.Router();

adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  const users = await UserModel.find().select("-password");

  res.status(200).json({
    message: "Users fetched",
    payload: users,
  });
});

adminApp.patch("/users", verifyToken("ADMIN"), async (req, res) => {
  const { userId, isUserActive } = req.body;

  if (req.user.id === userId) {
    return res.status(400).json({ message: "You cannot block yourself" });
  }

  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    { isUserActive },
    { new: true }
  );

  res.status(200).json({
    message: isUserActive ? "User unblocked" : "User blocked",
    payload: updatedUser,
  });
});