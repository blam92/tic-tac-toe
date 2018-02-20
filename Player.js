const askForInput = require('./helpers').askForInput;

class Player {
  constructor(symbol, userNumber) {
    this.symbol = symbol;
    this.userNumber = userNumber;
  }

  insert(cb) {
    askForInput(`${this.userNumber}, your turn`, (data) => {
      let answer = data.split(' ');
      let x = answer[0];
      let y = answer[0];
      cb(x, y);
    });    
  }
}

module.exports = Player;