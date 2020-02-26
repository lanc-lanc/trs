window.onload = function () {
    $('li.menu2>ul>li').click(function () {
        var str = $(this).parent().prev().prev()[0].innerText;
        $(this).parent().prev().prev()[0].innerText = this.innerText;
        this.innerText = str;
    })

}

