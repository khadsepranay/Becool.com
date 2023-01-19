require("dotenv").config();
const express = require("express");
const { ProductModel } = require("../Model/product_Model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const product = express.Router();

product.get("/men", async (req, res) => {
  let sort = req.query.sort;
  let chek = {...req.query};

  let sortnum = 0;
  if (sort == "high") {
    sortnum = -1;
  } else if (sort == "low") {
    sortnum = 1;
  }
  
  // !  delet e the sort key in query
    delete chek.sort;
console.log(chek);
  try {
    let data = await ProductModel.find(chek).sort({ Price: sortnum });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

product.post("/men/add", async (req, res) => {
  const payload = req.body;

  try {
    let newProduct = new ProductModel(payload);
    await newProduct.save();
    res.send("New Product Added");
  } catch (error) {
    res.send(error);
  }
});

// product.get("/women", (req, res) => {});

// product.get("/phonecover", (req, res) => {});
module.exports = { product };
