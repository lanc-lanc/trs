/**
 * @Description:
 * @author lzy
 * @date 2019\8\1 0001
 */

//首页
$(function () {

  //首页头条上下轮播
  jQuery(".index-headline-tab .index-headline-item").simpleSwitch({
    playTime: 2000,
    type: 'top',

  });
  //首页尾部下拉
  dropDownImgText({
    cont: '.xhy-drop-select',
    tag: '.select',
    text: '.text',
    arrow: '.arrow',
    drop: '.xhy-dropdown-menu',
    label: '.a',
    select: '.hide'
  });
  //首页轮播
  $('.xhy-carousel-img li').simpleSwitch({
    num: '.xhy-carousel-dot li',
    className: 'xhy-cur',
    text: '.xhy-carousel-text li',
    playTime: 4000,

  });
  //首页tab切换
  tabSwitch({
    tab: '.xhy-c2-tab',
    tabHead: '.xhy-c2-taba',
    tabCont: '.xhy-c2-items .xhy-c2-item',
    cur: 'xhy-active',
  });
  tabSwitch({
    tab: '.xhy-c3rttlf',
    tabHead: '.xhy-c2-taba',
    tabCont: '.xhy-c2-items .xhy-c2-item',
    cur: 'xhy-active',
  });
  //首页轮播2
  jQuery('.xhy-carousel-s ul').bannerRollLR({
    len: 4,
    type: 'left',
    space: 30,
    prev: '.xhy-pre',
    next: '.xhy-next'
  });

  //新闻底部轮播
  $('.lfh-con4-U1 li').simpleSwitch({
    num: '.lfh-con4-U2 li',
    className: 'lfh-cur-c4',
    playTime: 4000
  });


  //民意征集细览切换
  jQuery(".myxx-title1 .btn").tabPanelFun({
    cur: 'cur',
    tabContent: '.myxx-tab',
    tabItem: '.myxx-item',
    pra: true,
    pradom: '.xx-title'
  });

  //政务公开概览

  $(" .gklb-l li.tit").mouseover(function () {
    $(this).siblings('.gklb-h').css("display", "block");
  });
  $(".gklb-l li.tit").mouseout(function () {
    $(this).siblings('.gklb-h').css("display", "none");
  });

  //新闻图片轮播a
  $('.fLb a').simpleSwitch({
    num: '.lbNums span',
    className: 'cur',
    text: '.titles a',
    playTime: 5000
  });

  overEllipsis($('.h .p1'), 70)

  //新闻tab切换
  jQuery(".table-tit a").tabPanelFun({
    cur: 'tk-act',
    tabContent: '.table-items',
    tabItem: '.items-s',
    pra: true,
    pradom: '.table-tit'
  });

});