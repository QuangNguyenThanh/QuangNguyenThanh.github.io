var index = 1;
var width = 648;
var opac = 0.5;
var interval;
var autoSlide = 5000;
var timer = function(){
    interval = setInterval(function() {
        $("#arrowright-js").click();
    }, autoSlide);;
}
var countSlide;
//window load
window.onload = WindowEventLoaded
function WindowEventLoaded() {
    $(".slideshow > li").eq(0).show();
    $(".item_nav").eq(0).css("opacity", opac);
    countSlide = $("#slideshow-js li").length;
    var i;
    for (i = 0; i <= countSlide; i++) {
        $(".slideshow > li").eq(i).animate({
            left: "+=" + width * i + "px"
        });
    }
    for (i = 1; i <= countSlide; i++) {
        $(".slideshow > li").eq(i).show(100);
    }
    timer();
}
//set click event
$(document).ready(function() {
    //click arrow left
    $("#arrowleft-js").click(function(){
        setAnimateOpacity(".item_nav", index - 1, 1);
        index--;
        if (index < 1) {
            index = countSlide;
            moveLeft(".items", width * (countSlide - 1));
        } else {
            moveRight(".items", width);
        }  
        setAnimateOpacity(".item_nav", index - 1, opac);
        clearInterval(interval);
        timer();
    });
    //click arrow right
    $("#arrowright-js").click(function(){
        setAnimateOpacity(".item_nav", index - 1, 1);
        index++;
        if (index > countSlide) {
            index = 1;
            moveRight(".items", width * (countSlide - 1));
        } else {
            moveLeft(".items", width);
        }  
        setAnimateOpacity(".item_nav", index - 1, opac);
        clearInterval(interval);
        timer();
    });
    //click item nav
    $(".item_nav").click(function(){
        var item = $(this).attr("id");
        var choice = item.split("-");
        move(index, $(this).index());
        setAnimateOpacity(".item_nav", $(this).index(), opac);
        setAnimateOpacity(".item_nav", index, 1);
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
    for (i = 0; i < countSlide; i++) {
        $(obj).eq(i).animate({
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
    for (i = 0; i < countSlide; i++) {
        $(obj).eq(i).animate({
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
    $(obj).eq(index).animate({
        opacity: value
    });
}