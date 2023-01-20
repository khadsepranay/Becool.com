const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "becool_user",
    required: true,
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "becool_men_product",
    required: true,
  },
  Quantity:Number

});

const CartModel = mongoose.model("becool_men_cart", cartSchema);

module.exports = { CartModel };
