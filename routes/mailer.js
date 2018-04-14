var express = require('express');
var router = express.Router();
var emailController=require('../controllers/emailController');

router.post('/recovery', function(req, res, next) {
    emailController.recovery(req, res, next);
});

router.get('/recover/:hash', function(req, res, next) {
    emailController.recover(req, res, next);
});

module.exports=router;
