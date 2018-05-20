var express = require('express');
var router = express.Router();

// Require controller modules.

//get home page
var home_controller=require('../controllers/homeController');


//var SanPham = require('../controllers/sanPham');


/// SHIRT ROUTES /// không ảnh hưởng tới gọi trang áo

//router.get('/ao-thoi-trang', SanPham.sanPham_list);

module.exports = router;