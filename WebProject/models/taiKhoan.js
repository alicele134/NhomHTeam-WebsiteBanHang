var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taiKhoanSchema = new Schema({
    email: {type: String, required: true, max: 100},
    matKhau: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('taiKhoan', taiKhoanSchema)

module.exports.create({
    email: "thanhhangdev@hotmail.com",
    matKhau: "thanhhang",
})
