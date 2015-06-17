if(typeof jQuery === undefined){
  throw "jQuery is required for sapphire to work. Didn't you read the README?";
}
(function ( $ ) {
 
    $.fn.slider = function(options,images) {
        var settings = $.extend({
          slideCount: 4,
          animationType:"none"
          
        },options)
    };
 
}( jQuery ));
