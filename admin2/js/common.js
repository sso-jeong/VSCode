$(function () {
    $(".bar a").click(function (e) {

        $(".submenu").slideToggle(100);
        e.preventDefault(); /* a태그 초기화 */

        // $('body').css({
        //     top: '-200px'
        // });

    });
});