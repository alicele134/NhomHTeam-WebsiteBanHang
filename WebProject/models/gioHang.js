var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var gioHangSchema = new Schema(
    {
      maGioHang: {type: String, required: true, max: 10},
      tongTien: {type: Number, required: true},
      maKH: {type: String, required:true, max:5},
    }
  );

  module.exports = mongoose.model('gioHang', gioHangSchema);

  module.exports.create({
    maGioHang: "0000000001",
    tongTien: 10000,
    maKH: "00001",
})