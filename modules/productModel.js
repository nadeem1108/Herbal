const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  vendorObjectID: {
    type: String,
  },

  categoryObjectID: {
    type: String,
  },
  SubCategoryObjectID: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },

  img: {
    type: String,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

  des: {
    type: String,
  },

  subDes: {
    type: String,
  },

  price: {
    type: String,
    require: true,
  },

  discountPrice: {
    type: String,
  },

  size: {
    type: String,
  },

  qty: {
    type: String,
  },
  status: {
    type: String,
    require: true,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
