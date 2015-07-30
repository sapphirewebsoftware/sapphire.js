if(window.jQuery === undefined){
    throw "jQuery is required for sapphire to work. Didn't you read the README?";
}


var license = function(license){
    if(license.match(/sapphirewebbuilding[a-z0-9]+/i)){
        (function ( $ ) {

$.fn.slider = (function(options,images) {
    var settings = $.extend({
      slideCount: 4,
      animationType:"none",
      slideDuration:2000,
      sliderSize:1100,
      looptimes:300000000000000000000000000000000000000000
    },options);
    for(var i = 0; i<options.looptimes; i++){
      var j = 0;
      $("#sapphire-slide").append("<img src='"+images[j]+"'>");
      setTimeout(function() {
        if(j<options.slideCount-1){
          j++;
         }else if(j===options.slideCount-1){
           j=0;
         }
      },options.slideDuration);
    }
});

})( jQuery );
    }
};
