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
    type: Number,
    require: true,
  },

  discountPrice: {
    type: Number,
  },

  size: {
    type: String,
  },

  qty: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
