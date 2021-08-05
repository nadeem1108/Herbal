var express = require("express");
const router = express.Router();
const passport = require("passport");

//middleware
const auth = require("../middleware/auth");

//  Add Controllers

const vendorLogin = require("../controllers/vendor/vendorLogin");
const vendorSignup = require("../controllers/vendor/vendorSignup");
const vendorFind = require("../controllers/vendor/vendorFind");
const vendorFindOne = require("../controllers/vendor/vendorFindOne");
const vendorUpdate = require("../controllers/vendor/vendorUpdate");
const vendorDelete = require("../controllers/vendor/vendorDelete");

//  Routes

router.get("/find", auth, vendorFind);
router.get("/find/:id", auth, vendorFindOne);
router.put("/update/:id", auth, vendorUpdate);
router.delete("/delete/:id", auth, vendorDelete);

// User Login
router.post("/login", vendorLogin);
router.post("/signup", vendorSignup);

module.exports = router;
