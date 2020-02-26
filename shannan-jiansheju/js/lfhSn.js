/**
 * @Description:
 * @author lzy
 * @date 2019\8\1 0001
*/

//首页
$(function () {

    //首页图片轮播
    $('.lfh-con1M-tI li').simpleSwitch({
        num: '.lfh-con1M-tD li',
        className: 'lfh-cur1',
        text: '.lfh-con1M-tT li',
        playTime: 5000
    });

    //中部轮播
    $('.lfh-con4-U1 li').simpleSwitch({
        num: '.lfh-con4-U2 li',
        className: 'lfh-cur-c4',
        playTime: 4000
    });
    //底部下拉
    dropDownImgText({
        cont: '.lfh-drop',
        tag: '.select',
        text: '.text',
        drop: '.lfh-flink-secU',
        label: '.secL-a',
        select: '.hide'
    });

    // 首页top-tab切换
    jQuery(".lfh-con1U li").tabPanelFun({
        cur:'lfh-con1U-cur',
        tabContent:'.lfh-con1-groups',
        tabItem:'.lfh-con1-m',
        pra:true,
        pradom:'.lfh-con1-tabs'
    });

    // 首页bot-tab切换
    jQuery(".lfh-cbl-title").tabPanelFun({
        cur:'lfh-cbl-cur',
        tabContent:'.lfh-cbl-groups',
        tabItem:'.lfh-cbl-secU',
        pra:true,
        pradom:'.lfh-cbl-tb'
    });

    //民意征集细览切换
    jQuery(".myxx-title1 .btn").tabPanelFun({
        cur:'cur',
        tabContent:'.myxx-tab',
        tabItem:'.myxx-item',
        pra:true,
        pradom:'.xx-title'
    });

    //政务公开概览

    $(" .gklb-l li.tit").mouseover(function(){
        $(this).siblings('.gklb-h').css("display","block");
    });
    $(".gklb-l li.tit").mouseout(function(){
        $(this).siblings('.gklb-h').css("display","none");
    });

    //新闻图片轮播a
    $('.fLb a').simpleSwitch({
        num: '.lbNums span',
        className: 'cur',
        text: '.titles a',
        playTime: 5000
    });

    overEllipsis($('.h .p1'),70)

    //新闻tab切换
    jQuery(".table-tit a").tabPanelFun({
        cur:'tk-act',
        tabContent:'.table-items',
        tabItem:'.items-s',
        pra:true,
        pradom:'.table-tit'
    });

});