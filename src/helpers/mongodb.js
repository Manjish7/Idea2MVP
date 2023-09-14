require("dotenv").config();
import mongoose from "mongoose";

export const mongodb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
