/*
 * @Author: mjy
 * @Date: 2020-1-14
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true,
        scrollingSpeed: 1200,
    })
})

window.onload = function() {

    $('.header-nav-l').css('height', $(window).height() + 'px');
    $('.header-nav .tit').click(function(e) {
        if ($('.header-nav').width() > $('.header-nav .tit').width()) {
            $('.header .logo .img2').hide();
            $('.header .logo .img1').show();
            $('.header-nav').animate({ width: '1.1rem' });
            $('.header-nav').parent().addClass('index-main');
            $('.header-nav').css('height', $('.header-nav .tit').height() + .14 + 'rem');
        } else {
            $('.header-nav').css('height', $(window).height() + 'rem');
            $('.header-nav').animate({ width: '5.2rem' });
            $('.header-nav').parent().removeClass('index-main');
            $('.header .logo .img1').hide();
            $('.header .logo .img2').show();
        }
    })

    //首页头条轮播
    jQuery(".index-headline .headline-item").simpleSwitch({
        playTime: 4000,
        type: 'top',
    });


    var swiper = new Swiper('.index-wrap5-box', {
        loop: true,
        navigation: {
            nextEl: '.index-wrap5 .next',
            prevEl: '.index-wrap5 .prev',
        },
    });

    var swiper = new Swiper('.index-wrap1-tab', {
        loop: true,
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

    //回到顶部
    $(".go-top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    })
    $(window).scroll(function() {
        var gun = $(document).scrollTop();
        if (gun <= 400) {
            $(".go-top").hide()
        } else {
            $(".go-top").show()
        }
    });

};