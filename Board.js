let Player = require('./Player');
class Board {
  constructor() {
    this.playerOne = new Player('X', 1);
    this.playerTwo = new Player('O', 2);
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.currentTurn = 0;
  }

  printBoard() {
    for(let i = 0; i < this.board.length; i++) {
      let row = '';
      for(let j = 0; j < this.board[i].length; j++) {
        row += this.board[i][j] + ' | ';
      }
      console.log(row);
      if(i !== this.board.length - 1) {
        console.log('-------------');
      }
    }
  }
  checkIfWinner(symbol) {
    let winner = this.checkMajorDiagonal(symbol) || this.checkMinorDiagonal(symbol);
    if(winner) {
      console.log('WINNER IS: PLAYER ', symbol);
      return true;
    }

    for(let i = 0; i < 3; i++) {
      if(this.checkColumn(symbol, i) || this.checkRow(symbol, i)) {
        console.log('WINNER IS: PLAYER ', symbol);
        return true;
      };
    }
    return false;
  }

  checkMajorDiagonal(symbol) {
    let symbolToCheck = this.board[0][0] === symbol ? this.board[0][0] : null;
    console.log('s', symbolToCheck);
    if(this.board[1][1] === symbolToCheck) {
      if(this.board[2][2] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }

  checkMinorDiagonal(symbol) {
    let symbolToCheck = this.board[0][2] === symbol ? this.board[0][2] : null;
    if(this.board[1][1] === symbolToCheck) {
      if(this.board[2][0] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }
  checkRow(symbol, rowIndex) {
    let symbolToCheck = this.board[rowIndex][0] === symbol ? this.board[rowIndex][0] : null;
    if(this.board[rowIndex][1] === symbolToCheck) {
      if(this.board[rowIndex][2] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }

  checkColumn(symbol, columnIndex) {
    let symbolToCheck = this.board[0][columnIndex] === symbol ? this.board[0][columnIndex] : null;
    if(this.board[1][columnIndex] === symbolToCheck) {
      if(this.board[2][columnIndex] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }

  startTurn() {
    
  }
  startGame() {

  }
}

let b = new Board();
b.board[0][0] = 'X';
b.board[1][1] = 'X';
b.board[2][2] = 'X';
b.printBoard();
b.checkIfWinner('X');