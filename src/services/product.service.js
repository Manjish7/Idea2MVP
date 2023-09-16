import { Product } from "../models/product";

class ProductService {
  static createProduct = async (data) => {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      throw new Error("Failed to create a product :" + error.message);
    }
  };
  static getSingleProduct = async (product_id) => {
    try {
      const product = await Product.findById(product_id);
      return product;
    } catch (error) {
      throw new Error("Failed to get the product :" + error.message);
    }
  };
  static getAllProduct = async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error("Failed to get the product :" + error.message);
    }
  };
  static updateProduct = async (product_id, data) => {
    try {
      const product = await Product.findByIdAndUpdate(
        product_id,
        {
          $set: data,
        },
        { new: true }
      );
      return product;
    } catch (error) {
      throw new Error("Failed to get the product :" + error.message);
    }
  };
  static deleteProduct = async (product_id) => {
    try {
      const product = await Product.findByIdAndDelete(product_id);
      return product;
    } catch (error) {
      throw new Error("Failed to get the product :" + error.message);
    }
  };
}

export default ProductService;
