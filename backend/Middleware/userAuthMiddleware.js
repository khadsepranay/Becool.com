require("dotenv").config();
const jwt = require("jsonwebtoken");

const userAuthMiddleware = async (req, res, next) => {
  const token = req.headers.auth;

  try {
    const { userid, email } = await jwt.verify(token, process.env.PRIVATEKEY);
    console.log(userid);
    req.body.userid = userid;
     
    next();
  } catch (error) {
     res.send("error")
  }
};
module.exports = { userAuthMiddleware };
