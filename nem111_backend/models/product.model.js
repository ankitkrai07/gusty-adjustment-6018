const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    type: String,
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String
    },
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    size: Number,
    features: [String], 
    images: [String], 
    agent: {
      name: String,
      email: String,
      phone: String
    },
    created_at: Date,
    updated_at: Date
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("property", productSchema);

module.exports = { ProductModel };
