
$(document).ready(function () {
    $(".scroll-top").click(function () {
        $("html").animate({ scrollTop: 0 });
    });
});

$(".sidebar-toggle").click(function () {
    $(".side-bar").toggleClass("side-bar-slide");
    $(".container").toggleClass("container-slide");
    $(".bgoverly").toggleClass("bgoverly-slide");
    $(".side-bar-link").toggle(200);
    $(".sidebar-toggle span").toggleClass("sidebar-toggle-btn");
    $(".showcase").fadeToggle();

});

$(".container").click(function () {
    $(".side-bar").removeClass("side-bar-slide");
    $(".container").removeClass("container-slide");
    $(".bgoverly").removeClass("bgoverly-slide");
    $(".side-bar-link").hide(200);
    $(".sidebar-toggle span").removeClass("sidebar-toggle-btn");
    $(".showcase").fadeIn();
    $("header").removeClass("header-active");
    $(".container").removeClass("container-opacity");
    $(".bgoverly").removeClass("bgoverly-opacity");
    $(".side-bar").removeClass("side-bar-slide-2 ")
    $(".sidebar-toggle-2 span").removeClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").removeClass("sidebar-toggle-btn");
    $(".header-side").show();
    $(".sidebar-side").show();
    $(".header-side i").removeClass("iactive")

})


$(".sidebar-home").click(function () {
    $(".side-bar").removeClass("side-bar-slide");
    $(".container").removeClass("container-slide");
    $(".bgoverly").removeClass("bgoverly-slide");
    $(".side-bar-link").hide(200);
    $(".main-home").show(200).siblings().hide(200);
    $(".show-home").show(200).siblings().hide(200);
    $(this).addClass("sidebar-active").siblings().removeClass("sidebar-active");
    $(".sidebar-toggle span").removeClass("sidebar-toggle-btn");
    $(".showcase").fadeIn();
    $(".side-bar").removeClass("side-bar-slide-2 ")
    $(".container").removeClass("container-opacity");
    $(".bgoverly").removeClass("bgoverly-opacity");
    $(".sidebar-toggle-2 span").removeClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").removeClass("sidebar-toggle-btn");
    $(".header-side").show();
    $(".sidebar-side").show();
});

$(".sidebar-portfolio").click(function () {
    $(".side-bar").removeClass("side-bar-slide");
    $(".container").removeClass("container-slide");
    $(".bgoverly").removeClass("bgoverly-slide");
    $(".side-bar-link").hide(200);
    $(".main-portfolio").show(200).siblings().hide(200);
    $(".show-portfolio").show(200).siblings().hide(200);
    $(this).addClass("sidebar-active").siblings().removeClass("sidebar-active");
    $(".sidebar-toggle span").removeClass("sidebar-toggle-btn");
    $(".showcase").fadeIn();
    $(".side-bar").removeClass("side-bar-slide-2 ")
    $(".container").removeClass("container-opacity");
    $(".bgoverly").removeClass("bgoverly-opacity");
    $(".sidebar-toggle-2 span").removeClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").removeClass("sidebar-toggle-btn");
    $(".header-side").show();
    $(".sidebar-side").show();
});

$(".sidebar-contact").click(function () {
    $(".side-bar").removeClass("side-bar-slide");
    $(".container").removeClass("container-slide");
    $(".bgoverly").removeClass("bgoverly-slide");
    $(".side-bar-link").hide(200);
    $(".main-contact").show(200).siblings().hide(200);
    $(".show-contact").show(200).siblings().hide(200);
    $(this).addClass("sidebar-active").siblings().removeClass("sidebar-active");
    $(".sidebar-toggle span").removeClass("sidebar-toggle-btn");
    $(".showcase").fadeIn();
    $(".side-bar").removeClass("side-bar-slide-2 ")
    $(".container").removeClass("container-opacity");
    $(".bgoverly").removeClass("bgoverly-opacity");
    $(".sidebar-toggle-2 span").removeClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").removeClass("sidebar-toggle-btn");
    $(".header-side").show();
    $(".sidebar-side").show();
});

$(".main-portfolio .project-heading div h6").click(function () {
    $(this).parent(".w-sm-33").find("h6").addClass("sidebar-active");
    $(this).parent(".w-sm-33").siblings(".w-sm-33").find("h6").removeClass("sidebar-active");

});

$(".main-portfolio .project-heading div:nth-child(1) h6").click(function () {
    $(".main-portfolio .portfolio-img .w-50").show(1000);
});

$(".main-portfolio .project-heading div:nth-child(2) h6").click(function () {
    $(".main-portfolio .portfolio-img .css").show(1000);
    $(".main-portfolio .portfolio-img .css-extra ,.main-portfolio .portfolio-img .sass ,.main-portfolio .portfolio-img .bootstrap ,.main-portfolio .portfolio-img .jquery , .main-portfolio .portfolio-img .wordpress").hide(1000);
});

$(".main-portfolio .project-heading div:nth-child(3) h6").click(function () {
    $(".main-portfolio .portfolio-img .css-extra").show(1000);
    $(".main-portfolio .portfolio-img .css ,.main-portfolio .portfolio-img .sass ,.main-portfolio .portfolio-img .bootstrap ,.main-portfolio .portfolio-img .jquery , .main-portfolio .portfolio-img .wordpress").hide(1000);
});

$(".main-portfolio .project-heading div:nth-child(4) h6").click(function () {
    $(".main-portfolio .portfolio-img .sass").show(1000);
    $(".main-portfolio .portfolio-img .css-extra ,.main-portfolio .portfolio-img .css   ,.main-portfolio .portfolio-img .jquery , .main-portfolio .portfolio-img .wordpress").hide(1000);
});

$(".main-portfolio .project-heading div:nth-child(5) h6").click(function () {
    $(".main-portfolio .portfolio-img .bootstrap ").show(1000);
    $(".main-portfolio .portfolio-img .css-extra ,.main-portfolio .portfolio-img .sass-1 ,.main-portfolio .portfolio-img .css ,.main-portfolio .portfolio-img .jquery , .main-portfolio .portfolio-img .wordpress").hide(1000);
});

$(".main-portfolio .project-heading div:nth-child(6) h6").click(function () {
    $(".main-portfolio .portfolio-img .wordpress").show(1000);
    $(".main-portfolio .portfolio-img .css-extra ,.main-portfolio .portfolio-img .sass ,.main-portfolio .portfolio-img .bootstrap ,.main-portfolio .portfolio-img .css  ,.main-portfolio .portfolio-img .jquery").hide(1000);
});

$(".main-portfolio .project-heading div:nth-child(7) h6").click(function () {
    $(".main-portfolio .portfolio-img .jquery").show(1000);
    $(".main-portfolio .portfolio-img .css-extra ,.main-portfolio .portfolio-img .wordpress  ,.main-portfolio .portfolio-img .sass ,.main-portfolio .portfolio-img .bootstrap ,.main-portfolio .portfolio-img .css").hide(1000);
});



$(".get-touch label").click(function () {
    $(this).parent(".d-flex").find("label").css({ "background-color": "#FFC107", "color": "black" });
    $(this).parent(".d-flex").siblings(".d-flex").find("label").css({ "background-color": "#20202a", "color": "#8c8c8e" });
})

$(".get-touch .name input").click(function () {
    $(".get-touch .name label").parent(".d-flex").find("label").css({ "background-color": "#FFC107", "color": "black" });
    $(this).parent(".d-flex").siblings(".d-flex").find("label").css({ "background-color": "#20202a", "color": "#8c8c8e" });
})

$(".get-touch .email input").click(function () {
    $(".get-touch .email label").parent(".d-flex").find("label").css({ "background-color": "#FFC107", "color": "black" });
    $(this).parent(".d-flex").siblings(".d-flex").find("label").css({ "background-color": "#20202a", "color": "#8c8c8e" });
})

$(".get-touch textarea").click(function () {
    $(".get-touch textarea").parent(".d-flex").find("label").css({ "background-color": "#FFC107", "color": "black" });
    $(this).parent(".d-flex").siblings(".d-flex").find("label").css({ "background-color": "#20202a", "color": "#8c8c8e" });
})

$(".header-side").click(function () {
    $("header").toggleClass("header-active");
    $(".container").toggleClass("container-opacity");
    $(".bgoverly").toggleClass("bgoverly-opacity");
    $(".sidebar-side").toggle();
    $(".header-side i").toggleClass("iactive")
});

$(".sidebar-side").click(function () {
    $(".side-bar").toggleClass("side-bar-slide-2 ");
    $(".container").toggleClass("container-opacity");
    $(".bgoverly").toggleClass("bgoverly-opacity");
    $(".sidebar-toggle-2 span").toggleClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").toggleClass("sidebar-toggle-btn");
    $(".header-side").toggle();
});

$(".sidebar-toggle-2").click(function () {
    $(".side-bar").removeClass("side-bar-slide-2 ")
    $(".container").removeClass("container-opacity");
    $(".bgoverly").removeClass("bgoverly-opacity");
    $(".sidebar-toggle-2 span").removeClass("sidebar-toggle-btn");
    $(".header-2 .sidebar-side span").removeClass("sidebar-toggle-btn");
    $(".header-side").show();
    $(".sidebar-side").show();
});







// Fancybox Config -->


$('[data-fancybox="gallery"]').fancybox({
    buttons: [

        "close"
    ],
    loop: false,
    protect: true
});




$(".circle_percent").each(function () {
    var $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
    $this.prop('Counter', 0).animate({ Counter: $dataV },
        {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
    if ($dataV >= 51) {
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function () {
            $this.addClass("percent_more");
        }, 1000);
        setTimeout(function () {
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        }, 1000);
    }
});





$(".bar-percentage[data-percentage]").each(function () {
    var progress = $(this);
    var percentage = Math.ceil($(this).attr("data-percentage"));
    $({ countNum: 0 }).animate(
        { countNum: percentage },
        {
            duration: 2000,
            easing: "linear",
            step: function () {
                // What todo on every count
                var pct = Math.floor(this.countNum) + "%";
                progress.text(pct) && progress.siblings().children().css("width", pct);
            }
        }
    );
});




var typing = new Typed(".text", {
    strings: ["Web developer", "Dreamer", "Hard Worker"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});







$(document).ready(function ($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return elemBottom <= docViewBottom;
    }
    //Count up code
    function countUp() {
        $(".counter").each(function () {
            var $this = $(this), // <- Don't touch this variable. It's pure magic.
                countTo = $this.attr("data-count");
            ended = $this.attr("ended");

            if (ended != "true" && isScrolledIntoView($this)) {
                $({ countNum: $this.text() }).animate(
                    {
                        countNum: countTo
                    },
                    {
                        duration: 2000, //duration of counting
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
                $this.attr("ended", "true");
            }
        });
    }
    //Start animation on page-load
    if (isScrolledIntoView(".counter")) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function () {
        if (isScrolledIntoView(".counter")) {
            countUp();
        }
    });
});



$(".main-contact .get-touch .get-touch-content button").click(function () {
    $(".get-touch label").css({ "background-color": "#20202a", "color": "#8c8c8e" });
});

