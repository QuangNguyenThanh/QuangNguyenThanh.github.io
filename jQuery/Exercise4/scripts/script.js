$(document).ready(function() {
    var preX; //previous position X of mouse in div layer
    var move_layer23 = 0; //move layer 2 and 3
    var move_layer4 = 0; //move layer 4
    $(".layer").mousemove(function() {
        //Set previous X when mouse move on div layer
        if (preX == undefined) {
            preX = event.clientX;
        }
        //Move layer 2,3,4 
        $("#layer-2").css("left", move_layer23);
        $("#layer-3").css("left", move_layer23);
        $("#layer-4").css("left", move_layer4);
        //adjust move distance
        if (preX > event.clientX) {
            move_layer23 -= 1;
            move_layer4 -= 2;
        } else if (preX < event.clientX) {
            move_layer23 += 1;
            move_layer4 += 2;
        }
        //Set current X position likes previous
        preX = event.clientX;
    });
    $(".layer").mouseleave(function() {
        //when mouse move out div layer, set previous X position to undefined
        preX = undefined;
    });
});
