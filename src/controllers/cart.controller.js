import CartService from "../services/cart.service";

class CartController {
  static addToCart = async (req, res) => {
    try {
      const cart = await CartService.addToCart(req.body);
      res.json({
        success: true,
        message: "Cart created successfully",
        cart,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

  static getAllCarts = async (req, res) => {
    try {
      const carts = await CartService.getAllCarts(req.user._id);
      res.json({
        success: true,
        message: "Fetched all carts",
        carts,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

  static getCart = async (req, res) => {
    try {
      const cart = await CartService.getCart(req.params.cartId);
      res.json({
        success: true,
        message: "Fetched Cart",
        cart,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default CartController;
