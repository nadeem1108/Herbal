const ProductDB = require("../../modules/productModel");

// Load input validations
const validateRegisterInput = require("../../validation/productValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, img, des, subDes, price, discountPrice, size, qty } = req.body;

  const product = new ProductDB({
    name,
    img,
    des,
    subDes,
    price,
    discountPrice,
    size,
    qty,
  });
  product
    .save()
    .then((data) => {
      res.status(201).json({
        msg:"Success", 
        data:data
    })})
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating product",
      });
    });
};
