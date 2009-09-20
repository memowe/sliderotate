/*
 
THE JQUERY SLIDEROTATE PLUGIN

Smoothly switches list items endlessly. Stops on mouse hover.

USAGE:

     $('#div_with_list').slideRotate({
         stepDuration:   1000
         stepPause:      2000
     });

SEE ALSO

* the example html file example.html
* the public SlideRotate repository: http://github.com/memowe/sliderotate

Copyright (c) 2009 Mirko Westermeier (mail@memowe.de)
                   and Daniel Kirsch (danielkirsch@gmx.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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
            outer.hover(function(){
                clearInterval( interval );
            }, function(){
                interval = setInterval( step, settings.stepPause );
            });

        });
    }
})(jQuery);
