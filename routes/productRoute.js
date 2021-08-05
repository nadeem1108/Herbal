var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const productCreate = require("../controllers/product/productCreate");
const productFind = require("../controllers/product/productFind");
const productFindOne = require("../controllers/product/productFindOne");
const productUpdate = require("../controllers/product/productUpdate");
const productDelete = require("../controllers/product/productDelete");

//  Routes
router.post("/create", auth, productCreate);
router.get("/find", auth, productFind);
router.get("/find/:id", auth, productFindOne);
router.put("/update/:id", auth, productUpdate);
router.delete("/delete/:id", auth, productDelete);

module.exports = router;
