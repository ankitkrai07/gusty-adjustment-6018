const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    type: String,
    city: String,
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    size: Number,
   images: [String], 
    },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("property", productSchema);

module.exports = { ProductModel };
