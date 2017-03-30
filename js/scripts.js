//BackEnd Logic

var randomRoll = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Player(playerName, activeTurn, score, currentRoll) {
  this.playerName = playerName;
  this.activeTurn = activeTurn;
  this.score = score;
  this.currentRoll = currentRoll;
  this.turnScore = 0;
}

Player.prototype.roll = function() {
  var roll = randomRoll(1,6)
    if (this.activeTurn === true) {
      if (roll > 1) {
        this.currentRoll = roll;
        this.turnScore += this.currentRoll;
        console.log(this);
      } else {
        this.currentRoll = roll;
        this.turnScore = 0;
        endTurn();
        console.log(this);
        }
    }
  }

    function endTurn() {
      player1.score += player1.turnScore;
      player1.turnScore = 0;
      player2.score += player2.turnScore;
      player2.turnScore = 0;
         if (player1.activeTurn === true) {
           player1.activeTurn = false;
         } else {
           player1.activeTurn = true;
         }

         if (player2.activeTurn === true) {
           player2.activeTurn = false;
         } else {
           player2.activeTurn = true;
        }
      }

// FrontEnd Logic
$(document).ready(function() {

  player1 = new Player("player1", true, 0, 0);
  player2 = new Player("player2", false, 0, 0);

  $('#active-player').text("Player 1");
  $('#current-roll').text('0');
  $('#turn-score').text('0');
  $('#player1-score').text('0');
  $('#player2-score').text('0');


  $('button#roll').click(function() {

    if (player1.activeTurn === true) {
      player1.roll();
      if (player1.activeTurn === false) {
        $('#active-player').text("Player 2")
      } else {
        $('#current-roll').text(player1.currentRoll);
        $('#turn-score').text(player1.turnScore);
        $('#player1-score').text(player1.score);
        $('#active-player').text("Player 1");
      }
    } else {
      player2.roll();
      if (player2.activeTurn === false) {
        $('#active-player').text("Player 1")
      } else {
        $('#current-roll').text(player2.currentRoll);
        $('#turn-score').text(player2.turnScore);
        $('#player2-score').text(player2.score);
        $('#active-player').text("Player 2");
      }
    }

    if (player1.score >= 100) {
      $('#main').hide();
      $('#player1-win').show();
    } else if (player2.score >= 100) {
      $('#main').hide();
      $('#player2-win').show();
    }
  });

  $('button#hold').click(function() {

    if (player1.score >= 100) {
      $('#main').hide();
      $('#player1-win').show();
    } else if (player2.score >= 100) {
      $('#main').hide();
      $('#player2-win').show();
    }

    if (player1.activeTurn === true) {
      endTurn();
      $('#current-roll').text(player1.currentRoll);
      $('#turn-score').text(player1.turnScore);
      $('#player1-score').text(player1.score);
      $('#active-player').text("Player 2");
    }  else {
      endTurn();
      $('#current-roll').text(player2.currentRoll);
      $('#turn-score').text(player2.turnScore);
      $('#player2-score').text(player2.score);
      $('#active-player').text("Player 1");
    }




  });






});
