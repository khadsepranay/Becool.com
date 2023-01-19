const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,

  password: String,
  userid: String,
});

const UserModel = mongoose.model("becool_user", userSchema);

module.exports = { UserModel };
