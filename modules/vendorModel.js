const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    require:true,
  },

  email: {
    type: String,
    unique: true,
    require:true,
  },

  password: {
    type: String,
    require:true,
  },

  contact: {
    type: Number,
  },

  companyName: {
    type: String,
  },

  logo: {
    type: String,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

  address: {
    type: String,
  },

  state: {
    type: String,
  },

  pincode: {
    type: Number,
  },

  country: {
    type: String,
    default: "INDIA",
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
