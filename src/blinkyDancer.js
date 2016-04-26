

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'blinky');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var baloon = this.$node;
  function runIt() {
    baloon.animate({bottom:'+=100'}, 1000);
    baloon.animate({bottom:'-=100'}, 1000, runIt);
  }

  runIt();
};
