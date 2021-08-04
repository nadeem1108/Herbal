var express = require('express');
const router = express.Router();


//  Add Controllers
const wishlistCreate = require('../controllers/wishlist/wishlistCreate')
const wishlistFind = require('../controllers/wishlist/wishlistFind')
const wishlistFindOne = require('../controllers/wishlist/wishlistFindOne')
const wishlistUpdate = require('../controllers/wishlist/wishlistUpdate')
const wishlistDelete = require('../controllers/wishlist/wishlistDelete')



//  Routes
router.post("/create", wishlistCreate);
router.get("/find",  wishlistFind);
router.get("/find/:id",  wishlistFindOne);
router.put("/update/:id",  wishlistUpdate);
router.delete("/delete/:id",  wishlistDelete);

module.exports = router;
