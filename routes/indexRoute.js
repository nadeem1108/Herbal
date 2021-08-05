const express = require("express");
const router = express.Router();


//middleware
const auth = require("../middleware/auth");

//  List of All route paths

router.use("/category", require("./categoryRoute"));
router.use("/sub-category", require("./subCategoryRoute"));
router.use("/product", require("./productRoute"));
router.use("/vendor", require("./vendorRoute"));
router.use("/admin", require("./adminRoutes"));
router.use("/user", require("./userRoute"));
router.use("/cart", require("./cartRoute"));
router.use("/wishlist", require("./whishlistRoute"));
router.use("/multer", require("./multerRoute"));


module.exports = router;
