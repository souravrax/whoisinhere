var express = require('express');
var router = express.Router();
const Clarifai = require('clarifai');
const getNestedData = require('../controllers/boxByFaceData');
require('dotenv').config();
var probe = require('probe-image-size')

const app = new Clarifai.App({
    apiKey: process.env.API_KEY
})

const getdata = async (url) => {
    try {
        const data = await app.models.predict('e466caa0619f444ab97497640cefc4dc', url);
        const image = await probe(url);

        const res = getNestedData(data, image);

        return res;
    } catch (error) {
        console.log(error);
    }
}

router.get('/', async function (req, res, next) {
    const image_url = req.query.image_url;

    let data = await getdata(image_url);


    data = {
        ...data, image_url: image_url,
        display: "block"
    }

    console.log(data);

    res.render('index', data)
});

module.exports = router;
