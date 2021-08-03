var express = require('express');
const router = express.Router();


//  Add Controllers
const vendorSignup = require('../controllers/vendor/vendorSignup')
const vendorFind = require('../controllers/vendor/vendorFind')
const vendorFindOne = require('../controllers/vendor/vendorFindOne')
const vendorUpdate = require('../controllers/vendor/vendorUpdate')
const vendorDelete = require('../controllers/vendor/vendorDelete')



//  Routes
router.post("/create", vendorSignup);
router.get("/find",  vendorFind);
router.get("/find/:id",  vendorFindOne);
router.put("/update/:id",  vendorUpdate);
router.delete("/delete/:id",  vendorDelete);

module.exports = router;
