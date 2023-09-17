import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// productSchema.methods.toJSON = () => {
//   const product = this.toObject();
//   delete product.__v;
//   return product;
// };

export const Product = mongoose.model("Product", productSchema);
