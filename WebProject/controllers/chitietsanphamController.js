var taiKhoan = require('../models/taiKhoan');
var khachHang = require('../models/khachHang');
var SanPham = require('../models/sanPham');
var gioHang = require('../models/gioHang');
//var loaiSanPham = require('../models/loaiSanPham');
var chiTietGioHang = require('../models/chiTietGioHang');
var quanTriVien = require('../models/quanTriVien');


// exports.sanPham = function(res, req, next){
// 	async.parallel({
//         sanPham: function(callback) {
//             SanPham.findById(req.params.id)
//               .exec(callback);
//         },
// }