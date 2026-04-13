import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { UserModel } from "../models/UserModel.js";

const { verify } = jwt;
config();

export const verifyToken = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      const token = req.cookies?.token;

      if (!token) {
        return res.status(401).json({ message: "Please login first" });
      }

      let decodedToken = verify(token, process.env.SECRET_KEY);

      const user = await UserModel.findById(decodedToken.id);

      if (!user || !user.isUserActive) {
        return res.status(403).json({ message: "Account is blocked" });
      }

      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "Not authorized" });
      }

      req.user = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};