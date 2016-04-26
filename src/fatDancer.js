var makeFatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'fat');
};

makeFatDancer.prototype = Object.create(makeDancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;


makeFatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeFatDancer.prototype.lineup = function(top) {
  var styleSettings = {
    top: top
  };
  console.log('this node',this.$node);
  this.$node.css(styleSettings);
};

