const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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

const AdminDB = mongoose.model("AdminDB", adminSchema);
module.exports = AdminDB;
