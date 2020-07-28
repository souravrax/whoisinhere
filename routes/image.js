var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    const image_url = req.query.image_url;
    console.log(image_url);
    res.render('index', {
        name: "text",
        image_url: image_url
    })
});

module.exports = router;
