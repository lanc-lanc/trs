window.onload = function() {

    //首页头条轮播
    jQuery(".index-headline .headline-item").simpleSwitch({
        playTime: 4000,
        type: 'top',
    });

    var swiper = new Swiper('.index-wrap1-tab', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.index-wrap1-tab .pagination',
            clickable: true,
        },
    });

    $('.index-switch').tabSwitch({
        tabHead: '.index-tit .tit',
        tabCont: '.index-item',
        cur: 'cur'
    });

    $('.home-switch').tabSwitch({
        tabHead: '.home_tit',
        cur: 'cur'
    });

    //专题轮播
    var swiper = new Swiper('.lym-swiper', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.lym-swiper .lym-point',
            clickable: true,
        },
    });

    // 图片中心轮播
    jQuery(".roll-items").simpleRoll({
        space:-100,
        type:'left',
        prev:'.ban-roll-left',
        next:'.ban-roll-right'
    });
};
