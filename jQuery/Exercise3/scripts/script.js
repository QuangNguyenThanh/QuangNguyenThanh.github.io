var filename = "leaves";
var formatfile = ".png";
var index = 0;

setInterval(function(){
    //random image
    var rd = Math.floor(Math.random() * 5 + 1);
    //random falltime of leaf 
    var falltime = Math.floor(Math.random() * 10 + 10);
    //random rotate direction
    var rotate = Math.random() > 0.5 ? 1 : -1;
    //random rotation angle
    var angle = Math.floor(Math.random() * 720 + 360);
    //random begin X position
    var startX = Math.floor(Math.random() * 1500);
    //random end X position
    var endX = Math.floor(Math.random() * 1500);
    //create leaf
    var leaf = $('<img/>').attr({
        "src": "images/" + filename + rd + formatfile,
        "alt": filename
    }).appendTo("#container");
    index++;
    //let fall
    TweenMax.fromTo($(leaf),
    falltime, 
    {x: startX, y:-100},
    {x: endX, y:700, onComplete: function() {
        $(leaf).remove();
    }});
    TweenMax.to(leaf,
    falltime,
    {rotation: rotate * angle, rotationY: rotate * angle});
}, 800);