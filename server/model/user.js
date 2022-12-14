const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User',User)