(function(window, $, snabbt) {
  'use strict';

  function animateLogos() {
    $('.logo').snabbt({
      rotation: [2*Math.PI, 0, 0],
      perspective: 200,
      duration: 4000,
      loop: Infinity
    });

  }

  function animateSquares(animationStep) {

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
          animateSquares(animationStep + 1)
      },
      easing: 'ease'
    });
  }



  $(function() {
    animateSquares(0);
    animateLogos();
  });


}(window, window.jQuery, window.snabbt));
