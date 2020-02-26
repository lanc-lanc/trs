$(function(){
    $(".gklb-l li.tit a").mouseover(function(){
        var index=$(this).parent().children('.gklb-l li.tit a').index(this);
        $(this).parent().siblings('.gklb-h').show();
    });
    $(".gklb-l li.tit a").mouseout(function(){
        var index=$(this).parent().children('.gklb-l li.tit a').index(this);
        $(this).parent().siblings('.gklb-h').hide();
    });
});