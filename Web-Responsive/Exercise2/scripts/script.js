var onScroll = false;

$(window).scroll(function() {
    if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) { 
        if (!onScroll) {
            onScroll = true;
            $(".blood").show(); //show blood
            //change image horror
            $(".items").each(function() {
                $(this).attr("src", $(this).attr("src").replace(".png", "_hide.png"));
            });
            //set css horror
            $("html, body").css("overflow", "hidden");
            $(".container").css("background-color", "black");
            $("h1, h3, .time").addClass("js-redtext__horror");
            $(".col-1").addClass("js-hr__horror");
            $(".normal__text").addClass("js-whitetext__horror");
            $(".time").addClass("js-red__area");
            $("#intro").attr("src", $("#intro").attr("src").replace(".jpg", "_horror.jpg"));
            //scroll to top
            $("html, body").animate({ scrollTop: 0 }, 5000, function() {
                setTimeout(() => {
                    $(".blood").hide(); //hide blood
                    //change image normal
                    $(".items").each(function() {
                        $(this).attr("src", $(this).attr("src").replace("_hide.png", ".png"));
                    });
                    //remove css horror
                    $("html, body").css("overflow", "auto");
                    $(".container").css("background-color", "white");
                    $("h1, h3, .time").removeClass("js-redtext__horror");
                    $(".col-1").removeClass("js-hr__horror");
                    $(".normal__text").removeClass("js-whitetext__horror");
                    $(".time").removeClass("js-red__area");
                    $("#intro").attr("src", $("#intro").attr("src").replace("_horror.jpg", ".jpg"));
                    onScroll = false;
                }, 1000);
            });
        }
    }
 });
