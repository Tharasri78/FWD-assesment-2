import { Schema, model } from "mongoose";

const productSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  
});

const Product = model("Product", productSchema);
export default Product;
