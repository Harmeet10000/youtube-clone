import { createError } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You need to login!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return createError(403, "Token is not valid!");
    req.user = user;
    next();
  });
};
