const AdminDB = require("../../modules/adminModel");

// Load input validations
// const validateRegisterInput = require("../../validations/addAcademicClass");

module.exports = (req, res, next) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  const id = req.params.id;
  AdminDB.findByIdAndUpdate(id, req.body, { userFindAndModify: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding Admin of particular id" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error Admin update information" });
    });
};