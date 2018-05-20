var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var quanTriVienSchema = new Schema(
    {
      maQTV: {type: String, required: true, max: 5},
      tenquanTriVien: {type: String, required: true, max: 100},
      gioiTinh: {type: String,enum: ['Nu', 'Nam']},
      ngaySinh: {type: Date, required: true},
      diaChi: {type: String, required:true, max:100},
      email: {type: String, required: true, max:100},
      soDienThoai: {type: String, required: true, max:11},
    }
  );

  module.exports = mongoose.model('quanTriVien', quanTriVienSchema);
