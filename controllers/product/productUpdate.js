const ProductDB = require("../../modules/productModel");

// Load input validations
// const validateRegisterInput = require("../../validations/addAcademicClass");

module.exports = (req, res, next) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  const id = req.params.id;
  ProductDB.findByIdAndUpdate(id, req.body, { userFindAndModify: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding data of particular id" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error Category update information" });
    });
};