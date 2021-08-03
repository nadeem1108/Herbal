const AdminDB = require("../../modules/adminModel");

// Load input validations
const validateRegisterInput = require("../../validation/adminValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, email, password, contact, address, state, pincode } = req.body;

  const admin = new AdminDB({
    name,
    email,
    password,
    contact,
    address,
    state,
    pincode,
  });
  admin
    .save()
    .then((data) => {
      res.status(201).json({
        msg:"Data Added successfully", 
        res:data
    })})
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Admin",
      });
    });
};
