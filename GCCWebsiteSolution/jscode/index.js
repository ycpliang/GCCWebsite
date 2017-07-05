$(document).ready(function () {
    var timeoutId = 0;
    function clickFunction() {
        
    }


    $("#gcc-logo-center").on('mousedown', function () {
        timeoutId = setTimeout(clickFunction, 1000);
    }).on('mouseup mouseleave', function () {
        clearTimeout(timeoutId);
    });
});