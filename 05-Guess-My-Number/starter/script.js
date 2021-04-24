'use strict';

let secretNumber = Math.trunc(Math.random() * 100) % 21;
let score = 20;
let initialMessage = document.querySelector('.message').textContent;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = '😭 You lost the game';
    } else {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🙌🏻 Too High !' : '⬇ Too low !';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) % 21;
  console.log(secretNumber);
  document.querySelector('.message').textContent = initialMessage;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});