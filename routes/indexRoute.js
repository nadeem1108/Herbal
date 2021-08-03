const express = require("express");
const router = express.Router();


//  List of All route paths

router.use("/category", require("./categoryRoute"));
router.use("/sub-category", require("./subCategoryRoute"));
router.use("/product", require("./productRoute"));
router.use("/vendor", require("./vendorRoute"));


module.exports = router;
