const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
});

module.exports = model("Item", schema);
