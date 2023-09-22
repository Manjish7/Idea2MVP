import { Cart } from "../models/cart";
import { Order } from "../models/order";

class OrderService {
  static addToOrder = async (data) => {
    try {
      const carts = await Cart.find({ _id: { $in: req.body.items } })
        .select("product quantity")
        .populate({
          path: "product",
          select: "price",
        });
      let totalPrice = 0;
      for (const cart of carts) {
        totalPrice += cart.product["price"] * cart.quantity;
      }
      data["total_price"] = totalPrice;
      const order = await Order.create(data);
      delete order._doc.__v, delete order._doc.updatedAt;
      return order;
    } catch (error) {
      throw new Error("Failed to add place order: " + error.message);
    }
  };
}

export default OrderService;
