const SubCategory = require("../../modules/subCategoryModel");

// Load input validations
const validateRegisterInput = require("../../validation/subCategoryValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { title, img, des, status } = req.body;

  const subCategory = new SubCategory({
    title,
    img,
    des,
    status,
  });
  subCategory
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Sub Category",
      });
    });
};
