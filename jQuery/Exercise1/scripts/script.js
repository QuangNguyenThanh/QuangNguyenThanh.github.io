var locate = -1;
var isPopup = false;
$(document).ready(function(){
    //Event click in menu
    $(".about").click(function() {
        if (!isPopup) {
            var index = $("li > .about").index($(this));
            var src = $("li > .about").eq(index).attr("src");
            src = src === "images/about" + (index + 1) + "_mb.jpg" ?
            "images/about" + (index + 1) + "_mb_hover.jpg" 
            : "images/about" + (index + 1) + "_mb.jpg";

            if (locate == -1) {
                $("li > .hidden").eq(index).animate( {
                    height: "toggle"
                });
                $("li > .about").eq(index).attr("src", src);
                locate = index;
            } else if (locate == index) {
                $("li > .hidden").eq(index).animate( {
                    height: "toggle"
                });
                $("li > .about").eq(index).attr("src", src);
                locate = -1;
            } else {
                var srcPre = $("li > .about").eq(locate).attr("src");
                srcPre = srcPre === "images/about" + (locate + 1) + "_mb.jpg" ?
                "images/about" + (locate + 1) + "_mb_hover.jpg" 
                : "images/about" + (locate + 1) + "_mb.jpg";
                $("li > .about").eq(locate).attr("src", srcPre);
                locate = index;
                $("li > .about").eq(index).attr("src", src);
                $(".hidden").hide();
                $("li > .hidden").eq(index).animate( {
                    height: "toggle"
                });
            }
        }
    });
    //Event click button in content
    $(".button").click(function() {
        var index = $("li > .hidden > .button").index($(this));
        if (index > 1) {
            index = 0;
        }
        isPopup = true;
        $(".popup").eq(index).show();
        $(".popup").eq(index).animate( {
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