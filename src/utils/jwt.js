require("dotenv").config();
import jwt from "jsonwebtoken";
const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ payload }, TOKEN_SECRET, {}, (err, token) => {
      if (err) reject(new Error(err.message));
      resolve(token);
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET, (err, payload) => {
      if (err) reject(new Error("Unauthorized"));
      resolve(payload);
    });
  });
};
