// Get the input
let $clicks = $('#clicks');
let $impressions = $('#impressions');

// get the ctr output text
let $ctr = $('.my-ctr');

// variables for calculation
let $clicksVal;
let $impressionsVal;
let myCtr;

// function to calculate
function getCtr() {
    $clicksVal = $clicks.val();
    $impressionsVal = $impressions.val();
    myCtr = $clicksVal / $impressionsVal * 100;
    // to round the number accurately
    if (myCtr > 0 && myCtr <= 99999999) {
        myCtr = +myCtr.toFixed(4);
        return myCtr;
    }
}

// function for easy access to values and to get updated values when called
function getClicks() {
    return $clicksVal = $clicks.val();
}
function getimpressions() {
    return $impressionsVal = $impressions.val();
}

// to update the progress bar
function updateProgressBar() {
    $(".progress-bar").css("width", getCtr() + "%");
    $(".progress-bar").attr("aria-valuenow", getCtr() + "%");
}


// update the ctr output when both the input has been typed
$impressions.keyup(function() {
    if(getClicks() >= 1) {
        $ctr.text(getCtr());
    }
    updateProgressBar();
});
$clicks.keyup(function () {
    if (getimpressions() >= 1) {
        $ctr.text(getCtr());
    }
    updateProgressBar();
});



// Bookmark
//---------------------

jQuery(function ($) {

    $('#bookmark-this').click(function (e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;

        if ('addToHomescreen' in window && addToHomescreen.isCompatible) {
            // Mobile browsers
            addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
        } else if (window.sidebar && window.sidebar.addPanel) {
            // Firefox <=22
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            // Firefox 23+ and Opera <=14
            $(this).attr({
                href: bookmarkURL,
                title: bookmarkTitle,
                rel: 'sidebar'
            }).off(e);
            return true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorites
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // Other browsers (mainly WebKit & Blink - Safari, Chrome, Opera 15+)
            alert('Press ' + (/Mac/i.test(navigator.platform) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
        }

        return false;
    });

});

