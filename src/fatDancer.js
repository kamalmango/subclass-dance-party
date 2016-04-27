var makeFatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'fat');
};

makeFatDancer.prototype = Object.create(makeDancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;


makeFatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};


