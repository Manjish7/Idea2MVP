import ProductService from "../services/product.service";
class ProductController {
  static create = async (req, res) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.json({
          status: false,
          message: "Failed to create the product",
        });
      }
      const product = await ProductService.createProduct(req.body);
      res.json({
        success: true,
        message: "Product created",
        product,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  static getSingle = async (req, res) => {
    try {
      const product = await ProductService.getSingleProduct(
        req.params.product_id
      );
      res.json({
        success: true,
        message: "Fetched product",
        product,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  static getAll = async (req, res) => {
    try {
      const products = await ProductService.getAllProduct();
      res.json({
        success: true,
        message: "Fetched all products",
        products,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  static update = async (req, res) => {
    try {
      const product = await ProductService.updateProduct(
        req.params.product_id,
        req.body
      );
      res.json({
        success: true,
        message: "Updated product succcessfully",
        product,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const product = await ProductService.deleteProduct(req.params.product_id);
      res.json({
        success: true,
        message: "Product deleted successfully",
        product,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
}

export default ProductController;
