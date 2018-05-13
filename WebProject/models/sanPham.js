var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sanPhamSchema = new Schema(
    {
      maSanPham: {type: String, required: true, max: 10},
      tenSanPham: {type: String, required: true, max:100},
      maLoaiSanPham: {type: String, required:true, max:10},
      gia: {type: Number, required: true}
    }
  );

  module.exports = mongoose.model('sanPham', sanPhamSchema);

  module.exports.create({
    maSanPham: "0000000002",
    tenSanPham: "gucci",
    maLoaiSanPham: "1A",
    gia: 25000,
})