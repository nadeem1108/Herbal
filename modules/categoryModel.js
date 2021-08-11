const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  vendorObjectID: {
    type: String,
  },

  title: {
    type: String,
    require: true,
  },

  img: {
    type: String,
  },

  dsc: {
    type: String,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },


  status: {
    type: String,
    require: true,
    default: 0,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
