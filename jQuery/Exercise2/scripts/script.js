var index = 0;
var width = 648;
var opac = 0.5;
var interval;
var autoSlide = 5000;
var speed = 500;
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
        $("body").css("pointer-events", "none");
        setAnimateOpacity(".item_nav", index, 1);
        index--;
        if (index < 0) {
            index = countSlide - 1;
            moveLeft(".items", width * (countSlide - 1));
        } else {
            moveRight(".items", width);
        }  
        setAnimateOpacity(".item_nav", index, opac);
        clearInterval(interval);
        timer();
    });
    //click arrow right
    $("#arrowright-js").click(function(){
        $("body").css("pointer-events", "none");
        setAnimateOpacity(".item_nav", index, 1);
        index++;
        if (index == countSlide) {
            index = 0;
            moveRight(".items", width * (countSlide - 1));
        } else {
            moveLeft(".items", width);
        }  
        setAnimateOpacity(".item_nav", index, opac);
        clearInterval(interval);
        timer();
    });
    //click item nav
    $(".item_nav").click(function(){
        var item = $(this).index();
        move(index, item);
        setAnimateOpacity(".item_nav", $(this).index(), opac);
        setAnimateOpacity(".item_nav", index, 1);
        index = item;
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
        $("body").css("pointer-events", "none");
        var offset = indexA - indexB;
        var distance = width * offset;
        moveRight(".items", distance);
    } else {
        $("body").css("pointer-events", "none");
        var offset = indexB - indexA;
        var distance = width * offset;
        moveLeft(".items", distance);
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
        }, speed, function() {
            $("body").css("pointer-events", "auto");
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
        }, speed, function() {
            $("body").css("pointer-events", "auto");
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