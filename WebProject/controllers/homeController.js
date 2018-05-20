var taiKhoan = require('../models/taiKhoan');
var khachHang = require('../models/khachHang');
var SanPham = require('../models/sanPham');
var gioHang = require('../models/gioHang');
//var loaiSanPham = require('../models/loaiSanPham');
var chiTietGioHang = require('../models/chiTietGioHang');
var quanTriVien = require('../models/quanTriVien');


exports.index = function(req, res, next) {
  SanPham.find(function(err, docs){
    var sanPhamChunks =[];
    var chunkSize = 4;
    for(var i=0;i<docs.length;i += chunkSize){
      sanPhamChunks.push(docs.slice(i, i+ chunkSize));
    }
    res.render('frontend/home/index', { title: 'WebProject', sanPhams: sanPhamChunks });
  });
};

//exports.ao = function(req, res, next) {
//  SanPham.find(function(err, docs){
//    var sanPhamChunks =[];
 //   var chunkSize = 4;
 //   for(var i=0;i<4;i += chunkSize){
 //     sanPhamChunks.push(docs.slice(i, i+ chunkSize));
 //   }
 //   res.render('frontend/home/aothoitrang', { title: 'WebProject', sanPhams: sanPhamChunks });
//  });
//};





