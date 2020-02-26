/*
 * @Author: ln 
 * @Date: 2018-07-18 13:32:46 
 * @Last Modified by: ln
 * @Last Modified time: 2018-11-06 11:50:41
 */
"use strict";

// 政府公报手动单张轮播 
function singleLb($list, $lf, $rt, $tab, $tabItem, left, minCount) {
    var count = 0;
    $tab.eq(count).children().addClass('cur');
    $tab.eq(count).find('.arrow').show();
    $tabItem.eq(0).show();
    if ($list.children().length > minCount) {

        $rt.show();
        $lf.hide();
        $rt.click(function (e) {
            
            if($list.is(":animated")) return;
            if (count < ($list.children().length - minCount)) {
                count++;
                $list.animate({ left: -left * count + 'px' }, 500);
                $lf.show();
            } else {
                $rt.hide();
            }
            
        });

        $lf.click(function (e) {
            if($list.is(":animated")) return;
            if (count > 0) {
                count--;
                $list.stop(true,false).animate({ left: -left * count + 'px' }, 500);
                $rt.show();
            } else {
                $lf.hide();
            }
        });

    } else {

        $lf.hide();
        $rt.hide();

    }
}

// 政府公报hover
function repHover() {
    var $item = $('.report-year');
    var $bar = $('.report-tab-item');

    $item.mouseenter(function () {
        
        $(this).find('.arrow').show();
        $(this).siblings().find('.arrow').hide();
        $(this).find('.report-link').addClass('cur');
        $(this).siblings().find('.report-link').removeClass('cur');

        $bar.eq($item.index(this)).show();
        $bar.eq($item.index(this)).siblings().hide();

    });

}

// 元素向右缓慢移动
function moveBar() {

    var eventIn = 'mouseenter';
    var eventOut = 'mouseleave';
    var $item = $('.roll-item');
    var $bar = $('.roll-item-bg');
    var $span = $('.roll-link span');
    $item.on(eventIn, function () {
        if ($bar.eq($item.index(this)).is(":animated")) {
            $bar.eq($item.index(this)).stop(true, true);
        }
        $bar.eq($item.index(this)).animate({ 'width': '100%' }, 400);
        $span.eq($item.index(this)).addClass('cur');
    });

    $item.on(eventOut, function () {
        $bar.eq($item.index(this)).animate({ 'width': '3' }, 400);
        $span.eq($item.index(this)).removeClass('cur');
    });

    $('.roll-link').on('click', function () {
        $(this).addClass('roll-link');
    });
}

// 下拉列表
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

            $item.removeClass('plus');
            $item.addClass('cut');

            return false;
        } else {

            $item.siblings('ul').hide();

            $item.removeClass('cut');
            $item.addClass('plus');

            return false;
        }
    }

    function addPlus($item) {
        if ($item.siblings('ul').size()) {
            $item.addClass('plus');
            $item.on('click', function () {
                siBlingsPack($(this).parent().siblings());
                recy($(this));
            })
        }
    }

    function siBlingsPack($item) {
        $item.find('ul').hide();
        $item.children('.a').each(function(index, item) {
            if($(item).hasClass('cut')) {
                $item.children('.a').addClass('plus');
            }
        });
    }
}
// 日期
function setDate(option) {
    var dayStrDom = option.dayStrDom;
    var calendarDate = new Date();
    // 公历
    var year = calendarDate.getFullYear();
    var month = calendarDate.getMonth() + 1;
    var date = calendarDate.getDate();
    var day = calendarDate.getDay();
    var dayStr = '';
    switch (day) {
        case 0: dayStr = '周天'; break;
        case 1: dayStr = '周一'; break;
        case 2: dayStr = '周二'; break;
        case 3: dayStr = '周三'; break;
        case 4: dayStr = '周四'; break;
        case 5: dayStr = '周五'; break;
        case 6: dayStr = '周六'; break;
        default: dayStr = ''; break;
    }
    var calendarDateObj = {'year':year, 'month':month, 'date':date, 'dayStr':dayStr };
    // $(option).text(calendarDateObj.year + '-' + calendarDateObj.month + '-' + calendarDateObj.date + ' ' + calendarDateObj.dayStr);
    $(dayStrDom).text(calendarDateObj.dayStr);
}

// 天气
function template(option) {
    var cityName = option.cityName,
        weatherDom = option.weatherDom,
        temperatureDom = option.temperatureDom;
    cityName = Trim(cityName, 'g');
    var result = {};

    $.ajax({
        url:"http://api.map.baidu.com/telematics/v3/weather",
        type:"get",
        data:{
            location:cityName,
            output:'json',
            ak:'YGtqUyHOKe5xtaDzi2pmMZVEMdDNlG8F'
        },
        dataType:"jsonp",
        success:function(data){
            var pm = data.results[0].pm25;
            var temperature = '';
            var temperatureReal = data.results[0].weather_data[0].temperature;
            var temperatures = Trim(data.results[0].weather_data[0].temperature, 'g').split('~');
            var weather = data.results[0].weather_data[0].weather;
            var temArr = [];
            for(var i = 0; i < temperatures.length; i++) {
                temArr[i] = parseInt(temperatures[i]);
            }
            temArr.sort();
            temperature += temArr[0] + '~' + temArr[1] + '℃';

            result.pm = pm;
            result.temperature = temperature;
            result.weather = weather;
            result.temperatureReal = temperatureReal;
            
            // return result;
            $(weatherDom).text(result.weather);
            $(temperatureDom).text(result.temperatureReal);
        }
    }); 
}

// 字符去空格、去[]
function Trim(str,is_global){

    var result;

    result = str.replace(/(^\s+)|(\s+$)/g,"");

    result = result.replace('[', '');
    result = result.replace(']', '');

    if(is_global.toLowerCase()=="g"){

        result = result.replace(/\s/g,"");

    }

    return result;
}

// 多行文字超出用省略号显示
function overEllipsis($list, maxCount) {
    $list.each(function (index, item) {
        var itemString = $(item).text();
        if (itemString.length > maxCount) {
            $(item).html(itemString.substring(0, maxCount) + '...');
        }
    });
}

// tab切换省政府文件
function tabSwitch(option) {
    var items = $(option.tab),
        event = option.event||'mouseover',
        cur = option.cur||'cur',
        tabHead = option.tabHead,
        tabCont = option.tabCont;
    items.each(function (index, item) {
        var btns = $(item).find(tabHead);
        var cons = $(item).find(tabCont);
        $(btns).eq(0).addClass(cur);
        $(cons).hide();
        $(cons).eq(0).show();
        $(btns).on(event, function () {
            $(this).addClass(cur).siblings().removeClass(cur);
            $(cons).eq($(btns).index(this)).show().siblings().hide();
        });
        
    });
}

// tab切换
function tabItem(option) {
    var items = $(option.tab),
        event = option.event||'mouseenter',
        cur = option.cur||'cur',
        tabHead = option.tabHead,
        tabCont = option.tabCont;
    items.each(function (index, item) {
        var btns = $(item).children()[0];
        var cons = $(item).children()[1];
        btns = $(btns).children(tabHead);
        cons = $(cons).children(tabCont);
        $(btns).eq(0).addClass(cur);
        $(cons).hide();
        $(cons).eq(0).show();
        $(btns).on(event, function () {
            $(this).addClass(cur).siblings().removeClass(cur);
            $(cons).eq($(btns).index(this)).show().siblings().hide();
        });
        
    });
}

/*
*点击展示更多
*param参数详解如下：
*btn:点击的元素
*cont:显示内容的元素
*text:提示点击文字
*arrow:提示箭头
*/
function switchShow(option) {
    var btn = option.btn||'',
        cont = option.cont||'',
        height = $(cont).height() + 'px',
        text = option.text?$(option.text).text():'',
        arrow = option.arrow||'',

        textUp = '点击收起',
        flag = false;
    $(btn).on('click', function () {
        flag = !flag;
        $(arrow).css({ 'transform': 'rotate(' + -flag * 180 + 'deg)' });
        if(flag) {
            $(cont).css({height:'auto'});
            $(option.text).text(textUp);
        } else {
            $(cont).css({height:height});
            $(option.text).text(text);
        }
    });
}

// 点击改变输入框内容
function changeInp(option) {
    var inp = option;
    var prompt = $(inp).val();
    $(inp).on('click', function (e) {
        var e = event || e;
        $(this).val('');
        $(this).css({color: '#333'});
        $(document).on("click", function () {
            if($(inp).val() =='') {
                $(inp).css({color: '#fff'});
                $(inp).val(prompt);
            }
        });
        if(e.stopPropagation) {
            e.stopPropagation();
        }
    });
}

/*
*联动图片播放
*大图图片数量和图片列表的图片数量要一致
*option参数说明：没有特殊说明类型则为string
*prev: 大图的向前播放按钮,
*next: 大图的向后播放按钮,
*ptNext: 图片列表向后播放按钮,
*ptPrev: 图片列表向前播放按钮,
*banner: 大图播放项,
*text: 大图文字项,
*link: 小图列表项,
*linkSpace: 类型 number 小图之间的间距, 默认0
*linkType: 小图移动的方向，默认: top
*type: 大图切换方向top或left,默认：left
*autoPlay 类型 boolean 是否轮播,默认:true;
*playTime 类型 number 自动播放时间，默认:4000;
*direction 大图自动播放的顺序  默认：next;
*time  类型 number  切换过渡时间，默认：300;
*cur 小图的效果类名， 默认: 'cur'
*/
function linkSwitch(option) {

    var $banner = option.banner?$(option.banner):null,
        $link = option.link?$(option.link):null,
        $text = option.text?$(option.text):null;

    var playTime = option.playTime||4000,
        linkSpace = option.linkSpace||0,
        direction = option.direction||'next',
        linkType = option.linkType||'top',
        type = option.type?option.type:'left',
        autoPlay=option.autoPlay?option.autoPlay:true,
        time=option.time||300,
        cur=option.cur||'cur';

    var unit = type=='top'? $banner.parent().height():$banner.parent().width(),
        match = linkType=='top'? $link.height()+linkSpace:$link.width()+linkSpace,
        len = $banner? $banner.length:0,
        index = 0,
        css={},
        cssLink={};

    init();

    if(autoPlay){
        var play=setInterval(bannerPlay,playTime);
        $banner.hover(function(){
            clearInterval(play);
            play=null;
        },function(){
            play= setInterval(bannerPlay,playTime);
        })
    }

    if($link) {
        $link.click(function () {
            if($banner.is(":animated")) return;
            if($link.is(":animated")) return;
            index = $(this).index();
            configShow();
            index=index<0?len-1:index;
            $(this).addClass(cur).siblings().removeClass(cur);
            move();
        });
    }

    function init(){
        $banner.eq(index).show().siblings().hide();
        $link.each(function(){
            var _i=$(this).index();
            $(this).show();
            cssLink[linkType]=(_i-index)*match;
            $(this).css(cssLink);
        });
        configShow();
    }

    function bannerPlay(){
        if($banner.is(":animated")) return;
        index++;
        index=index>=len?0:index;
        move();
        configShow();
        linkPlay();
    }

    function move(){
        $banner.eq(index).fadeIn(time).siblings().fadeOut(time);
    }

    function linkPlay() {
        for(var i=0;i<len;i++){
          var $item=$link.eq(i);
          var type = linkType;
          if($item.position()[type]<=-match){
            var perLeft=0;
            if(i==0){
              perLeft=$link.eq(len-1).position()[type];
            }else{
              perLeft=$link.eq(i-1).position()[type];
            }
            cssLink[type]=perLeft+match;
            $item.css(cssLink);
          }
          var nowLeft=$item.position()[type];
          cssLink[type]=nowLeft-match;
          $item.animate(cssLink,time);
        } 
    }
 
    function configShow() {
        if($text) {
            $text.eq(index).show().siblings().hide();
        }
        $link.eq(index).addClass(cur).siblings().removeClass(cur);
    }
    
}

// 点击下拉
function navSwitch(option) {
    var flag = false;
    var $item = $(option.item)||null,
        cont = option.cont||'',
        event = option.event||'click',
        cur = option.cur||'cur'
    $item.on(event, function () {
        flag = !flag;
        $(this).parent().siblings().children(cont).hide();
        $(this).parent().siblings().children().removeClass(cur);
        if(flag) {
            $(this).parent().children(cont).show();
            $(this).addClass(cur);
        } else {
            $(this).parent().children(cont).hide(); 
            $(this).removeClass(cur);
        }
    });
}

// 多个点击展开/收起
function tabSwitches(option) {
    var items = option.items,
        btn = option.btn,
        cont = option.cont,
        flag = false,
        height = $(cont).height() + 'px',
        text = option.text?option.text:'',
        textUp = '点击收起',
        event = option.event||'click';
    $(items).children(btn).on(event, function() {
        flag = !flag;
        if(flag) {
            $(items).eq($(items).children(btn).index(this)).css({height:'auto'});
            $(this).text(textUp);
        } else {
            $(items).eq($(items).children(btn).index(this)).css({height:height});
            $(this).text(text);
        }
    })
}

// 点击切换
function showTaggle(option) {
    var items = option.items,
        btn = option.btn,
        cont = option.cont,
        event = option.event||'click';
    $(items).children().children(btn).on(event, function() {
        if($(this).hasClass('plus')) {
            $(items).eq($(items).children().children(btn).index(this)).children(cont).show();
            $(this).removeClass('plus');
            $(this).addClass('cut');
        } else {
            $(items).eq($(items).children().children(btn).index(this)).children(cont).hide();
            $(this).addClass('plus');
            $(this).removeClass('cut');
        }
    })
}

// 开关弹窗
function switchPop(option) {
    var btns = option.btns,
        items = option.items || [],
        flag = option.flag == undefined || option.flag == true ? true : false,
        event = option.event ? option.event : "click";
    btns.forEach(function(item, index) {
        $(item).on(event, function() {
            items.forEach(function(item, index ) {
                if(flag) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            })
        });
    })
}

// 类切换
function curTaggle(option) {
    var btns = option.btns,
        cur = option.cur ? option.cur : 'cur',
        event = option.event ? option.event : "click";
    $(btns).on(event, function () {
        $(this).addClass(cur).siblings().removeClass(cur);
    })
}

//背景切换
function bgSwitch(items){
    var curIndex=0;
    // 大于1张图片轮播
    if(items.length>1){
        $(items[curIndex]).fadeIn();
        setInterval(function () {
            if(curIndex<items.length-1){
                curIndex++;
            }else {
                curIndex=0;
            }
            $(items[curIndex]).fadeIn();
            $(items[curIndex]).siblings().fadeOut();
        },4000);
    }
}

// 浏览器版本检测
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return -1;//不是ie浏览器
    }
}