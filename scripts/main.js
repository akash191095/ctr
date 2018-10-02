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

