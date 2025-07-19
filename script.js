'use strict';

// display message function
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
// Secret number function
const secretNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
}
// Number function
function number(num) {
  document.querySelector('.number').textContent = num;
}
// Body color function
const bodyColor = (color) => {
  document.querySelector('body').style.backgroundColor = color;
}
// Score function 
const Score = function(score) {
  document.querySelector('.score').textContent = score;
}
// Guess function
const Guess = function() {
  return Number(document.querySelector('.guess').value);
}

let secretNumber = secretNum();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {

  const guess = Guess();
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }

  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number(secretNumber);
    bodyColor('#60b347');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      Score(score);
    }
    else {
      displayMessage('💥 You lost the game!');
      Score(0);
    }
  }

});

document.querySelector('.again').addEventListener('click', function(){

  score = 20;
  secretNumber = secretNum();
  Score(score);
  number('?');
  Guess() = '';
  bodyColor('#222');
  displayMessage('Start guessing...');

});
