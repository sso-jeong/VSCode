$(function () {
    $("#btn").click(function () {
        var str = $("#search").val();
        if ($.trim(str) == "") {
            alert("검색어를 입력하세요.");
            $("#search").focus();
            $("#search").val("");
            return false;
        }
    });

});
