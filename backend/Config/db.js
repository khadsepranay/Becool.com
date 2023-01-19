require("dotenv").config();
const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://ss:ss@cluster0.g7zt7z4.mongodb.net/BecoolDB?retryWrites=true&w=majority");

module.exports = {connect};
