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
            $(".title, .small__title, .time").addClass("js-redtext__horror");
            $(".col-1").addClass("js-hr__horror");
            $(".normal__text, .small__text").addClass("js-whitetext__horror");
            $(".time, .intro").addClass("js-red__area");
            //scroll to top
            $("html, body").animate({ scrollTop: 0 }, 5000, function() {
                $(".blood").hide(); //hide blood
                //change image normal
                $(".items").each(function() {
                    $(this).attr("src", $(this).attr("src").replace("_hide.png", ".png"));
                });
                //remove css horror
                $(".container").css("background-color", "white");
                $(".title, .small__title, .time").removeClass("js-redtext__horror");
                $(".col-1").removeClass("js-hr__horror");
                $(".normal__text, .small__text").removeClass("js-whitetext__horror");
                $(".time, .intro").removeClass("js-red__area");
                onScroll = false;
            });
        }
    }
 });
