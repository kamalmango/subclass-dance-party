
var makeDancer = function(top, left, timeBetweenSteps, dancer) {

  if (dancer === 'blinky') {
    this.$node = $('<img src ="img/blinky.png" class="dancer lineUp animated flash infinite">');
  } else if (dancer === 'fat'){
    this.$node = $('<img src ="img/fatty.png" class="fatDancer lineUp animated pulse infinite">');
  } else {
    this.$node = $('<img src ="img/skinny.png" class="skinnyDancer lineUp animated pulse infinite">');
  }
  

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.position = [top, left];
};

makeDancer.prototype.step = function() {
  //console.log(this.step);
  var context = this;
  setTimeout(function() {
    context.step();
  }, context.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};





