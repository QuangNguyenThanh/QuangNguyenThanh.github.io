var locate = 0;
var delay = 1000;
var isPopup = false;
$(document).ready(function(){
    $(".about").click(function() {
        if (!isPopup) {
            var about = $(this).attr("id");
            var src = $(this).attr("src");
            var arr = about.split("-");
    
            src = src === "images/about" + arr[1] + "_mb.jpg" ?
            "images/about" + arr[1] + "_mb_hover.jpg" : "images/about" + arr[1] + "_mb.jpg";
    
            if (locate == arr[1]) {
                $('#hidden-' + arr[1]).animate( {
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
                locate = arr[1];
                $(this).attr("src", src);
                $(".hidden").hide();
                $('#hidden-' + arr[1]).animate( {
                    height: "toggle"
                });
            }
        }
    });
});

$(document).ready(function() {
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
});

$(document).ready(function() {
    $(".buttonclose").click(function() {
        var parent = $(this).parent();
        $(parent).hide();
        $(parent).animate( {
            top: "-=190px"
        });
        isPopup = false;
    });
});
