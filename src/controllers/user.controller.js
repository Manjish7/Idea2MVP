import UserService from "../services/user.service";

class UserController {
  static signup = async (req, res) => {
    try {
      const user = await UserService.signup(req.body);
      res.json({
        success: true,
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

  static login = async (req, res, next) => {
    try {
      const user = await UserService.login(req.body);
      res.json({
        success: true,
        message: "Login successful",
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  static me = async (req, res) => {
    try {
      const user = await UserService.me(req.user._id);
      res.json({
        success: true,
        message: "Fetched user details",
        user,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

  static update = async (req, res) => {
    try {
      const updatedUser = await UserService.update(req.user._id, req.body);
      res.json({
        success: true,
        message: "Updated User Details",
        user: updatedUser,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
