const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userObjectID: {
    type: String,
    require: true,
  },

  productObjectID: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    require: true,
    default: 0,
  },
});

const WishlistDB = mongoose.model("WishlistDB", wishlistSchema);
module.exports = WishlistDB;
