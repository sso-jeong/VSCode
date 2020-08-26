$(function () {
    $("#search-btn").click(function () {
        var str = $("#words").val();
        if ($.trim(str) == "")
            alert("검색어를 입력하세요.");
        $("#words").focus();
        return false;
    });

    $("#chkAll").click(function () {

        if ($("#chkAll").is(":checked")) {
            $(".chk").prop("checked", true)

        } else {
            $(".chk").prop("checked", false)
        }
    });

});