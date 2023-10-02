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

productRoutes.get("/:id", async (req, res) => {
  let { city, type, page, limit, search } = req.query;
  const { id } = req.params; 
console.log(id)
  try {
    if (id) { 
      const data = await ProductModel.findById({_id:id}); 
      if (data) {
        res.status(200).json({ data: data });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    }else if (city && type) {
      const data = await ProductModel.find({
        $and: [{ city: city }, { type: type }],
      });
      res.status(200).json({ data: data });
    } else if (city) {
      const data = await ProductModel.find({ city: city });
      res.status(200).json({ data: data });
    } else if (type) {
      const data = await ProductModel.find({ type: type });
      res.status(200).json({ data: data });
    } else if (page) {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      try {
        const totalProducts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalProducts / limit);

        const product = await ProductModel.find()
          .skip((page - 1) * limit)
          .limit(limit);

        res.json({
          currentPage: page,
          totalPages,
          data: product,
        });
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
      }
    } else if (search) {
      try {
        let query = {};
        const searchTerm = search;
        if (searchTerm) {
          query = {
            $or: [
              { city: { $regex: searchTerm, $options: "i" } },
              { type: { $regex: searchTerm, $options: "i" } },
              { location: { $regex: searchTerm, $options: "i" } },
            ],
          };
        }

        const products = await ProductModel.find(query);
        res.json(products);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
    } else {
      const data = await ProductModel.find();
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoutes.get("/", async (req, res) => {
  let { city, type, page, limit, search } = req.query;
  const { id } = req.params; // Change req.params.id to req.query.id
console.log(id)
  try {
    if (id) { // Check if id is provided
      const data = await ProductModel.findById({_id:id}); // Use findById to search by id
      if (data) {
        res.status(200).json({ data: data });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    }else if (city && type) {
      const data = await ProductModel.find({
        $and: [{ city: city }, { type: type }],
      });
      res.status(200).json({ data: data });
    } else if (city) {
      const data = await ProductModel.find({ city: city });
      res.status(200).json({ data: data });
    } else if (type) {
      const data = await ProductModel.find({ type: type });
      res.status(200).json({ data: data });
    } else if (page) {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      try {
        const totalProducts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalProducts / limit);

        const product = await ProductModel.find()
          .skip((page - 1) * limit)
          .limit(limit);

        res.json({
          currentPage: page,
          totalPages,
          data: product,
        });
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
      }
    } else if (search) {
      try {
        let query = {};
        const searchTerm = search;
        if (searchTerm) {
          query = {
            $or: [
              { city: { $regex: searchTerm, $options: "i" } },
              { type: { $regex: searchTerm, $options: "i" } },
              { location: { $regex: searchTerm, $options: "i" } },
            ],
          };
        }

        const products = await ProductModel.find(query);
        res.json(products);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
    } else {
      const data = await ProductModel.find();
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRoutes.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ message: "Product has been updated sucessfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productRoutes.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id }, req.body);
    res.status(200).json({ message: "Product has been deleted sucessfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { productRoutes };
