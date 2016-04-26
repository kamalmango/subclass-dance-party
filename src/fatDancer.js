var makeFatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'fat');
};

makeFatDancer.prototype = Object.create(makeDancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;


makeFatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
            "height": '1.0em',
                "width": '1.0em',
                "margin-top": '3.2em',
                "margin-left": '3.2em'
        }, 1000);
  //this.$node.animate(400,);
  /*
   var baloon = this.$node;
   function runIt() {
      baloon.animate({bottom:'+=100'}, 1000);
      baloon.animate({bottom:'-=100'}, 1000, runIt);
   }


   runIt();
   */
};


