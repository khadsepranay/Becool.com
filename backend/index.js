require("dotenv").config();
const express = require("express");
const { connect } = require("./Config/db");
const { userRegister } = require("./Routes/user_Register_Rout");
const { product } = require("./Routes/product_Routes");
const { cart } = require("./Routes/cart_Routes");
let HomeRoute = require('./Routes/home_Routes')
let Port = process.env.Port

const { userAuthMiddleware } = require("./Middleware/userAuthMiddleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRegister);

app.use("/product", product);

app.use("/cart",  cart);

app.use('/homepage',HomeRoute)

app.listen(Port, async () => {
  try {
    await connect;
    console.log(`connect to Data Base 🚩🚩`);
  } catch (error) {
    console.log(` errror is ====> ${error} 🙋‍♂️`);
  }
  console.log(`server is running on 8000 🚩🚩`);
});
