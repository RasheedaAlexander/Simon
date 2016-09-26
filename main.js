$(document).ready(function(){
  console.log("I don't think you're ready for jQuery");

  var red = $('#red');
  var blue = $('#blue');
  var yellow = $('#yellow');
  var green = $('#green');
  var computer = [];
  var userClick = [];

  var colors = [red, yellow, blue, green];

  // Keep track of how many rounds have been played
  var round = 1;

  // When start button is clicked, start the game
  $('.start').on("click", startGame);

  //initiate Simon Says
  function startGame(){
    console.log("Start button clicked");
    simonSays();
  }

  //Set timer for how long colors will blink
  function simonSays() {
    //return a random number in the array and push it into the array
    computer.push(colors[Math.floor(Math.random()*colors.length)]);
    console.log(computer + " computer");
    for (var i=0; i<computer.length; i++){
      (function(i){
        //setTimeout in a for loop can be buggy
        //execute this function (change the opacity of the random color selected) after 1000 ms delayed
        setTimeout(function(){
          lightUp(computer[i]);
        }, i*1000)
      }(i))}
    }

    //colors will blink when start button is clicked
    function lightUp(color) {
      var colorToBlink = $(color);
      console.log(color + " color");
      //change opacity of colors to make them appear to blink
      colorToBlink.css("opacity", 0.5);
      setTimeout(function() {
        colorToBlink.css("opacity", 1);
      }, 500)
    }

    // function endGame(){
    //   console.log("Game Over!");
    // }


  })
