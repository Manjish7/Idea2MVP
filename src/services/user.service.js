import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { User } from "../models/users";
import { signToken } from "../utils/jwt";

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
        "-__v -updatedAt"
      );
      if (!user) throw new Error("User with this credentials doesn't exists");
      if (!comparePasswordHash(data.password, user.password))
        throw new Error("Invalid Credentials");

      delete user._doc.password;

      const accessToken = await signToken(user);
      const { username, role } = user;
      return { username, role, accessToken };
    } catch (error) {
      throw new Error("Failed to login: " + error.message);
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
