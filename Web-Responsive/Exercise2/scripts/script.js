var onScroll = false;

$(window).scroll(function() {
    if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
        if (!onScroll) {
            console.log(onScroll);
            onScroll = true;
            $(".blood").show(); //show blood
            //change image horror
            $(".items").each(function() {
                $(this).attr("src", $(this).attr("src").replace(".png", "_hide.png"));
            });
            //set css horror
            $(".container").css("background-color", "black");
            $(".title, .small__title, .time").addClass("redtext__horror");
            $(".col-1").addClass("hr__horror");
            $(".normal__text, .small__text").addClass("whitetext__horror");
            $(".time, .intro").addClass("red__area");
            //scroll to top
            $("html, body").animate({ scrollTop: 0 }, 5000, function() {
                $(".blood").hide(); //hide blood
                //change image normal
                $(".items").each(function() {
                    $(this).attr("src", $(this).attr("src").replace("_hide.png", ".png"));
                });
                //remove css horror
                $(".container").css("background-color", "white");
                $(".title, .small__title, .time").removeClass("redtext__horror");
                $(".col-1").removeClass("hr__horror");
                $(".normal__text, .small__text").removeClass("whitetext__horror");
                $(".time, .intro").removeClass("red__area");
                onScroll = false;
            });
        }
    }
 });
