var express = require("express");
const router = express.Router();
const passport = require("passport");
const VendorDB = require("../modules/vendorModel")

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const adminSignup = require("../controllers/admin/adminSignup");
const adminLogin = require("../controllers/admin/adminLogin");

const adminFind = require("../controllers/admin/adminFind");
const adminFindOne = require("../controllers/admin/adminFindOne");
const adminUpdate = require("../controllers/admin/adminUpdate");
const adminDelete = require("../controllers/admin/adminDelete");

//  Routes
router.get("/find", auth, adminFind);
router.get("/find/:id", auth, adminFindOne);
router.put("/update/:id", auth, adminUpdate);
router.delete("/delete/:id", auth, adminDelete);

//  User Logins
router.post("/login", adminLogin);
router.post("/signup", adminSignup);

// ----------------------- EJS --------------------------------------

router.get("/", function (req, res, next) {
  res.render("adminLoginForm");
});


router.get("/dashboard",function (req,res,next){
  res.render('dashboard');
});


router.get("/list", async (req, res) => {
  const vendors = await VendorDB.find({});
  res.render("vendorList", { vendors });
});

// ----------------- Delete vendor ----------------
router.delete("/list/:id", async (req, res) => {
 
    await VendorDB.findByIdAndDelete(req.params.id);
  
});

// ------------------- add new Vendor ------------------------
router.get("/addvendor", (req, res) => {
  res.render("addVendorForm");
});



router.post("/addvendor",  async (req, res) => {
  try {
    const { name, email,contact,companyName} = req.body;
    await VendorDB.create({
      name: name,
      email: email,
      contact: contact,
      companyName:companyName,
    });
   
    console.log(req.body)
    req.flash("success", "New vendor created Successfully");
    res.redirect("/admin/list");
  } catch (e) {
    console.log(e.message);
    
  }
});


module.exports = router;
