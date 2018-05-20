var express = require('express');
var router = express.Router();

var sanPham = require('../models/sanPham');

// Display list of all sản phẩm
exports.sanPham_list = function(req, res) {
    sanPham.find({maLoai: "A"}, function(err, docs){
    var sanPhamChunks =[];
    var chunkSize = 4;
    for(var i=0;i<docs.length;i += chunkSize){
      sanPhamChunks.push(docs.slice(i, i+ chunkSize));
    }
    res.render('frontend/home/aothoitrang', { title: 'Áo thời trang', sanPhams: sanPhamChunks });
  });
};

//router.post ('/:id', function(req, res, next){
//	var id = req.body.id;
//	res.redirect('/san-pham/' + id);
//})

//outer.get('/:id', function(req, res) {
//    var id = req.params.id;
//    sanPham.find({maLoai:id}, function(err, docs){
//    var sanPhamChunks =[];
//    var chunkSize = 4;
//    for(var i=0;i<docs.length;i += chunkSize){
//      sanPhamChunks.push(docs.slice(i, i+ chunkSize));
//    }
//    res.render('frontend/home/aothoitrang', { title: 'Áo thời trang', sanPhams: sanPhamChunks });
// });
//});


// Display detail page for a specific sản phẩm
exports.sanPham_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

