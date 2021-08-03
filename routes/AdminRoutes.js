var express = require('express');
const router = express.Router();


//  Add Controllers
const adminSignup = require('../controllers/admin/adminSignup')
const adminFind = require('../controllers/admin/adminFind')
const adminFindOne = require('../controllers/admin/adminFindOne')
const adminUpdate = require('../controllers/admin/adminUpdate')
const adminDelete = require('../controllers/admin/adminDelete')



//  Routes
router.post("/signup", adminSignup);
router.get("/find",  adminFind);
router.get("/find/:id",  adminFindOne);
router.put("/update/:id",  adminUpdate);
router.delete("/delete/:id",  adminDelete);

module.exports = router;
