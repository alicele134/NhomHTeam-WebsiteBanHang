var QuanTriVien = require('../models/quanTriVien');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WebProject');

var quanTriViens = [
    new QuanTriVien({
      maQTV: "00001",
      tenquanTriVien: "Tran Van Thanh",
      gioiTinh: "Nu",
      ngaySinh: '1994-05-06',
      diaChi: "227 Nguyen Van Cu, Q.5, HCM",
      email: "tranvannam@gmail.com",
      soDienThoai: "01685278452",
    })
];

var done=0;
for(var i=0;i<quanTriViens.length;i++){
    quanTriViens[i].save(function(err,result){
        done++;
        if(done===quanTriViens.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}