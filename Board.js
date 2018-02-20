let Player = require('./Player');
class Board {
  constructor() {
    this.playerOne = new Player('X', 1);
    this.playerTwo = new Player('O', 2);
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
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
  checkIfWinner() {
  }

  checkMajorDiagonal() {
    let symbolToCheck = this.board[0][0] === 'X' || this.board[0][0] === 'O' ? this.board[0][0] : null;
    console.log('s', symbolToCheck);
    if(this.board[1][1] === symbolToCheck) {
      if(this.board[2][2] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }

  checkMinorDiagonal() {
    let symbolToCheck = this.board[0][2] === 'X' || this.board[0][2] === 'O' ? this.board[0][2] : null;
    console.log('s', symbolToCheck);
    if(this.board[1][1] === symbolToCheck) {
      if(this.board[2][0] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }
  checkRow(rowIndex) {
    let symbolToCheck = this.board[rowIndex][0] === 'X' || this.board[rowIndex][0] === 'O' ? this.board[0][2] : null;
    if(this.board[1][1] === symbolToCheck) {
      if(this.board[2][0] === symbolToCheck) {
        return true;
      }
    }
    return false;
  }
  checkColumn(columnIndex) {

  }
}

let b = new Board();
b.board[0][2] = 'X';
b.board[1][1] = 'X';
b.board[2][0] = 'X';
console.log(b.checkMinorDiagonal());

b.printBoard();