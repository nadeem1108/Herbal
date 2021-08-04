const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userObjectID: {
    type: String,
    require: true,
  },

  productObjectID: {
    type: String,
    require: true,
  },

  qty: {
    type: Number,
  },
  status: {
    type: String,
  },
});

const CartDB = mongoose.model("CartDB", cartSchema);
module.exports = CartDB;
