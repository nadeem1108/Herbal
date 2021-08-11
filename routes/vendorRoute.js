var express = require("express");
const router = express.Router();
const passport = require("passport");
const vendorDB = require("../modules/vendorModel")
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


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

router.get("/find",vendorFind);
router.get("/find/:id", vendorFindOne);
router.put("/update/:id", vendorUpdate);
router.delete("/delete/:id", vendorDelete);

// User Login
router.post("/login", vendorLogin);
router.post("/signup", vendorSignup);

// ----------------------- EJS --------------------------------------

router.get("/",function (req,res,next){
    res.render('vendorLoginForm');
});

router.get("/new",function (req,res,next){
    res.render('vendorSignupForm');
});


router.post("/new", async (req, res) => {
    try {
      const vendor = new vendorDB({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const newVendor = await vendorDB.register(newVendor, req.body.password);
      
      res.redirect("/");
      // console.log(newUser);
    } catch (e) {
      console.log(e);
      req.flash("error", e.message);
      res.redirect("/new");
    }
  });
  
  




module.exports = router;
