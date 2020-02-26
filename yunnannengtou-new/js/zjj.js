$(function()
{
    $('.slideDown').click(function () {
        var ul = $('.my_ul');
        if (ul.css("display") == "none") {
            ul.slideDown("fast");
        } else {
            ul.slideUp("fast");
        }
    })

    $('.my_ul li a ').click(function () {
        var tag = $('.my_tag')

        var a = $(this).text()
        tag.html("")
        tag.html(a)

    })


})


$(function () {
    $('.wrap3_play').each(function (index) {
        if((index+1)%4==0){
            this.style.marginRight="0"

        }
    })
})


$(function () {
    //filter:alpha(opacity=50);
    $('.wrap2_img,.r_img,.wrap5_rt_top ul li a img,.ul_2 li a img,.area_top>a,.wrap5_rt ul li a span').hover(function () {
        this.style.opacity=0.6
    },function () {
        this.style.opacity=1

    })
})

$(function () {
    function overEllipsis($list, maxCount) {

        $list.each(function (index, item) {
            var itemString = $(item).text();
            if (itemString.length > maxCount) {
                $(item).html(itemString.substring(0, maxCount) + '...');
            }
        });
    }
    function overEllipsis2(list, maxCount) {

        for(var i =0 ; i<list.length;i++){
            if(list[i].innerText.length>maxCount){
                list[i].innerHTML = list[i].innerText.slice(0,maxCount)+"..."
            }

        }


        // list.foreach(function (item,index) {
        //     var itemString = item.innerText;
        //     if (itemString.length > maxCount) {
        //         item.innerHTML= itemString.slice(maxCount)+"..." ;
        //     }
        // });
    }


    overEllipsis($('.wrap3_play p'), 36);

    overEllipsis($('.wrap2_bfc p'), 985);

    overEllipsis($('.wrap2_bfc1 p'), 485);

    overEllipsis($('.font-p p'), 72);

    overEllipsis2(document.querySelectorAll('.ul_2 li p'),81)
    overEllipsis2(document.querySelectorAll('.ul_3 li p'),174)

    overEllipsis2(document.querySelectorAll('.wrap5_lf p'),390)



})
