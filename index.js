var readlineSync = require("readline-sync");

var player1 = "Player 1";
var player2 = "Player 2";

// position tells where the player wants to play.
var position = "0";
// nextMark is either "X" or "0". It tells which mark will be placed
// to the board next. It can also tells whose turn it is.
var nextMark = "X";

//These can be used, if we want to ask the names for the players.
//player1 = readlineSync.question("Give the name for player 1: ");
//player2 = readlineSync.question("Give the name for player 1: ");

console.log(player1 + " and " + player2 + ", welcome to play tic-tac-toe!");
