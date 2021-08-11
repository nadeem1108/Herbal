const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  contact: {
    type: String,
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

  stateName: {
    type: String,
  },

  pincode: {
    type: String,
  },

  country: {
    type: String,
    default: "INDIA",
  },
  status: {
    type: String,
    require: true,
    default: 0,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
