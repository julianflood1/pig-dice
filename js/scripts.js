//BackEnd Logic

var player1 = new Player("player1", 0, 0, true);
var player2 = new Player("player2", 0, 0, false);

var randomRoll = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Player(playerName, currentScore, totalScore, activeTurn, currentRoll) {
  this.playerName = playerName;
  this.turnScore = 0;
  this.totalScore = totalScore;
  this.activeTurn = activeTurn;
  this.currentRoll = currentRoll;
}

Player.prototype.roll = function() {
  var roll = randomRoll(1,6)
    if (this.activeTurn === true) {
      if (roll > 1) {
        this.currentRoll = roll;
        console.log(this);
        this.turnScore += this.currentRoll;
      }
    } else {
      this.turnScore === 0;

      endTurn();
      }
    }

    function endTurn() {
      player1.turnScore += player1.totalScore;
      player1.turnScore = 0;
      player2.turnScore += player2.totalScore;
      player2.turnScore = 0;
         if(player1.activeTurn === true) {
           player1.activeTurn = false;
         } else {
           player1.activeTurn = true;
         }
         if(player2.activeTurn === true) {
           player2.activeTurn = false;
         } else {
           player2.activeTurn = true;
        }
      }



//FrontEnd Logic
// $(document).ready(function() {
//   $('#player1.player1Roll').submit(function(event) {
//
//     event.preventDefault();
// });
// });
