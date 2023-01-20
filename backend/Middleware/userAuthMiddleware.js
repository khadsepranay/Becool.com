require("dotenv").config();
const jwt = require("jsonwebtoken");

const userAuthMiddleware = async (req, res, next) => {
  const token = req.headers.auth;
  try {
    const { userid } = await jwt.verify(token, "AccessToken");
    req.body.userid = userid;
    next();
  } catch (error) {
     res.send("error")
  }
};
module.exports = { userAuthMiddleware };
