import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { User } from "../models/users";
import { signToken } from "../utils/jwt";
import ValidationError from "../helpers/validationError";
import NotFoundError from "../helpers/notFoundError";

class UserService {
  static signup = async (data) => {
    try {
      data.password = await hashPassword(data.password);
      const user = await User.create(data);
      delete user._doc.password;
      delete user._doc._id;
      delete user._doc.__v;
      return user;
    } catch (error) {
      throw new Error("Failed to signup: " + error.message);
    }
  };

  static login = async (data) => {
    try {
      const user = await User.findOne({ username: data.username }).select(
        "_id username password firstname lastname email role"
      );
      if (!user)
        throw new NotFoundError("User with this credentials doesn't exists");
      if (!comparePasswordHash(data.password, user.password))
        throw new ValidationError("Invalid Credentials");

      delete user._doc.password;

      const accessToken = await signToken(user);
      const { username, role } = user;
      return { username, role, accessToken };
    } catch (error) {
      throw new Error("Failed to login: " + error.message);
    }
  };

  static me = async (user_id) => {
    try {
      const user = await User.findById(user_id).select(
        "-__v -updatedAt -createdAt -password"
      );
      return user;
    } catch (error) {
      throw new Error("Failed to get user details : " + error.message);
    }
  };

  static update = async (user_id, data) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        user_id,
        { $set: data },
        { new: true }
      ).select("-_id -__v -updatedAt -createdAt -password");
      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user details : " + error.message);
    }
  };
}
const hashPassword = async (password) => {
  return hashSync(password, genSaltSync(10));
};

const comparePasswordHash = (password, hashedPassword) => {
  return compareSync(password, hashedPassword);
};

export default UserService;
