/*
 * @Description: 主入口文件  
 * @Company: TRS  
 * @Date: 2020-01-14 13:23:56 
 * @LastEditors: xhy 
 */
window.onload = function() {
    //头部轮播
    $('.shareimgbox .shareimg').simpleSwitch({
        num: '.cardot span',
        className: 'cur',
        prev: '.pre',
        next: '.next',
        playTime: 4000,
        autoPlay: false
    });
    //最新图片轮播
    $('.latest-pictures .pictures').simpleSwitch({
        prev: '.pre1',
        next: '.next1',
        playTime: 4000,
        autoPlay: false
    });
    //热门专题
    jQuery(".banner-img a").simpleSwitch({
        text: '.banner-txt a',
        num: '.banner-num span',
        className: 'cur',
    });
}