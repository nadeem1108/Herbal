var express = require('express');
const router = express.Router();


//  Add Controllers
const cartCreate = require('../controllers/cart/cartCreate')
const cartFind = require('../controllers/cart/cartFind')
const cartFindOne = require('../controllers/cart/cartFindOne')
const cartUpdate = require('../controllers/cart/cartUpdate')
const cartDelete = require('../controllers/cart/cartDelete')



//  Routes
router.post("/create", cartCreate);
router.get("/find",  cartFind);
router.get("/find/:id",  cartFindOne);
router.post("/update",  cartUpdate);
router.delete("/delete/:id",  cartDelete);

module.exports = router;
