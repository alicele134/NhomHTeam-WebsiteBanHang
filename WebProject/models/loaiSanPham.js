var mongoose = require('mongoose')


var Schema = mongoose.Schema;
var loaiSanPhamSchema = new Schema(
    {
      tenLoaiSanPham: {type: String, required: true, max:100},
      maLoaiSanPham: {type: String, required:true, max:10},
    }
  );

  module.exports = mongoose.model('loaiSanPham', loaiSanPhamSchema);

  module.exports.create({
    tenLoaiSanPham: "Cao cap",
    maLoaiSanPham: "1A",
})