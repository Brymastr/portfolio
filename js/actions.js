(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.nav-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.nav-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
        
        $('.jcarousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();
            
                element.jcarousel('items').css('width', width + 'px');
            });
        
        $('.jcarousel')
            .jcarousel({
                animation: {
                    duration: 1500,
                    easing:   'easeInOutCubic',
                    complete: function() {}
                }
            })
            .jcarousel({
                wrap: 'circular'
            })
            .jcarousel({
                center: true
            })
            .jcarouselAutoscroll({
                interval: 5000,
                target: '+=1',
                autostart: true
            })
        ;
    });
})(jQuery);
