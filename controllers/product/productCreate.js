const ProductDB = require("../../modules/productModel");

module.exports = (req, res, next) => {
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating product",
      });
    });
};
