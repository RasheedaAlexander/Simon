$(document).ready(function() {
  console.log("Let's Play Simon!");
  var start = $('.start');
  //Keep track of the moves the computer makes
  var sequence = [];
  //Keep track of the moves the player makes
  var userClicks = [];
  //Keep track of how many rounds have been played
  var round = $('.round');



  $(start).on("click", testNewStart);
  function newRound(){
    userClicks = [];
    round=0;
    console.log(this + "is start");

    //when a new round starts is add 1 to the 'round' variable, which is keeping track of which round we are on
    //use .text() to set this round
    $('data-round').text(++this.round);
    //let the computer randomly pick one of the tiles
    //send it to the sequence array to compare it to the tile the user clicks

    //Keep track of the most recent input made by the computer
    //.slice() extracts a section of sequence and returns a new array
    userClicks = randomNumber();
    console.log("Pushing a random number into the array: " + sequence);
    testNewStart();
  }

  function testNewStart() {
    sequence = [];
    sequence.push(randomNumber());
    processPlayList(sequence);

    if ($(this).css(("background-color") == "rgb(255, 0, 0)")){
      console.log("start button clicked");
      //reset the moves from the computer, the moves from the player, and the round to 0
      //Change the start button to green when clicked
      $(this).css("background-color", "green").html("<p>Stop</p>");
      console.log("Start");
    } else {
      $(this).css("background-color", "red").html("<p>Start</p>");
    }
  }

  function processPlayList(playList) {
    var i=0;
    // lightUp(playList[i]);
    // window.setTimeout(lightUp(playList[i]), 2000);
    var interval = setInterval(function() {
      lightUp(playList[i]);
      i++;

      if(i>=playList.length){
        clearInterval(interval);
      }
    }, 1500)

  }

  //light up tiles
  function lightUp(tile) {
    console.log("tile# passed into lightUp " + tile);
    console.log(tile);

    var tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function() {
      $(tile).removeClass('lit');
    },1000);
  }

  // prevent user from interacting until sequence is done animating
  /*function deactivateSimonBoard() {
  if (this.mode !== 'free-board') {
  $('.simon')
  .off('click', '[data-tile]')
  .off('mousedown', '[data-tile]')
  .off('mouseup', '[data-tile]');

  $('[data-tile]').removeClass('hoverable');
}
}
*/


function randomNumber(){
  // return a # between 1 and 4
  return Math.floor((Math.random() * 4) + 1);
}
//Compare most recent input by computer to the tile the user clicks
//Run this function when a user clicks a tile
// function registerClick(evt) {
//   //check whether or not the user clicked the right tile
//   //desiredResponse(same as computer)
//   //actualResponse(users response)
//   //remove 1st item of sequence w/ .shift()
//   var desiredResponse = this.copy.shift();
//   console.log(this);
//   //get the evt element that triggered the response & attach tile data to it
//   var actualResponse = $(evt.target).data('tile');
//
//   //compare thetile clicked to the most recent move made by computer
//   //if input was correct, set to true
//   //else, set to false
//   correct = (desiredResponse === actualResponse);
// }
//
// function checkLose(){
//   // Whenever a player clicks on a tile, there are three possible outcomes
//   // 1.) User clicked the right tile, but is yet to complete the pattern
//   // 2.) User clicked the right tile, and it was also the last tile in the pattern
//   // 3.) User clicked on the wrong tile, and the game ends
//   // This 'if statment' will only run if the user has completed the pattern correctly
//   // First condition: check to see how many moves are left in the pattern
//   //If there are 0 moves left, move on to the next condition
//   // Second condition: check to see if the tile the user clicked on was the correcttile
//   //If it was, the function will run!
//   if (sequence.length === 0 && copy.length) {
//     //disable game board once the round is over
//     this.deactivateSimonBoart();
//     //call newRound function(tells computer to add another move to the memory & display pattern to user)
//     newRound();
//   }
//   else if(correct == false){
//     deactivateSimonBoart();
//     //end game function
//     endGame();
//   }
// }
//
// function endGame(){
// //Tell the user that they lost
// $('p[data-action=lose]').show();
// //Reset the counter to 0 so they can play again
// $($('data-round').get(0)).text('0');
// }
});
