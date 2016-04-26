
describe('fattyDancer', function() {

  var fattyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fattyDancer = new makeFattyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fattyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(fattyDancer.$node, 'toggle');
    fattyDancer.step();
    expect(fattyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fattyDancer, 'step');
      expect(fattyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      
      expect(fattyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fattyDancer.step.callCount).to.be.equal(2);
    });
  });
});
