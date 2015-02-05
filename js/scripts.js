
$(function() {

    /**
     * Curtains over words of training phrase
     */

    function desktopClickHandler($curtainedWord) {
        $curtainedWord.toggleClass('curtain-closed').toggleClass('curtain-open');
    }

    function mobileTapHandler($curtainedWord) {
        if($curtainedWord.hasClass('curtain-closed')) {
            $curtainedWord.removeClass('curtain-closed').addClass('curtain-ajar');
        } else if($curtainedWord.hasClass('curtain-ajar')) {
            $curtainedWord.removeClass('curtain-ajar').addClass('curtain-open');
        } else if($curtainedWord.hasClass('curtain-open')) {
            $curtainedWord.removeClass('curtain-open').addClass('curtain-closed');
        }
    }

    $('*[data-training-phrase-element]').on('touchstart click', function(event) {
        event.preventDefault(); //in order to prevent the "ghost click" which appears after touchstart event on touch devices
        var $curtainedWord = $(this);
        if(event.type == 'touchstart') {
            mobileTapHandler($curtainedWord);
        } else if(event.type == 'click') {
            desktopClickHandler($curtainedWord);
        }
    }).on('mouseenter', function() {
        var $curtainedWord = $(this);
        if($curtainedWord.hasClass('curtain-closed')) {
            $curtainedWord.removeClass('curtain-closed').addClass('curtain-ajar');
        }
    }).on('mouseleave', function() {
        var $curtainedWord = $(this);
        $curtainedWord.removeClass('curtain-ajar').addClass('curtain-closed');
    });


    /**
     * Microphone button's animation while processing data
     */

    $('*[data-microphone-btn]').on('click', function() {
        $(this).toggleClass('microphone-processing');
    });

});
