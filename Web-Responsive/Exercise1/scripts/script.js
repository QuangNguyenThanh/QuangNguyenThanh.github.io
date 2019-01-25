$(document).ready(function() {
    $("#jptext__setting").change(function() {
        if(this.checked) { // hide text japan
            $(".jptext").removeAttr("style");
        }else {
            $(".jptext").css("opacity","0");
        }
    });
    $("#engtext__setting").change(function() {
        if(this.checked) { // hide text english
            $(".engtext").removeAttr("style");
        }else {
            $(".engtext").css("opacity","0");
        }
    });
    $("#sad").click(function() {
        changeBackground("#sad", "#smile");
        $("#block__left-js").hide();
        $("#block__right-js").show();
        $("#woman__right").addClass("woman");
        $(".block__right__woman").removeClass("content__woman__right");
    });
    $("#smile").click(function() {
        changeBackground("#smile", "#sad");
        $("#block__left-js").show();
        $("#block__right-js").hide();
        $(".block__right__woman").addClass("content__woman__right");
        $("#woman__right").removeClass("woman");
    });

    var checkSize = false;
    $(window).resize(function() {
        if ($(window).width() >= 1280) {
            checkSize = false;
            changeBackground("#smile", "#sad");
            $(".block__right__woman").addClass("content__woman__right");
            $("#woman__right").removeClass("woman");
            $("#block__left-js, #block__right-js").show();
        } else {
            if (!checkSize) {
                checkSize = true;
                $("#block__right-js").hide();
            } 
        }
    });
});

function changeBackground(idA, idB) {
    $(idA).css("background", "#d8137e"); //Active
    $(idB).css("background", "#cecece");
}
