$(document).ready(function() {
  console.log("Let's Play Simon!");
  var start = $('#start');
  var button = $('.button');
  //Keep track of the moves the computer makes
  var sequence = [];
  //Keep track of the moves the player makes
  var copy = [];
  //Keep track of how many rounds have been played
  var round = 0;

  //When start button is pushed
  //start the counter
  //change the start button to green
  start.on("click", function(){
    //console.log("start button clicked");
    //Check Background color
    //console.log( $(this).css("background-color") );
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      //reset the moves from the computer, the moves from the player, and the round to 0
      sequence = [];
      copy = [];
      round = 0;
      //Change the start button to green when clicked
      $("#start").css("background-color", "green").html("<p>Stop</p>");
      console.log("Start");
      newRound();
    } else {
      //console.log("Stop");
      $("#start").css("background-color", "red").html("<p>Start</p>");
    }
  });

  function newRound(){
    //when a new round starts is add 1 to the 'round' variable, which is keeping track of which round we are on
    //use .text() to set this round
    $('data-round').text(++this.round);
    //let the computer randomly pick one of the colors
    //send it to the sequence array to compare it to the color the user clicks
    sequence.push(randomNumber());
    //Keep track of the most recent input made by the computer
    //.slice() extracts a section of sequence and returns a new array
    copy = sequence.slice(0);
  }

  //Compare most recent input by computer to the color the user clicks
  //Run this function when a user clicks a color
  function registerClick(evt) {
    //check whether or not the user clicked the right color
    //desiredResponse(same as computer)
    //actualResponse(users response)
    //remove 1st item of sequence w/ .shift()
    var desiredResponse = copy.shift();
    //get the evt element that triggered the response & attach color data to it
    var actualResponse = $(evt.target).data('color');

    //compare the color clicked to the most recent move made by computer
    //if input was correct, set to tru
    //else, set to false
    correct = (desiredResponse === actualResponse);
  }
  function checkLose(){
    // Whenever a player clicks on a color, there are three possible outcomes
// 1.) User clicked the right color, but is yet to complete the pattern
// 2.) User clicked the right color, and it was also the last color in the pattern
// 3.) User clicked on the wrong color, and the game ends
// This 'if statment' will only run if the user has completed the pattern correctly
  // First condition: check to see how many moves are left in the pattern
    //If there are 0 moves left, move on to the next condition
  // Second condition: check to see if the color the user clicked on was the correct color
    //If it was, the function will run!
    if (copy.length === 0 && correct) {
      //disable game board once the round is over
      deactivateSimonBoart();
      //call newRound function(tells computer to add another move to the memory & display pattern to user)
      newRound();
    }
      else if(correct == false){
        deactivateSimonBoart();
        //end game function
        endGame();
    }
  }

  

  /*
  //start animation (simulate lighting by changing background opacity)
  function animate(sequence){
  //keep calling this animation until finished sorting through the array
  //regulate the timing of when the items light up one at a time
  var interval = setInterval(function () {

  //increment to track the progress over the array sequence
  //start the lightButton function while the current color is in sequence
  for(var i=0; i<=sequence.length; i++) {
  darkButton(sequence[i]);

  if(sequence.length>=i){
  console.log(sequence[i]);
  clearInterval(interval);
}
}
}, 600);
}


function darkButton(sequence) {
animate(sequence);
button.animate({opacity: 0.7}, 300);
button.animate({opacity: 1}, 300);
//setTimeout needed

}
*/

//if user successfully clicks the colors in the same order as shown, update counter
//else, restart counter & change start button to red

//If user hits start button while it's green, stop it and turn it red
*/
});
