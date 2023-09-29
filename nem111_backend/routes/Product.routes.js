const express = require("express");

const { ProductModel } = require("../models/product.model");

const productRoutes = express.Router();

// Adding Data to the Database ;

productRoutes.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const property = new ProductModel(payload);
    await property.save();
    res.status(200).json({ message: "Data Added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});

module.exports = { productRoutes };
