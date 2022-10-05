const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  price: Number,
});
module.exports = mongoose.model("article", articleSchema);