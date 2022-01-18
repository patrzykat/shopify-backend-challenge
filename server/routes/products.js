const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET all
router.get("/ALL", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET by family
router.get("/:family", async (req, res) => {
  try {
    const productsInFamily = await Product.find({ family: req.params.family });
    res.status(201).send(productsInFamily);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new product
router.post("/", async (req, res) => {
  const product = new Product({
    sku: req.body.sku,
    name: req.body.name,
    family: req.body.family,
    description: req.body.description,
    quantity: req.body.quantity,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH product by sku
router.patch("/:sku", getProductBySKU, async (req, res) => {
  if (req.body.sku != null) {
    res.product.sku = req.body.sku;
  }
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.family != null) {
    res.product.family = req.body.family;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.quantity != null) {
    res.product.quantity = req.body.quantity;
  }
  try {
    const updatedProduct = await res.product.save();
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE product by sku
router.delete("/:sku", getProductBySKU, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Deleted Product " });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProductBySKU(req, res, next) {
  let product;
  try {
    product = await Product.findOne({ sku: req.params.sku });
    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }
  } catch (err) {
    return res.status(500) > json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
