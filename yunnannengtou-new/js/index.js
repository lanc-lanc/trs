$(function() {


    $(".menu").click(function() {
        if ($(this).hasClass('cur')) {
            $('.menu-box').hide();
            $(this).removeClass('cur');
        } else {
            $('.menu-box').show();
            $(this).addClass('cur');
        }
    });

    jQuery(".f-drop .tag").dropDownFun({
        tagSiblings: '.f-drop-l',
        optionItem: '.f-drop-l li',
        optionBool: true
    });

});


//目录导航

"use strict";
$(document).ready(function() {

    $(".menu-box .list1>li ul").hide();
    dropDown($('.menu-box a'));

});

function dropDown($item) {

    itemEach($item, addPlus);

    function itemEach($item, handler) {
        for (var i = 0; i < $item.length; i++) {
            handler($item.eq(i));
        }
    }

    function recy($item) {

        if ($item.hasClass('plus')) {

            $item.siblings('ul').show();

            return false;
        }
    }

    function addPlus($item) {
        if ($item.siblings('ul').size()) {
            if ($item.hasClass('cut')) {

            } else {
                $item.addClass('plus');
            }
            $item.on('mouseenter', function() {
                $(this).parent('li').addClass('cur');
                recy($(this));
            })
        }
    }

    /**
     * [text 改滚动只能像下面设置这几个配置项]
     * [type默认就可以，也可以设置为top，其他不好再配置了]
     * @type {String}
     */
    jQuery(".banner-img a").simpleSwitch({
        text: '.banner-txt a',
        prev: '.banner-left',
        next: '.banner-right',
        num: '.banner-num span',
        className: 'cur',
        playTime: 3000,
        indy: '.ban-dy',
        lendy: '.ban-len',
        type: 'left',
        // direction:'left',
    });




    //首页定时切换图片new
    setTimeout(changeP(1))

    function changeP(num) {

        if(num>4){num = 1}
        $('.yxal>img').attr('src','images/sy-lb'+num+'.png')
        num++;
        setTimeout(function () {
            changeP(num);
        },3000);
    }
    // 优秀案例图片切换
    var index = 0;
    window.exchangeImg = setInterval(timer, 2000);

    function timer() {
        if (index > 2) {
            index = 0;
        } else {
            index++;
            changeImg(index);
        }
    }

    function changeImg(index) {
        var big = $(".exchangeImg_con .img_con").eq(indexA - 1).children(".img_big").find("img").attr("src");
        var small = $(".exchangeImg_con .img_con").eq(indexA - 1).find(".img_small li").eq(index - 1).find("img").attr("src");
        $(".exchangeImg_con .img_con").eq(indexA - 1).children(".img_big").find("img").attr("src", small);
        $(".exchangeImg_con .img_con").eq(indexA - 1).find(".img_small li").eq(index - 1).find("img").attr("src", big);
    }

    // 优秀案例分页切换
    var indexA = 1;
    $(".excellentTxt .page .pre").click(function() {
        indexA--;
        if (indexA < 1) {
            indexA = 4;
        }
        commonChange();
        clearInterval(window.exchangeImg);
        window.exchangeImg = setInterval(timer, 2000)
    });

    $(".excellentTxt .page .next").click(function() {
        indexA++;
        if (indexA > 4) {
            indexA = 1;
        }
        commonChange();
        clearInterval(window.exchangeImg);
        window.exchangeImg = setInterval(timer, 2000)

    });

    function commonChange() {
        $(".excellentTxt .page .first").text('0' + indexA);
        $(".excellentTxt .txt_item_con .txt_item").eq(indexA - 1).show().siblings().hide();
        $(".exchangeImg_con .img_con").eq(indexA - 1).show().siblings().hide();
        // $(".exchangeImg_con .img_con").eq(indexA - 1).css("visibility", "visible").siblings().css("visibility", "hidden");
    }

    $(".section-nav .section-nav-switch").hover(function() {
        $(this).children(".section-nav-label").show();
    }, function() {
        $(this).children(".section-nav-label").hide();
    });
}