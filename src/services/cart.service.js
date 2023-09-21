import { Cart } from "../models/cart";

class CartService {
  static addToCart = async (data) => {
    try {
      const cart = await Cart.create(data);
      delete cart._doc.__v, delete cart._doc.updatedAt;
      return cart;
    } catch (error) {
      throw new Error("Failed to add product to cart: " + error.message);
    }
  };

  static getAllCarts = async (userId) => {
    try {
      const carts = await Cart.find({
        user: userId,
      }).select("-__v -updatedAt -user");
      return carts;
    } catch (error) {
      throw new Error("Failed to get carts: " + error.message);
    }
  };

  static getCart = async (cartId) => {
    try {
      const cart = await Cart.findById(cartId)
        .select("-__v -updatedAt")
        .populate({
          path: "user",
          select: "firstname lastname address contact",
        })
        .populate({
          path: "product",
          select: "product_name price",
        });
      return cart;
    } catch (error) {
      throw new Error("Failed to get cart: " + error.message);
    }
  };
}

export default CartService;
