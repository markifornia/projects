/**
 * jQuery version 3.6.0
 */

(function($) {

    $(document).ready(function() {

        const tabs = document.querySelectorAll('[data-tab-target]');
        const tabContents = document.querySelectorAll('[data-tab-content]');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget);
        
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('active');
                });
        
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });        
        
                tab.classList.add('active');
                target.classList.add('active');
            });
        });

        const boxHeight = $(".tab").height();
        $(".tab").mouseenter(function(){
            $(this).animate({
                //paddingTop: "10px"
            });
        }).mouseleave(function(){
            $(this).animate({
                height: boxHeight
            });
        });        

    });

}(jQuery));
