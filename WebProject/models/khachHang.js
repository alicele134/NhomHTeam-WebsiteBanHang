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

  module.exports.create({
    maKH: "00001",
    tenKhachHang: "Tran Thi Thanh Hang",
    gioiTinh: "Nu",
    ngaySinh: '1997-01-07',
    diaChi:"15/5 Bui The My, Tan Binh, HCM",
    email: "thanhhang@gmail.com",
    soDienThoai: "0123456789",
})