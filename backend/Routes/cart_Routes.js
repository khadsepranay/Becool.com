require("dotenv").config();
const express = require("express");
const { CartModel } = require("../Model/cart_Model");
const { ProductModel } = require("../Model/product_Model");
const jwt = require("jsonwebtoken");
let Key = process.env.Key

const { userAuthMiddleware } = require("../Middleware/userAuthMiddleware");


const cart = express.Router();

cart.get("/", userAuthMiddleware, async (req, res) => {
  const userid = req.body.userid;
  try {
    let data = await CartModel.find({ userid }).populate([
      "userid",
      "productid",
    ]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cart.get("/add/:id", userAuthMiddleware, async (req, res) => {
  const userid = req.body.userid;
  const productid = req.params.id;
  let CartItem = await CartModel.findOne({userid,productid})
  let Product = await ProductModel.findById(productid)
  if(CartItem){
    res.send('already added to cart')
  }else{
    try {
      if(Product.Quantity>0){
        let cartProduct = await CartModel.create({userid,productid,Quantity:1})
        newQuantity = Product.Quantity - 1
        await ProductModel.findByIdAndUpdate(productid,{Quantity:newQuantity})
        res.send("Product Add To Cart");
      }else{
        res.send(`Product with id:${productid} is out of stock`)
      }
    } catch (error) {
      res.send(error);
    }
  }
});

cart.get('/cartquantityadd/:id',userAuthMiddleware ,async(req,res)=>{
  const token = req.headers.auth;
    const { userid } = await jwt.verify(token, Key);
    req.body.userid = userid;
  let productid = req.params.id
  let CartData = await CartModel.find().populate([
    "userid",
    "productid"
  ])
  try{
  let Product = await ProductModel.findById(productid)
  if(Product.Quantity>0){
    let productQuantity = Number(Product.Quantity) - 1
    let product = await ProductModel.findByIdAndUpdate(productid,{Quantity:productQuantity},{new:true})
    console.log(product)
    let CartItem = await CartModel.findOne({userid,productid})
    let cartQuantity = CartItem.Quantity + 1
    await CartModel.findOneAndUpdate({userid,productid},{Quantity:cartQuantity},{new:true})
    let CartData = await CartModel.find().populate([
      "userid",
      "productid"
    ])
    res.send(CartData)
  }else{
    res.send(CartData)
  }
}catch(err){
  res.send(err)
}
}
)

cart.get('/cartquantityreduce/:id',userAuthMiddleware, async(req,res)=>{
  let productid = req.params.id
  let userid = req.body.userid
  let CartItem = await CartModel.findOne({productid,userid})
  console.log(CartItem.Quantity)
  if(CartItem.Quantity<1){
    res.send('Cannot decrease')
  }else{
  try{
  let Product = await ProductModel.findById(productid)
    let productQuantity = Number(Product.Quantity) + 1
    let product = await ProductModel.findByIdAndUpdate(productid,{Quantity:productQuantity},{new:true})
    let cartQuantity = CartItem.Quantity - 1
    await CartModel.findOneAndUpdate({userid,productid},{Quantity:cartQuantity},{new:true})
    let CartData = await CartModel.find().populate([
      "userid",
      "productid"
    ])
    res.send(CartData)
  }catch(err){
    res.send(err)
  }
  }
}
  )

cart.delete("/delete/:id", userAuthMiddleware, async (req, res) => {
  try{
  const id = req.params.id;
    let CartItem = await CartModel.findById(id)
    let ProductID = CartItem.productid._id
    let Product = await ProductModel.findById(ProductID)
    let cartQuantity = CartItem.Quantity
    let productQuantity = Product.Quantity
    let totalQuantity = cartQuantity + productQuantity
    await ProductModel.findByIdAndUpdate(ProductID,{Quantity:totalQuantity},{new:true})
    await CartModel.findByIdAndDelete(id);
    let CartData = await CartModel.find().populate([
      "userid",
      "productid"
    ])
    res.send(CartData)
  }catch(err){
    res.send(err)
  }
});

cart.get('/isadded/:id',userAuthMiddleware,async(req,res)=>{
  let userid = req.body.userid
  let productid = req.params.id
  let Product = await CartModel.findOne({productid,userid})
  console.log(Product)
  try{
    if(Product){
      res.send(true)
    }else{
      res.send(false)
    }
  }catch(err){
    res.send(false)
  }
})

cart.delete('/success',userAuthMiddleware,async(req,res)=>{
  try{
    let Cart = await CartModel.deleteMany()
    res.send('Order Successfully Placed')
  }catch(err){
    res.send(err)
  }
})



module.exports = { cart };
