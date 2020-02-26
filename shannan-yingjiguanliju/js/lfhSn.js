/**
 * @Description:
 * @author lzy
 * @date 2019\8\1 0001
*/

//首页
$(function () {
    //首页轮播1
    $('.lfh-timg li').simpleSwitch({
        num: '.lfh-tind li',
        className: 'lfh-tcur',
        playTime: 4000
    });

    //content1 多行文本溢出
    // 首页
    overEllipsis($('.lfh-con1-tta'),27)
    overEllipsis($('.lfh-con1T-tt p'),56)

    // 领导之窗
    overEllipsis($('.lfh-zrct-text'),145)
    overEllipsis($('.lfh-zcr-bot p'),110)

    //新闻
    overEllipsis($('.lfh-xwm1r-text'),60)


    // 首页tab切换
    jQuery(".lfh-con1U li").tabPanelFun({
        cur:'lfh-con1U-cur',
        tabContent:'.lfh-con1-groups',
        tabItem:'.lfh-con1-m',
        pra:true,
        pradom:'.lfh-con1-tabs'
    });



//新闻中心头条上下轮播
    jQuery(".lfh-con1T-turn .lfh-con1T-tt").simpleSwitch({
        playTime: 3000,
        type: 'top',
        prev: '.lfh-con1-rbox .lfh-icon'
    });


    //新闻轮播2
    $('.lfh-con1M-tI li').simpleSwitch({
        num: '.lfh-con1M-tD li',
        className: 'lfh-cur1',
        text: '.lfh-con1M-tT li',
        playTime: 5000
    });

    //底部轮播3
    $('.lfh-con4-U1 li').simpleSwitch({
        num: '.lfh-con4-U2 li',
        className: 'lfh-cur-c4',
        playTime: 4000
    });


    //概览底部下拉
    dropDownImgText({
        cont: '.lfh-drop',
        tag: '.select',
        text: '.text',
        drop: '.lfh-secU',
        label: '.secL-a',
        select: '.hide'
    });

    //民意征集细览
    $(".lfh-zjxl-fkt .d-ib").click(function(){
        var index=$(this).parent().children('.lfh-zjxl-fkt .d-ib').index(this);
        $(this).parent().siblings('.lfh-zjxl-tab').children('.lfh-zjxl-fk').eq(index).show().siblings('.lfh-zjxl-fk').hide();
        $(this).addClass('fkt-cur');
        $(this).siblings().removeClass('fkt-cur');
    });

    //政务公开概览

    $(" .lfh-zwglrU-li2 a").mouseover(function(){
        $(this).siblings('.lfh-zwgkgl-float').css("display","block");
    });
    $(".lfh-zwglrU-li2 a").mouseout(function(){
        $(this).siblings('.lfh-zwgkgl-float').css("display","none");
    });

});


//细览字体大小
$(function () {//字体大中小
    $(".lfh-zjxlf-t").click(function () {
        //获取para的字体大小
        var thisEle = $(".lfh-zjxl-ttext p").css("font-size");
        //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
        if (thisEle == "0px") {
            thisEle = "16px";
        }
        var textFontSize = parseFloat(thisEle, 10);
        //javascript自带方法
        var unit = thisEle.slice(-2); //获取单位
        var cName = $(this).attr("id");
        if (cName == "large") {
            if (textFontSize <= 24) {
                textFontSize += 2;
            }
            $('#large').addClass("span-cur").siblings().removeClass("span-cur");
        } else if (cName == "small") {
            if (textFontSize > 12) {
                textFontSize -= 2;
            } else {
                textFontSize = 12;
            }
            $('#small').addClass("span-cur").siblings().removeClass("span-cur");
        }
        //设置para的字体大小
        console.log(thisEle);
        $(".lfh-zjxl-ttext p").css("font-size", textFontSize + unit);
    });

    $("#middle").click(function () {
        $(".lfh-zjxl-ttext p").css("font-size", "16px");
        $('#middle').addClass("span-cur").siblings().removeClass("span-cur");

    })
});