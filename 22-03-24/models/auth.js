const { Schema, default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//.model registra il modello con il nome "User" e schema "userSchema" e lo esporta

module.exports = mongoose.model("User", userSchema);
