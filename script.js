'use strict';

const randis = document.querySelector('.number');

const input = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const repeat = document.querySelector('.again');
let highScore = 0;
let score = 20;

let random = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  const guess = Number(input.value);

  if (!guess || typeof guess !== 'number') {
    message.textContent = '💀💀 Invalid number !';
  } else if (guess === random) {
    message.textContent = '🎉🎉 Congratz, you won';
    randis.textContent = random;
    document.querySelector('body').style.backgroundColor = '#60b347';
    randis.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== random) {
    if (score > 1) {
      message.textContent =
        guess > random ? '➕👍 You are too high' : '➖👎 You are too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      message.textContent = '🤦‍♂️🤦‍♂️ You lost the game';
    }
  }
});

repeat.addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  randis.style.width = '15rem';
  random = Math.trunc(Math.random() * 20) + 1;
  randis.textContent = '?';
  message.textContent = 'Start guessing ... !';
  input.value = '';
  document.querySelector('.score').textContent = score;
});
