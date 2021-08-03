const VendorDB = require("../../modules/vendorModel");

// Load input validations
const validateRegisterInput = require("../../validation/vendorValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    name,
    email,
    password,
    contact,
    companyName,
    logo,
    address,
    state,
    pincode,
  } = req.body;

  const vendor = new VendorDB({
    name,
    email,
    password,
    contact,
    companyName,
    logo,
    address,
    state,
    pincode,
  });
  vendor
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Vendor",
      });
    });
};
