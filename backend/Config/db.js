require("dotenv").config();
const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://pranitkhadse:pranit@cluster0.hqcdxvk.mongodb.net/BecoolDB?retryWrites=true&w=majority");

module.exports = {connect};
