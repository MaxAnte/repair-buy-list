const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, default: "Name" },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  tags: [{ type: String }],
});

module.exports = model("Item", schema);
