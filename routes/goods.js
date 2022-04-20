var express = require('express');
var router = express.Router();

router.get('/test', function (req, res, next) {
	res.render('test'); //test
});

router.get('/jquery', function (req, res, next) {
	res.render('jquery');
});

module.exports = router;