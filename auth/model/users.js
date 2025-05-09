const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  prenom: {
    type: String,
    required: true,
    unique: true,
  },
  nom: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
