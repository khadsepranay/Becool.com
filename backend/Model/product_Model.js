const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Brand: String,
  Image_Main: String,
  Image1: String,
  Image2: String,
  Image3: String,
  Fit: String,
  Ratings: String,
  Category: String,
  Sizes: String,
  Sleeve: String,
  Color: String,
  Design: String,
  Name: String,
  Price: String,
  Price1: String,
  Price2: String,
  Price3: String,
});

const ProductModel = mongoose.model("becool_men_product", productSchema);

module.exports = { ProductModel };
