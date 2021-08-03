var express = require("express");
const router = express.Router();
const passport = require("passport");


//  Add Controllers

const vendorLogin = require("../controllers/vendor/vendorLogin");
const vendorSignup = require("../controllers/vendor/vendorSignup");
const vendorFind = require("../controllers/vendor/vendorFind");
const vendorFindOne = require("../controllers/vendor/vendorFindOne");
const vendorUpdate = require("../controllers/vendor/vendorUpdate");
const vendorDelete = require("../controllers/vendor/vendorDelete");

//  Routes

router.get("/find", vendorFind);
router.get("/find/:id", vendorFindOne);
router.put("/update/:id", vendorUpdate);
router.delete("/delete/:id", vendorDelete);

// User Login
router.post("/login", vendorLogin);
router.post("/signup", vendorSignup);

module.exports = router;
