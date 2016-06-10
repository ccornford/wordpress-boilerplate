(function( root, $, undefined ) {
    "use strict";

    $(function () {
        if(!isMobile()) {
            //desktop
        }

        if(isMobile()) {
            //mobile
        }

        if( $(".example").length > 0 ) {
        }
    });

} ( this, jQuery ));

function isMobile() {
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else if($(window).width() <= 1024) {
        return true;
    }
    return false;
}
