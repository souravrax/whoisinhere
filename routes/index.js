var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("Called")
  res.render('index', {
    name: "",
    image_url: "https://source.unsplash.com/random"
  }); // default to views
});

module.exports = router;
