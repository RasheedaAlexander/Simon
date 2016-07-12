$(document).ready(function() {
  console.log("Hello Moto");
  var start = $('#start');
  var button = $('.button');
  var red = $('#red');
  var blue = $('blue');
  var green = $('green');
  var yellow = $('yellow');
  //When start button is pushed
  //start the counter
  //change the start button to green
  start.on("click", function() {
    //console.log("start button clicked");
    //Check Background color
    //console.log( $(this).css("background-color") );
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      $("#start").css("background-color", "green");
      console.log("Start");
    } else {
      console.log("Stop");
      $("#start").css("background-color", "red");
    }

  });

  //start animation
  //if user successfully clicks the colors in the same order as shown, update counter
  //else, restart counter & change start button to red

  //If user hits start button while it's green, stop it and turn it red
})
