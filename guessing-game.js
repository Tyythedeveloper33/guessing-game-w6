const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = {};

const secretNumber = 50;

let checkGuess = (n) => {
  n = Number(n)
  if (n > secretNumber) {
    console.log('Too high')
    askGuess()
  }
  if (n < secretNumber) {
    console.log('Too low')
    askGuess()
  }
  if (n === secretNumber) {
    console.log('You Win!')
    rl.close()
  }
}

let askGuess = () => {
  rl.question("Enter a guess: ", checkGuess)
}

askGuess()
