require("dotenv").config();
const express = require("express");
const { UserModel } = require("../Model/user_Register_Model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const userRegister = express.Router();

userRegister.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 5, async (err, hash) => {
    if (err) {
      console.log("err is ===> 🙋‍♂️", err);
      res.send(err);
    } else {
      try {
        const newUser = new UserModel({
          username: username,
          email: email,
          password: hash,
        });
        await newUser.save();
        res.send("User Register Successful");
      } catch (error) {
        console.log("error is ===> 🙋‍♂️ oooo ", error);
        res.send({
          status: "Eamil Already Register",
          error: error,
        });
      }
    }
  });
});

userRegister.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDetails = await UserModel.find({ email: email });

    if (userDetails) {
      bcrypt.compare(password, userDetails[0].password, function (err, result) {
        if (err) {
          console.log("err is ===> 🙋‍♂️", err);
          res.send(err);
        } else {
          if (result) {
            jwt.sign(
              { userid: userDetails[0]._id, email: email },
              process.env.PRIVATEKEY,
              { algorithm: "HS256" },
              function (err, token) {
                if (err) {
                  console.log("err is ===> 🙋‍♂️", err);
                  res.send(err);
                } else {
                  res.send({
                    Staus: "login Successful",
                    Token: token,
                  });
                }
              }
            );
          } else {
            console.log("Wronge password 🙋‍♂️");
            res.send("Wronge password");
          }
        }
      });
    } else {
      res.send("User Are Not Register first please Signin First");
    }
  } catch (error) {}
});

module.exports = { userRegister };
