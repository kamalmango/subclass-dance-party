$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('.lineUp').mouseover(function(event) {
      dancer.$node.toggle();
    }); 


    $('body').append(dancer.$node);
    for (var i = 0; i < window.dancers.length-1; i++) {
      if ((Math.abs(window.dancers[i].position[0]-dancer.position[0]) <= 100) && (Math.abs(window.dancers[i].position[1]-dancer.position[1]) <= 100)) {
        setTimeout(function() {
          dancer.$node.addClass('something'); //something is a css class that is applied to the nodes that pop
        }, 3000);
      }
    }
    window.dancers.push(dancer);
  }); 

  $('.lineUpButton').on('click', function(event) {
    for (var i = window.dancers.length - 1; i >= 0; i--) {
      $('.lineUp').css('top', '300px');
      $('.something').css('display','none'); // makes the nodes that popped disapear when align is clicked
      $('body').append(window.dancers[i]);
    }
  }); 

});

