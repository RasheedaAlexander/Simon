$(document).ready(function() {
  console.log("Hello Moto");
  var start = $('#start');
  //When start button is pushed
  //start the counter
  //change the start button to green
  $(start).on("click", function() {
    console.log("start button clicked");
  //  if ($(this).css("background-color") == "red") {
      $("#start").css("background-color", "green");
  /*  }
      else {
        console.log("didn't work");
      }
      */
  });

  //start animation
  //if user successfully clicks the colors in the same order as shown, update counter
  //else, restart counter & change start button to red

  //If user hits start button while it's green, stop it and turn it red
})
