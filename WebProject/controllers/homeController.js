var taiKhoan = require('../models/taiKhoan');
var khachHang = require('../models/khachHang');
var sanPham = require('../models/sanPham');
var gioHang = require('../models/gioHang');
var loaiSanPham = require('../models/loaiSanPham');
var chiTietGioHang = require('../models/chiTietGioHang');
var quanTriVien = require('../models/quanTriVien');

exports.index = function(req,res,next){
    res.render('frontend/home/index', { 
        title: 'WebProject' });
}