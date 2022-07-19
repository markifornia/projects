/**
 * jQuery version 3.6.0
 */

(function($) {

    $(document).ready(function() {

        $(".tab").click(function() {

            const target = $(this).attr("data-tab-target").replace('#', '');
            const tabContent = $(".tab-content").find('#' + target);

            $(".tab").find(".tab-title").animate({
                top: "0px"
            });

            $(".tab-content > div").css("display", "none").removeClass("active");

            $(".tab").removeClass("active");
            $(this).addClass("active");

            $(tabContent).fadeIn(1000, function() {
                $(tabContent).addClass("active"); 
            });

        });

        $(".tab").mouseenter(function() {

            $(this).find(".tab-title").animate({
                top: "-10px"
            });          
        
        }).mouseleave(function(){
            $(this).find(".tab-title").animate({
                top: "0px"
            });

        });        

    });

}(jQuery));
