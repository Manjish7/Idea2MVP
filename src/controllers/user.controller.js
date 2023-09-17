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

  static login = async (req, res) => {
    try {
      const user = await UserService.login(req.body);
      res.json({
        success: true,
        message: "Login successful",
        user,
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
