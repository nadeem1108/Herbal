const VendorDB = require("../../modules/vendorModel");

module.exports = (req, res, next) => {
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Vendor",
      });
    });
};
