/**
 * jQuery version 3.6.0
 */

(function($) {

    $(document).ready(function() {

        $(".tab").click(function() {

            $(".tab").find(".tab-title").animate({
                top: "0px"
            });

            $(".tab").removeClass("active");
            $(this).addClass("active");

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
