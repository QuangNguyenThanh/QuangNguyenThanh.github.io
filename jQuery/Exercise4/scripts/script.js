$(document).ready(function() {
    var preX;
    var move_layer23 = 0;
    var move_layer4 = 0;
    $(".layer").mousemove(function() {
        if (preX == undefined) {
            preX = event.clientX;
        }
        $("#layer-2").css("left", move_layer23);
        $("#layer-3").css("left", move_layer23);
        $("#layer-4").css("left", move_layer4);
        if (preX > event.clientX) {
            move_layer23 -= 1;
            move_layer4 -= 2;
        } else if (preX < event.clientX) {
            move_layer23 += 1;
            move_layer4 += 2;
        }
        preX = event.clientX;
    });
    $(".layer").mouseleave(function() {
        preX = undefined;
    });
});
