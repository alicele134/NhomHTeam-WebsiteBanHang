var TaiKhoan = require('../models/taiKhoan');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WebProject');

var taiKhoans = [
    new TaiKhoan({
        email: "thanhhang@gmail.com",
        matKhau: "thanhhang123",
    }),
    new TaiKhoan({
        email:  "truonghien@gmail.com",
        matKhau: "trghien123",
    }),
    new TaiKhoan({
        email: "trannga@gmail.com",
        matKhau: "nga123",
    }),
    new TaiKhoan({
        email: "trandung@gmail.com",
        matKhau: "dung123",
    }),
    new TaiKhoan({
        email: "lehanh@gmail.com",
        matKhau: "hanh123",
    })
];

var done=0;
for(var i=0;i<taiKhoans.length;i++){
    taiKhoans[i].save(function(err,result){
        done++;
        if(done===taiKhoans.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}