const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  price: Number,
  createdAt: {type:Date, default: Date.now()},
  UpdatedAt: {type:Date, default:Date.now()},
});

module.exports = mongoose.model("book", bookSchema);
