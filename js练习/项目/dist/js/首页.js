//划过显示 对戒
let  duijie=document.getElementById("duijie");
let tanchu=document.getElementById("tanchu1");
duijie.onmouseover=function(){
        tanchu.style.display="block";
        tanchu.onmouseover=function(){
            tanchu.style.display="block"
        }
}
duijie.onmouseout=function(){
    tanchu.style.display="none";
    tanchu.onmouseout=function(){
        tanchu.style.display="none";
    }
}
//轮播图
//从挑选款式开始
let ddv=document.getElementById("ddv");
let kuanshi=document.getElementById("wen2");
kuanshi.onmouseover=function(){
    ddv.style.display="block"
    ddv.onmouseover=function(){
        ddv.style.display="block"
    }
}
    kuanshi.onmouseout=function(){
    ddv.style.display="none"
    ddv.onmouseout=function(){
        ddv.style.display="none";
    }
}
// 轮播图
var swiper1 = new Swiper(".lun1", {
    slidesPerView: 1, //一张展示图片数
    loop: true, //是否无限轮播
    spaceBetween: 30, //如果一张上有多张图，图与图之间的间距
    centeredSlides: true, //默认居左，true为居中
    autoplay: {
        delay: 2000, //自动轮播速度单位毫秒
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, //下面小按钮
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, //左右箭头
});
var swiper2 = new Swiper(".lun2", {
    slidesPerView: 1, //一张展示图片数
    loop: true, //是否无限轮播
    spaceBetween: 30, //如果一张上有多张图，图与图之间的间距
    centeredSlides: true, //默认居左，true为居中
    autoplay: {
        delay: 3000, //自动轮播速度单位毫秒
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, //下面小按钮
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // }, //左右箭头
});
