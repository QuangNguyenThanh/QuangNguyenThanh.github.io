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
            $(".container").addClass("horror-js");
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
                    $(".container").removeClass("horror-js");
                    $("#intro").attr("src", $("#intro").attr("src").replace("_horror.jpg", ".jpg"));
                    onScroll = false;
                }, 2000);
            });
        }
    }
 });
