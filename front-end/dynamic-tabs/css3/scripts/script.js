/**
 * jQuery version 3.6.0
 */

(function($) {

    $(document).ready(function() {

        let previousTarget = null;

        $(".tab").on('click mouseenter', function(e) {

            if (this === previousTarget) {
                return false;
            }

            previousTarget = this;

            const target = $(this).attr("data-tab-target").replace('#', '');
            const tabContent = $(".tab-content").find('#' + target);

            $(".tab-content > div").removeClass("active");
            $(".tab").removeClass("active");
            
            $(this).addClass("active");
            $(tabContent).addClass("active"); 


        });       

    });

}(jQuery));
