/*
 * THE JQUERY SLIDEROTATE PLUGIN
 *
 * (c) Mirko Westermeier (mail@memowe.de)
 * and Daniel Kirsch (danielkirsch@gmx.de)
 *
 * This plugin is free software. Public repository:
 * http://git.github.com/memowe/sliderotate
 *
 * USAGE:
 * 
 *  $('#div_with_ol').slideRotate({
 *      stepDuration:   1000
 *      stepPause:      2000
 *  });
 *
 *  See example.html
 *
 */


    var stepDuration    = 1000;
    var stepPause       = stepDuration + 1000;
    var shiftWidth      = '-' + $('#witchcraft').width() + 'px';

    // prepare first step
    $('#witchcraft li:last').insertBefore($('#witchcraft li:first'));
    $('#witchcraft ol').css({ marginLeft: shiftWidth });

    // whooosh!
    $('#witchcraft ol').hide().fadeIn(stepDuration);

    // rotate && animate
    function step() {
        $('#witchcraft li:first').insertAfter($('#witchcraft li:last'));
        $('#witchcraft ol')
            .css({ marginLeft: '0' })
            .animate({ marginLeft: shiftWidth }, stepDuration);
    }

    // automatism-shism
    var interval = setInterval( step, stepPause );
    $('#witchcraft').mouseover(function(){
        clearInterval( interval );
    }).mouseout(function(){
        interval = setInterval( step, stepPause );
    });

