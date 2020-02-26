/**

 *Created by tk on
 */
$(function () {
    $('.tk-tm').each(function(index, item) {
        var banner = $(item).find('.fLb a'),
            text = $(item).find('.titles .lb-b');
        num = $(item).find('.lbNums span');
        jQuery(banner).SwitchFade({
            text: text,
            num: num,
            playTime: 3000,
        });
    });

    //云能信息-企业文化（二级页面）字数限制

    overEllipsis($('.tk-u .p2'), 70);

    overEllipsis($('.fl2'), 1400);
})


