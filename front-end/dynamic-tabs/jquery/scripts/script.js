/**
 * jQuery version 3.6.0
 */

(function($) {

    $(document).ready(function() {

        $(".tab").click(function() {

            const target = $(this).attr("data-tab-target").replace('#', '');

            $(".tab").find(".tab-title").animate({
                top: "0px"
            });

            $(".tab-content div").removeClass("active");
            $(".tab").removeClass("active");

            $(this).addClass("active");
            $(".tab-content").find('#' + target).addClass("active");;
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
