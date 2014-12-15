/**
Scaling image according to custom zoom in browser (JQuery)
*/
$(window).load(function() {

    var win              = $(window),
        $bg              = $("#bg"),
        aspectRatio      = $bg.width() / $bg.height();

    function resizeImg() {

        //show image if it is loaded
        if(document.getElementById('bg').complete && $bg.css('visibility') =='hidden'){
//        debugger;
            $bg.css('visibility','visible');
        }

        if ( (win.width() / win.height()) < aspectRatio ) {
            $bg
                .removeClass()
                .addClass('height_100');
        } else {
            $bg
                .removeClass()
                .addClass('width_100');
        }
    }

    win.resize(resizeImg).trigger("resize");

});
