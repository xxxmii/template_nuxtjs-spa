$(function () {
    /* スムーズスクロール */
    $('a[href^="#"]').click(function () {
        if (window.matchMedia("(min-width: 769px)").matches) {
            var headerHight = 55;
        } else {
            var headerHight = 0;
        }
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight; //ヘッダーの分高さをずらす
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});