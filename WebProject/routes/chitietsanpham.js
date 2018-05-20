var express = require('express');
var router = express.Router();

var chitietsanpham_controller=require('../controllers/chitietsanpham_controller');

router.get('/chitietsanpham',chitietsanpham_controller.chitietsanpham);



module.exports = router;