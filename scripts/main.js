var $clicks = $('#clicks');
var $impressions = $('#impressions');

var $ctr = $('.my-ctr');

var $clicksVal;
var $impressionsVal;
var myCtr;

function getCtr() {
    $clicksVal = $clicks.val();
    $impressionsVal = $impressions.val();
    myCtr = $clicksVal / $impressionsVal * 100;
    if (myCtr > 0 && myCtr <= 99999999) {
        myCtr = +myCtr.toFixed(4);
        return myCtr;
    }
}

function getClicks() {
    return $clicksVal = $clicks.val();
}

function getimpressions() {
    return $impressionsVal = $impressions.val();
}

function updateProgressBar() {
    $(".progress-bar").css("width", getCtr() + "%");
    $(".progress-bar").attr("aria-valuenow", getCtr() + "%");
}

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
})

