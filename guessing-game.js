const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;
let numAttempts = 0
const answers = {};
let guesses = [];

// range finder prompts
 (function askLimit (){
  rl.question('Enter a guess limit', askRange)
 })();
function askRange(limit) {
  numAttempts = limit
  rl.question('Enter a max number', maxNumber)

};

function maxNumber(max) {
  rl.question('Enter a min number', minNumber)
  answers['max'] = Number(max)
}

function minNumber(min) {
  answers['min'] = Number(min)
  secretNumber = randomInRange(answers.min, answers.max);
  askGuess()
}

let checkGuess = (n) => {
  numAttempts--

  n = Number(n)

  if (n === secretNumber) {
    console.log('You Win!')
    rl.close()
    return
  }
  if (numAttempts === 0) {
    console.log("you Lose !!!", `the winning number was ${secretNumber}` )
    rl.close()
    return
  }
  if (n < secretNumber) {
    console.log('Too low')
    guesses.push(n)
    console.table(guesses)

    askGuess()
  }
  if (n > secretNumber) {
    console.log('Too high')
    guesses.push(n)
    console.table(guesses)

    askGuess()
  }

}

let askGuess = () => {
  rl.question("Enter a guess: ", checkGuess)
}

function randomInRange(min, max) {
  let random = Math.floor(Math.random() * (max - min) + min)
  return random
}
