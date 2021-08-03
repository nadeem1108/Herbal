const AdminDB = require("../../modules/adminModel");

module.exports = (req, res, next) => {
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Admin",
      });
    });
};
