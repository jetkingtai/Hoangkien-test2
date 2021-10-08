var nextBtn = document.querySelector(".next-btn");
var preBtn = document.querySelector(".pre-btn");
var sliderMain = document.querySelector(".slice-show");
var listImg = document.querySelectorAll(".banner-content");
var dotBtn = document.querySelectorAll(".dot");
var imgLength = listImg[0].offsetWidth;
var position = 0;
var autoSlice = function(position) {
    if (position == 0) {
        dotBtn[0].classList.add('mau');
        dotBtn[2].classList.remove('mau');
        dotBtn[1].classList.remove('mau');
    };
    if (position == -imgLength) {
        dotBtn[1].classList.add('mau');
        dotBtn[0].classList.remove('mau');
        dotBtn[2].classList.remove('mau');
    }
    if (position == ((-2)*imgLength)) {
        dotBtn[1].classList.remove('mau');
        dotBtn[0].classList.remove('mau');
        dotBtn[2].classList.add('mau');
    }
};
setInterval(function() {
    position = position - imgLength;
    if (Math.abs(position) < (imgLength*listImg.length) ) {
        sliderMain.style = `transform: translateX(${position}px)`;
    }else {
        position = 0;
        sliderMain.style = `transform: translateX(${position}px)`;
    }
    autoSlice(position);
}, 7000);

nextBtn.addEventListener("click", function(){
    position = position - imgLength;
    if (Math.abs(position) < (imgLength*listImg.length) ) {
        sliderMain.style = `transform: translateX(${position}px)`;
    }else {
        position = 0;
        sliderMain.style = `transform: translateX(${position}px)`;
    } 
    autoSlice(position);
});
preBtn.addEventListener("click", function(){
    if(position == 0) {
        position = ((-2)*imgLength);
        sliderMain.style = `transform: translateX(${position}px)`;
    } else {
        position = position + imgLength;
        sliderMain.style = `transform: translateX(${position}px)`;
    }
    autoSlice(position);
})
dotBtn[0].addEventListener("click", function(){
    position = 0;
    sliderMain.style = `transform: translateX(${position}px)`;
    autoSlice(position);
})
dotBtn[1].addEventListener("click", function(){
    position = -imgLength;
    sliderMain.style = `transform: translateX(${position}px)`;
    autoSlice(position);
})
dotBtn[2].addEventListener("click", function(){
    position = ((-2)*imgLength);
    sliderMain.style = `transform: translateX(${position}px)`;
    autoSlice(position);
})

// -------------slice prodcut iphone---------

var listProduct = document.querySelectorAll(".product-slice");
var productLength = listProduct[0].offsetWidth;
var liceShow = document.querySelector(".slice-show-product");
var position1 = 0;
var nextBtnProduct = document.querySelector(".product-next-btn");
var preBtnProduct = document.querySelector(".product-pre-btn");
setInterval(function() {
    position1 = position1 - productLength;
    if (Math.abs(position1) < (productLength*listProduct.length) - (productLength*4) ) {
        liceShow.style = `transform: translateX(${position1}px)`;
    }else {
        position1 = 0;
        liceShow.style = `transform: translateX(${position1}px)`;
    }
}, 5000);

nextBtnProduct.addEventListener("click", function(){
    position1 = position1 - productLength;
    if (Math.abs(position1) < (productLength*listProduct.length) - (productLength*4) ) {
        liceShow.style = `transform: translateX(${position1}px)`;
    }else {
        position1 = 0;
        liceShow.style = `transform: translateX(${position1}px)`;
    } 
});
preBtnProduct.addEventListener("click", function(){
    if(position1 == 0) {
        position1 = -((productLength*listProduct.length) - (productLength*4) - productLength);
        liceShow.style = `transform: translateX(${position1}px)`;
    } else {
        position1 = position1 + productLength;
        liceShow.style = `transform: translateX(${position1}px)`;
    }
})
// ------------------slice ipad-----------------
var listProductipad = document.querySelectorAll(".product-slice-ipad");
var productLengthipad = listProductipad[0].offsetWidth;
var liceShowipad = document.querySelector(".slice-show-product-ipad");
var position2 = 0;
var nextBtnProductipad = document.querySelector(".product-next-btn-ipad");
var preBtnProductipad = document.querySelector(".product-pre-btn-ipad");

setInterval(function() {
    position2 = position2 - productLengthipad;
    if (Math.abs(position2) < (productLengthipad*listProductipad.length) - (productLengthipad*4) ) {
        liceShowipad.style = `transform: translateX(${position2}px)`;
    }else {
        position2 = 0;
        liceShowipad.style = `transform: translateX(${position2}px)`;
    }
}, 5000);

nextBtnProductipad.addEventListener("click", function(){
    position2 = position2 - productLengthipad;
    if (Math.abs(position2) < (productLengthipad*listProductipad.length) - (productLengthipad*4) ) {
        liceShowipad.style = `transform: translateX(${position2}px)`;
    }else {
        position2 = 0;
        liceShowipad.style = `transform: translateX(${position2}px)`;
    } 
});
preBtnProductipad.addEventListener("click", function(){
    if(position2 == 0) {
        position2 = -((productLengthipad*listProductipad.length) - (productLengthipad*4) - productLengthipad);
        liceShowipad.style = `transform: translateX(${position2}px)`;
    } else {
        position2 = position2 + productLengthipad;
        liceShowipad.style = `transform: translateX(${position2}px)`;
    }
})
// ------------------slice linhkien-----------------
var listProductlinhkien = document.querySelectorAll(".product-slice-linhkien");
var productLengthlinhkien = listProductlinhkien[0].offsetWidth;
var liceShowlinhkien = document.querySelector(".slice-show-product-linhkien");
var position3 = 0;
var nextBtnProductlinhkien = document.querySelector(".product-next-btn-linhkien");
var preBtnProductlinhkien = document.querySelector(".product-pre-btn-linhkien");

setInterval(function() {
    position3 = position3 - productLengthlinhkien;
    if (Math.abs(position3) < (productLengthlinhkien*listProductlinhkien.length) - (productLengthlinhkien*4) ) {
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    }else {
        position3 = 0;
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    }
}, 5000);

nextBtnProductlinhkien.addEventListener("click", function(){
    position3 = position3 - productLengthlinhkien;
    if (Math.abs(position3) < (productLengthlinhkien*listProductlinhkien.length) - (productLengthlinhkien*4) ) {
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    }else {
        position3 = 0;
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    } 
});
preBtnProductlinhkien.addEventListener("click", function(){
    if(position3 == 0) {
        position3 = -((productLengthlinhkien*listProductlinhkien.length) - (productLengthlinhkien*4) - productLengthlinhkien);
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    } else {
        position3 = position3 + productLengthlinhkien;
        liceShowlinhkien.style = `transform: translateX(${position3}px)`;
    }
})
// ------------------slice phukien-----------------
var listProductphukien = document.querySelectorAll(".product-slice-phukien");
var productLengthphukien = listProductphukien[0].offsetWidth;
var liceShowphukien = document.querySelector(".slice-show-product-phukien");
var position4 = 0;
var nextBtnProductphukien = document.querySelector(".product-next-btn-phukien");
var preBtnProductphukien = document.querySelector(".product-pre-btn-phukien");

setInterval(function() {
    position4 = position4 - productLengthphukien;
    if (Math.abs(position4) < (productLengthphukien*listProductphukien.length) - (productLengthphukien*4) ) {
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    }else {
        position4 = 0;
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    }
}, 5000);

nextBtnProductphukien.addEventListener("click", function(){
    position4 = position4 - productLengthphukien;
    if (Math.abs(position4) < (productLengthphukien*listProductphukien.length) - (productLengthphukien*4) ) {
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    }else {
        position4 = 0;
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    } 
});
preBtnProductphukien.addEventListener("click", function(){
    if(position4 == 0) {
        position4 = -((productLengthphukien*listProductphukien.length) - (productLengthphukien*4) - productLengthphukien);
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    } else {
        position4 = position4 + productLengthphukien;
        liceShowphukien.style = `transform: translateX(${position4}px)`;
    }
})
