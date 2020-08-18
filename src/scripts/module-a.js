(function() {
    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
})()