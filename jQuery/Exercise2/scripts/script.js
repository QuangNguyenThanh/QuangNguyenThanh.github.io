var index = 1;
var width = 648;
var opac = 0.5;
var interval;
var timer = function(){
    interval = setInterval(function() {
        $("#arrowright-js").click();
    }, 5000);;
}
var countSlide;
//window load
window.onload = WindowEventLoaded
function WindowEventLoaded() {
    $("#item-1").show();
    $("#item_nav-1").css("opacity", opac);
    countSlide = $("#slideshow-js li").length;
    var i;
    for (i = 1; i <= countSlide; i++) {
        $("#item-" + i).animate({
            left: "+=" + width * (i - 1) + "px"
        });
    }
    for (i = 2; i <= countSlide; i++) {
        $("#item-" + i).show(100);
    }
    timer();
}

//set click event
$(document).ready(function() {
    //click arrow left
    $("#arrowleft-js").click(function(){
        setAnimateOpacity("#item_nav-", index, 1);
        index--;
        if (index < 1) {
            index = countSlide;
            moveLeft("#item-", width * (countSlide - 1));
        } else {
            moveRight("#item-", width);
        }  
        setAnimateOpacity("#item_nav-", index, opac);
        clearInterval(interval);
        timer();
    });
    //click arrow right
    $("#arrowright-js").click(function(){
        setAnimateOpacity("#item_nav-", index, 1);
        index++;
        if (index > countSlide) {
            index = 1;
            moveRight("#item-", width * (countSlide - 1));
        } else {
            moveLeft("#item-", width);
        }  
        setAnimateOpacity("#item_nav-", index, opac);
        clearInterval(interval);
        timer();
    });
    //click item nav
    $(".item_nav").click(function(){
        var item = $(this).attr("id");
        var choice = item.split("-");
        move(index, choice[1]);
        setAnimateOpacity("#item_nav-", choice[1], opac);
        setAnimateOpacity("#item_nav-", index, 1);
        index = choice[1];
        clearInterval(interval);
        timer();
    });
});
/**
 * move slide in slideshow when click item nav
 * @param {index current item} indexA 
 * @param {index item click} indexB 
 */
function move(indexA, indexB) {
    if (indexA == indexB) {
        return;
    } else if (indexA > indexB) {
        var offset = indexA - indexB;
        var distance = width * offset;
        moveRight("#item-", distance);
    } else {
        var offset = indexB - indexA;
        var distance = width * offset;
        moveLeft("#item-", distance);
    }
}
/**
 * slide left
 * @param {prefix id of item in slideshow} obj 
 * @param {distance move} distance 
 */
function moveLeft(obj, distance) {
    var i;
    for (i = 1; i <= countSlide; i++) {
        $(obj + i).animate({
            left: "-=" + distance + "px"
        });
    }
}
/**
 * slide right
 * @param {prefix id of item in slideshow} obj 
 * @param {distance move} distance 
 */
function moveRight(obj, distance) {
    var i;
    for (i = 1; i <= countSlide; i++) {
        $(obj + i).animate({
            left: "+=" + distance + "px"
        });
    }
}
/**
 * set opacity of object
 * @param {prefix id of item in nav} obj 
 * @param {index item in nav} index 
 * @param {value of opacity} value 
 */
function setAnimateOpacity(obj, index, value) {
    $(obj + index).animate({
        opacity: value
    });
}