var readlineSync = require("readline-sync");

var player1 = "Player 1";
var player2 = "Player 2";

// nextMark is either "X" or "0". It tells which mark will be placed
// to the board next. It can also tell whose turn it is.
var nextMark = "X";
// The board is an array which consists of three arrays (=rows).
// Each inner array has three elements - one for each column.
var board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

//These can be used, if we want to ask the names for the players.
//player1 = readlineSync.question("Give the name for player 1: ");
//player2 = readlineSync.question("Give the name for player 2: ");

console.log(player1 + " and " + player2 + ", welcome to play tic-tac-toe!");

for (let i = 0; i < 3; i++) {
  playTurn(nextMark);

  if (checkRow(nextMark, board)) {
    // if there is one line with three same marks, end the game and declare the winner.
    if (nextMark == "X") {
      console.log("Game Over!" + player1 + " wins!");
    } else {
      console.log("Game Over!" + player2 + " wins!");
    }
    i = 3; // to leave the loop if game ends before it.
  } else {
    // If the game has not ended yet, change the turn by changing the nextMark
    if (nextMark == "X") {
      nextMark = "0";
    } else {
      nextMark = "X";
    }
  }
}
displayBoard(board);

// calls getPosition() and markPosition() until a position is marked.
function playTurn(mark) {
  displayBoard(board);
  let notMarked = true;
  while (notMarked) {
    // position tells where the player wants to play.
    let position;
    // Choose the player by checking the nextMark
    if (nextMark == "X") {
      position = getPosition(player1);
    } else {
      position = getPosition(player2);
    }
    console.log("You chose position: " + position);
    notMarked = !markPosition(position, mark);
    if (notMarked) {
      console.log("The position " + position + " is not available. Try again.");
    }
  }
}

// Prints the tic-tac-toe board to the screen.
function displayBoard(board) {
  console.log(".-----------.");
  for (var i = 0; i < 3; i++) {
    console.log(
      "| " + board[i][0] + " | " + board[i][1] + " | " + board[i][2] + " |"
    );
    if (i < 2) console.log("|---|---|---|");
    else console.log("`-----------´");
  }
}

// Asks the player to choose a position where to play.
// Returns an integer between 1 and 9.
function getPosition(player) {
  let input = readlineSync.questionInt(
    player + ", please give a position (1-9): "
  );

  // The input is supposed to be between 1 and 9.
  if (input < 1 || input > 9) {
    console.log("The position should be from 1 to 9. Please, try again.");
    return getPosition(player);
  } else {
    return input;
  }
}

// Function puts a mark on a position, if it is available.
// Returns true, if succeeded. Otherwise, it returns false.
function markPosition(pos, mark) {
  switch (pos) {
    case 1:
      //checking that the position isn't reserved.
      if (board[0][0] == " ") {
        board[0][0] = mark;
        return true;
      }
      break;
    case 2:
      if (board[0][1] == " ") {
        board[0][1] = mark;
        return true;
      }
      break;
    case 3:
      if (board[0][2] == " ") {
        board[0][2] = mark;
        return true;
      }
      break;
    case 4:
      if (board[1][0] == " ") {
        board[1][0] = mark;
        return true;
      }
      break;
    case 5:
      if (board[1][1] == " ") {
        board[1][1] = mark;
        return true;
      }
      break;
    case 6:
      if (board[1][2] == " ") {
        board[1][2] = mark;
        return true;
      }
      break;
    case 7:
      if (board[2][0] == " ") {
        board[2][0] = mark;
        return true;
      }
      break;
    case 8:
      if (board[2][1] == " ") {
        board[2][1] = mark;
        return true;
      }
      break;
    case 9:
      if (board[2][2] == " ") {
        board[2][2] = mark;
        return true;
      }
      break;
    default:
      return false;
  }
  //If true wasn't returned in the switch block.
  return false;
}

// Function checks if there is three same marks in one row, column or diagonal line.
function checkRow(mark, board) {
  // Checking rows
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] === mark &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return true;
    }
  }
  // Checking columns
  for (var i = 0; i < 3; i++) {
    if (
      board[0][i] === mark &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return true;
    }
  }
  // Checking the diagonal line from upper left to down right
  if (
    board[0][0] === mark &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return true;
  }
  // Checking the diagonal line from upper right to down left
  else if (
    board[2][0] === mark &&
    board[2][0] === board[1][1] &&
    board[2][0] === board[0][2]
  ) {
    return true;
  }

  // return "false" is there are no three same mark at same line.
  return false;
}
