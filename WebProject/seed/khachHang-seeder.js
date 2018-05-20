var KhachHang = require('../models/khachHang');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WebProject');

var khachHangs = [
    new KhachHang({
        maKH: "00001",
        tenKhachHang: "Tran Thi Thanh Hang",
        gioiTinh: "Nu",
        ngaySinh: '1997-01-07',
        diaChi:"15/5 Bui The My, Tan Binh, HCM",
        email: "thanhhang@gmail.com",
        soDienThoai: "0123456789",
    }),
    new KhachHang({
        maKH: "00002",
        tenKhachHang: "Truong Hien",
        gioiTinh: "Nu",
        ngaySinh: '1997-08-07',
        diaChi:"ly thai to, Tan Binh, HCM",
        email: "truonghien@gmail.com",
        soDienThoai: "012322789",
    }),
    new KhachHang({
        maKH: "00003",
        tenKhachHang: "Tran Dung",
        gioiTinh: "Nam",
        ngaySinh: '1991-01-07',
        diaChi:"15/7 Bui The My, Tan Binh, HCM",
        email: "trandung@gmail.com",
        soDienThoai: "0894456789",
    }),
    new KhachHang({
        maKH: "00004",
        tenKhachHang: "Tran Nga",
        gioiTinh: "Nu",
        ngaySinh: '1994-11-07',
        diaChi:"15/5 Bui The My, Tan Binh, HCM",
        email: "trannga@gmail.com",
        soDienThoai: "0123456123",
    }),
    new KhachHang({
        maKH: "00005",
        tenKhachHang: "Le hanh",
        gioiTinh: "Nu",
        ngaySinh: '1997-13-07',
        diaChi:"Huynh Thuc Khang, Q.5, HCM",
        email: "lehanh@gmail.com",
        soDienThoai: "0124356789",
    }),
];

var done=0;
for(var i=0;i<khachHangs.length;i++){
    khachHangs[i].save(function(err,result){
        done++;
        if(done === khachHangs.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}