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



  start.on("click", newRound );
  function newRound(){
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      //reset the moves from the computer, the moves from the player, and the round to 0
      sequence = [];
      copy = [];
      round = 0;
      animate(sequence);
      //Change the start button to green when clicked
      $("#start").css("background-color", "green").html("<p>Stop</p>");
      console.log("Start");
    } else {
      $("#start").css("background-color", "red").html("<p>Start</p>");
    }
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
  function animate(sequence) {
    var i = 0;
    var interval = setInterval(function() {
      lightUp(sequence[i]);
      console.log(sequence[i] + ": sequence[i]");

      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
      }
    }, 600);
  }

  //light up colors
  function lightUp(tile) {
    console.log("tile# passed into lightUp " + tile);
    console.log(tile);
    var tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function() {
      $(tile).removeClass('lit');
    }, 300);

  }

  // prevent user from interacting until sequence is done animating
  function deactivateSimonBoard() {
    if (this.mode !== 'free-board') {
      $('.simon')
      .off('click', '[data-tile]')
      .off('mousedown', '[data-tile]')
      .off('mouseup', '[data-tile]');

      $('[data-tile]').removeClass('hoverable');
    }
  }



  function randomNumber(){
    // between 1 and 4
    return Math.floor((Math.random() * 4) + 1);
  }
  //Compare most recent input by computer to the color the user clicks
  //Run this function when a user clicks a color
  function registerClick(evt) {
    //check whether or not the user clicked the right color
    //desiredResponse(same as computer)
    //actualResponse(users response)
    //remove 1st item of sequence w/ .shift()
    var desiredResponse = this.copy.shift();
    //get the evt element that triggered the response & attach color data to it
    var actualResponse = $(evt.target).data('tile');

    //compare the color clicked to the most recent move made by computer
    //if input was correct, set to tru
    //else, set to false
    correct = (desiredResponse === actualResponse);
  }
  //
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
    if (this.copy.length === 0 && this.active) {
      //disable game board once the round is over
      this.deactivateSimonBoart();
      //call newRound function(tells computer to add another move to the memory & display pattern to user)
      newRound();
    }
    else if(correct == false){
      deactivateSimonBoart();
      //end game function
      endGame();
    }
  }

  /*function endGame(){
  //Tell the user that they lost
  $('p[data-action=lose]').show();
  //Reset the counter to 0 so they can play again
  $($('data-round').get(0)).text('0');
}
*/
});
