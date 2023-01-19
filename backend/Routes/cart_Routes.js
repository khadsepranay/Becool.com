require("dotenv").config();
const express = require("express");
const { CartModel } = require("../Model/cart_Model");
const { ProductModel } = require("../Model/product_Model");

const { userAuthMiddleware } = require("../Middleware/userAuthMiddleware");


const cart = express.Router();

cart.get("/", userAuthMiddleware, async (req, res) => {
  const userid = req.body.userid;
  console.log("userid is ===> ", userid);
  try {
    let data = await CartModel.find({ userid }).populate([
      "userid",
      "productid",
    ]);
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cart.post("/add/:id", userAuthMiddleware, async (req, res) => {
  const userid = req.body.userid;
  const productid = req.params.id;
  // console.log("===>",userid, productid);
  try {
    const cartproduct = new CartModel({ userid, productid });
    await cartproduct.save();
    res.send("Product Add To Cart ");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

cart.delete("/delete/:id", userAuthMiddleware, async (req, res) => {
  const id = req.params.id;

  try {
     await CartModel.findByIdAndDelete(id);
    res.send("Product Delete To Cart ");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});
module.exports = { cart };
