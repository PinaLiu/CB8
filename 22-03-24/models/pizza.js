//schema
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  //   ingredients: { type: String, required: true },
  // image: { type: String, required: true },
});

module.exports = mongoose.model("Pizza", pizzaSchema);
