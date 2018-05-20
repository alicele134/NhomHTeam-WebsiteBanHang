var SanPham = require('../models/sanPham');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WebProject');

var sanPhams = [
    new SanPham({
        imagePath: '../images/ao1.png',
        tenSanPham: 'Girl xinh',
        description: 'Danh rieng cho ban gai!!!',
        gia: 10,
        maSanPham: 'A001',
        maLoai: 'A'
    }),
    new SanPham({
        imagePath: '../images/girl3.png',
        tenSanPham: 'Girl xinh ',
        description: 'Danh rieng cho ban gai!!!',
        gia: 15,
        maSanPham: 'A002',
        maLoai:'A'
    }),
    new SanPham({
        imagePath: '../images/girl1.png',
        tenSanPham: 'Girl xinh',
        description: 'Danh rieng cho ban gai!!!',
        gia: 125,
        maSanPham: 'A003',
        maLoai:'A'
    }),
    new SanPham({
        imagePath: '../images/girl2.png',
        tenSanPham: 'Girl xinh',
        description: 'Danh rieng cho ban gai!!!',
        gia: 36,
        maSanPham: 'A004',
        maLoai:'A'
    }),
    new SanPham({
        imagePath: '../images/kid1.png',
        tenSanPham: 'Cute kid',
        description: 'Be gai xinh!!!',
        gia: 25,
        maSanPham: 'A005',
        maLoai:'A'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan1.jpg',
        tenSanPham: 'Quần thun nữ Jogger Baggy Thể thao thời trang',
        description: 'Quần thun nữ Jogger Baggy Thể thao thời trang !!!',
        gia: 25000,
        maSanPham: 'Q001',
        maLoai:'Q'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan2.jpg',
        tenSanPham: 'Quần thun ôm Legging',
        description: 'Quần thun ôm Legging Thời trang Hàn Quốc !!!',
        gia: 25000,
        maSanPham: 'Q002',
        maLoai:'Q'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan3.jpg',
        tenSanPham: 'Quần thun ôm Legging ',
        description: 'Quần thun ôm Legging 3 sọc Thể thao thời trang!!!',
        gia: 25000,
        maSanPham: 'Q003',
        maLoai:'Q'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan4.jpg',
        tenSanPham: 'Quần thun nữ Jogger Baggy Thể thao thời trang',
        description: 'Quần thun nữ Jogger Baggy Thể thao thời trang !!!',
        gia: 25000,
        maSanPham: 'Q004',
        maLoai:'Q'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan5.jpg',
        tenSanPham: 'Quần thun lững ôm Legging Thời trang',
        description: 'Quần thun nữ Jogger Baggy Thể thao thời trang !!!',
        gia: 25000,
        maSanPham: 'Q005',
        maLoai:'Q'
    }),

    new SanPham({
        imagePath: '../images/quan/quan_dai/quan6.jpg',
        tenSanPham: 'Quần tây công sở',
        description: 'Quần thun nữ Jogger Baggy Thể thao thời trang !!!',
        gia: 25000,
        maSanPham: 'Q006',
        maLoai:'Q'
    }),
];
var done=0;
for(var i=0;i<sanPhams.length;i++){
    sanPhams[i].save(function(err,result){
        done++;
        if(done===sanPhams.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

