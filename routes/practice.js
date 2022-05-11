var express = require('express');
var router = express.Router();
const PullToRefresh = require('pulltorefreshjs');


router.get('/test', function (req, res, next) {
	res.render('test'); //test
});

router.get('/skeleton', function (req, res, next) {
	res.render('skeletonBox'); //test
});


router.get('/jquery', function (req, res, next) {
	res.render('jquery');
});

router.get('/youtube', function (req, res, next) {
	res.render('youtube'); //test
});

//testt
module.exports = router;