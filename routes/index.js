const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/allproducts", async (req, res) => {
  var data = await Product.find();
  res.render("pages/allproducts", { products: data });
});

router.get("/faq", (req, res) => {
  res.render("pages/faq");
});

router.get("/hto", (req, res) => {
  res.render("pages/hto");
});

module.exports = router;
