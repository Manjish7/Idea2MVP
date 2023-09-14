import IndexService from "../services/index.service";

class IndexController {
  static sayHello = (req, res) => {
    res.json({
      message: IndexService.sayHello(),
    });
  };
}

export default IndexController;
