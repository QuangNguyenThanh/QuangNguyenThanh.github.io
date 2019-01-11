var locate = 0;
var delay = 1000;
var isPopup = false;
$(document).ready(function(){
    //Event click in menu
    $(".about").click(function() {
        if (!isPopup) {
            var about = $(this).attr("id");
            var src = $(this).attr("src");
            var index = about.split("-");
            src = src === "images/about" + index[1] + "_mb.jpg" ?
            "images/about" + index[1] + "_mb_hover.jpg" : "images/about" + index[1] + "_mb.jpg";
    
            if (locate == index[1]) {
                $('#hidden-' + index[1]).animate( {
                    height: "toggle"
                });
                $(this).attr("src", src);
                locate = 0;
                return;
            } else {
                var srcPre = $("#about-" + locate).attr("src");
                srcPre = srcPre === "images/about" + locate + "_mb.jpg" ?
                "images/about" + locate + "_mb_hover.jpg" : "images/about" + locate + "_mb.jpg";
                $("#about-" + locate).attr("src", srcPre);
                locate = index[1];
                $(this).attr("src", src);
                $(".hidden").hide();
                $('#hidden-' + index[1]).animate( {
                    height: "toggle"
                });
            }
        }
    });
    //Event click button in content
    $(".button").click(function() {
        var btn = $(this).attr("id");
        var index = btn.split("-");
        if (index[1] > 2) {
            index[1] = 1;
        }
        isPopup = true;
        $("#popup-" + index[1]).show();
        $("#popup-" + index[1]).animate( {
            top: "+=190px"
        }, "slow");
    });
    //Event close popup
    $(".buttonclose").click(function() {
        var parent = $(this).parent();
        $(parent).hide();
        $(parent).animate( {
            top: "-=190px"
        });
        isPopup = false;
    });
});