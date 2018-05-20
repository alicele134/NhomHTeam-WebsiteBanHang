var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var chiTietGioHangSchema = new Schema(
    {
      maGioHang: {type: String, required: true, max: 10},
      soLuong: {type: Number, required: true, min:1},
      maSanPham: {type: String, required:true, max:10},
    }
  );

  module.exports = mongoose.model('chiTietGioHang', chiTietGioHangSchema);
