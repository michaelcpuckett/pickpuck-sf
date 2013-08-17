
;(function ($, window) {
    'use strict';

    var $doc = $(document);
    var $body = $('body');
    var $sections = $('section');
    var $blocks = $sections.children('.block');
    var bodyWidth = $body.width();
    var bodyHeight = $body.height();

    // unless mobile
    if (bodyWidth > 480) {
        // scroll left
        $body.mousewheel(function(e, delta) {
            e.preventDefault();
            this.scrollLeft -= (delta * 30);
        });
        // background
        // $.stellar();

        $('.js-scroll-to').on('click', function (e) {
            e.preventDefault();
            var target = $(this).attr('data-section');
            var $target = $(target);
            var offsetTop = $target.offset().top;
            var offsetLeft = $target.offset().left;
            $('html, body').animate({
                 scrollTop: offsetTop,
                 scrollLeft: offsetLeft
             }, 500);
        });

    }

    var $intro = (function () {
        var $intro = $('.intro');
        var $block = $intro.find('.block');

        $intro.imagesLoaded(function () {
            $sections.width(bodyWidth).height(bodyHeight);
            $blocks.width(bodyWidth);
            $body.removeClass('loading');
        });
        
        return $intro;
    }());


})(jQuery, this);