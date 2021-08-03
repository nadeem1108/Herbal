const Category = require("../../modules/categoryModel");

module.exports = (req, res, next) => {
  const { title, img, des, status } = req.body;


  const category = new Category({
    title,
    img,
    des,
    status,
  });
  category
  .save(category)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      mesaage: err.message || "some error occured while creating data",
    });
  });
};
