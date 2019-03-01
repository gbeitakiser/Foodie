const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const ReplaceMe = mongoose.model("replaceme", bookSchema);

module.exports = Book;
