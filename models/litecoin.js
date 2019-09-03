const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const litecoinSchema = new Schema({
  price: { type: Number, reqiuired: true },
  date: { type: Date, default: Date.now }
});

const Litecoin = mongoose.model("Litecoin", litecoinSchema);

module.exports = Litecoin;
