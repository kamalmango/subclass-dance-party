var makeSkinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, "skinny");
};

makeSkinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSkinnyDancer.prototype.constructor = makeSkinnyDancer;


makeSkinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var baloon = this.$node;
  function runIt() {
    baloon.animate({bottom:'+=100'}, 1000);
    baloon.animate({bottom:'-=100'}, 1000, runIt);
  }

  runIt();
};

