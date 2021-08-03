const SubCategory = require("../../modules/subCategoryModel");

module.exports = (req, res, next) => {
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
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      mesaage: err.message || "some error occured while creating Sub Category",
    });
  });
};
