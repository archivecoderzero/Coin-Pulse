const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bitcoinSchema = new Schema({
  price: { type: [String] },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bitcoinSchema);

module.exports = Book;
