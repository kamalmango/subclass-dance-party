var makeSkinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, "skinny");
};

makeSkinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSkinnyDancer.prototype.constructor = makeSkinnyDancer;


makeSkinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeSkinnyDancer.prototype.lineup = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};