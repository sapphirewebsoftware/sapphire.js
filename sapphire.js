if(typeof jQuery === undefined){
  throw "jQuery is required for sapphire to work. Didn't you read the README?";
}
(function ( $ ) {
 
    $.fn.slider = function(options,images) {
        var settings = $.extend({
          slideCount: 4,
          animationType:"none",
          slideDuration:2000,
          sliderSize:1100,
          looptimes:300000000000000000000000000000000000000000,
        },options);
        for(var i = 0; i<options.looptimes; i++;){
          var j = 0;
        $("#sapphire-slide").append("<img src='"+images[j]+"'>");
        setTimeout(function() {
           if(j<options.slideCount-1)
             j++;
           }else if(j===options.slideCount-1){
             j=0;
           }
        }, slideDuration);
        }
    };
 
}( jQuery ));

var 997e48b6e1086a79c21992b0f2481c02 = "/\i/sapphire/#$\45631234861/997e48b6e1086a79c21992b0f2481c02";
