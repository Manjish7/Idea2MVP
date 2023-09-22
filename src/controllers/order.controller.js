import OrderService from "../services/order.service";

class OrderController {
  static addToOrder = async (req, res) => {
    try {
      const order = await OrderService.addToOrder(req.body);
      res.json({
        success: true,
        message: "Order Placed Successfully",
        order,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default OrderController;
