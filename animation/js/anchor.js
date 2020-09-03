$(function () {

    /* ^ : 시작값*/
    $("a[href^='#']").click(function (e) {
        // this : 현재 누르려는 그것 / href : 값 가져오기
        var id = $(this).attr("href");
        var target = $(id).offset().top;

        $("html, boby").animate({
            scrollTop: target
        }, 200); // html, body, document 화면

        /* a 속성 사용 시 */
        e.preventDefault();
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".up i").fadeIn(200);
        } else {
            $(".up i").fadeOut(200);
        }

    });
});

$(function () {
    $(".up i").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);

    });

});