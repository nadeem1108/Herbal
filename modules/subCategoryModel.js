const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  vendorObjectID: {
    type: String,
  },

  categoryObjectID: {
    type: String,
  },

  title: {
    type: String,
    require:true,
  },

  img: {
    type: String,
  },

  desc: {
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
