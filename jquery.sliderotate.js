/*
 * THE JQUERY SLIDEROTATE PLUGIN
 *
 * smoothly switches list items endless. stops on mouse hover.
 *
 * USAGE:
 * 
 *      $('#div_with_list').slideRotate({
 *          stepDuration:   1000
 *          stepPause:      2000
 *      });
 *
 * See example.html
 *
 * (c) Mirko Westermeier (mail@memowe.de)
 * and Daniel Kirsch (danielkirsch@gmx.de)
 *
 * This plugin is free software.
 * Public repository: http://github.com/memowe/sliderotate
 */

(function($){

    jQuery.fn.slideRotate = function (options) {

        settings = jQuery.extend({
            stepDuration:   1000,
            stepPause:      2000
        }, options);

        settings.stepPause += settings.stepDuration;

        return this.each(function(){
            
            var outer       = $(this);
            var inner       = outer.find('ul, ol');
            var shiftWidth  = '-' + outer.width() + 'px';
            
            // prepare first step
            inner.find('li:last').insertBefore(inner.find('li:first'));
            inner.css({ marginLeft: shiftWidth });

            // rotate && animate
            function step() {
                inner.find('li:first').insertAfter(inner.find('li:last'));
                inner
                    .css({ marginLeft: '0' })
                    .animate(
                        { marginLeft: shiftWidth },
                        settings.stepDuration
                    );
            }

            // do it yourself
            var interval = setInterval( step, settings.stepPause );

            // user interaction
            outer.mouseover(function(){
                clearInterval( interval );
            }).mouseout(function(){
                interval = setInterval( step, settings.stepPause );
            });

        });
    }
})(jQuery);
