(function(window, $, snabbt) {
  'use strict';


  function animate(animationStep) {

    var squareCoordinates = [
      [0, 0, 0],
      [100, 0, 0],
      [100, 100, 0],
      [0, 100, 0],
    ];

    $('.demo-item').snabbt({
      position: function(i, count) {
        return squareCoordinates[(i + animationStep) % count]
      },
      rotation: function(i, count) {
        return [0, 0, (i + animationStep) / count * 2 * Math.PI];
      },
      complete: function(i, count) {
        if(i === count - 1)
          animate(animationStep + 1)
      },
      easing: 'ease'
    });
  }



  $(function() {
    animate(0);
  });


}(window, window.jQuery, window.snabbt));
