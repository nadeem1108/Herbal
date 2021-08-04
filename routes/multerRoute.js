var express = require('express');
var router = express.Router();
var uploadMultiple = require("../controllers/multer/multer");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.post("/uploadfile", uploadMultiple, async (req, res, next) => {
  
  if (req.files) {
    console.log(req.body.url);
   console.log(req.files);
    console.log("files uploaded");
  }
});


module.exports = router;
