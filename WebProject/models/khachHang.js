var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var khachHangSchema = new Schema(
    {
      maKH: {type: String, required: true, max: 5},
      tenKhachHang: {type: String, required: true, max: 100},
      gioiTinh: {type: String,enum: ['Nu', 'Nam']},
      ngaySinh: {type: Date, required: true},
      diaChi: {type: String, required:true, max:100},
      email: {type: String, required: true, max:100},
      soDienThoai: {type: String, required: true, max: 11},
    }
  );
//4. Model
  module.exports = mongoose.model('khachHang', khachHangSchema);
