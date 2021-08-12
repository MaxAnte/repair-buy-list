const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  width: { type: Number, required: true, default: 0 },
  length: { type: Number, required: true, default: 0 },
});

module.exports = model("Param", schema);
