// $(".slideshow img:gt(0)").hide();

// setInterval(function() {
//     $(".slideshow :first-child").animate({
//         width: "toggle"
//     })
//     .next("img").animate({
//         width: "toggle"
//     }).end().appendTo(".slideshow");
// }, 3000);

var index = 1;
var width = 648;
var opac = 0.5;

$(document).ready(function() {
    $("#arrowleft").click(function(){
        var i;
        setAnimate("#item_nav-", index, 1);
        index++;
        if (index > 5) {
            index = 1;
            for (i = 1; i <= 5; i++) {
                $("#item-" + i).animate({
                    left: "+=" + width * 4 + "px"
                });
            }
        } else {
            for (i = 1; i <= 5; i++) {
                $("#item-" + i).animate({
                    left: "-=" + width + "px"
                });
            }
        }  
        setAnimate("#item_nav-", index, opac);
    });
});

$(document).ready(function() {
    $("#arrowright").click(function(){
        var i;
        setAnimate("#item_nav-", index, 1);
        index--;
        if (index < 1) {
            index = 5;
            for (i = 5; i >= 1; i--) {
                $("#item-" + i).animate({
                    left: "-=" + width * 4 + "px"
                });
            }
        } else {
            for (i = 5; i >= 1; i--) {
                $("#item-" + i).animate({
                    left: "+=" + width + "px"
                });
            }
        }  
        setAnimate("#item_nav-", index, opac);
    });

    $(".item_nav").click(function(){
        var item = $(this).attr("id");
        var choice = item.split("-");
        move(index, choice[1]);
        setAnimate("#item_nav-", choice[1], opac);
        setAnimate("#item_nav-", index, 1);
        index = choice[1];
    });
});

window.onload = WindowEventLoaded

function WindowEventLoaded() {
    $("#item-1").show();
    $("#item_nav-1").css("opacity", 0.7);
    var i;
    for (i = 1; i <= 5; i++) {
        $("#item-" + i).animate({
            left: "+=" + width * (i - 1) + "px"
        });
    }
    for (i = 2; i <= 5; i++) {
        $("#item-" + i).show(100);
    }
}

function move(indexA, indexB) {
    if (indexA == indexB) {
        return;
    } else if (indexA > indexB) {
        var offset = indexA - indexB;
        var distance = width * offset;
        var i;
        for (i = 1; i <= 5; i++) {
            $("#item-" + i).animate({
                left: "+=" + distance + "px"
            });
        }
    } else {
        var offset = indexB - indexA;
        var distance = width * offset;
        var i;
        for (i = 1; i <= 5; i++) {
            $("#item-" + i).animate({
                left: "-=" + distance + "px"
            });
        }
    }
}

function setAnimate(item, index, value) {
    $(item + index).animate({
        opacity: value
    });
}