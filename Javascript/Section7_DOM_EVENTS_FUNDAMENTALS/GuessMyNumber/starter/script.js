'use strict';

/* 
We want the secret number to be defined once only when we start the application 
not on each click
*/

const INITIAL_SCORE = 20;

const secretNumber = Math.trunc(Math.random()*20) + 1;
let scoreSpan = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let bodyElement = document.querySelector('body');
let numberQuestion = document.querySelector('.number');

const palette = {
    successBackgroundColor: '#25be17',
    looseBackgroundColor: '#b80a0a'
};

let score = INITIAL_SCORE;

document.querySelector('.number').textContent = secretNumber;

const checkButton = document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if(!guess){
        message.textContent = 'No number';

    // when player wins
    } else if (guess === secretNumber) {
        message.textContent = 'Correct Number';
        bodyElement.style.backgroundColor = palette.successBackgroundColor;
        numberQuestion.style.width = '30rem';
    // when player lost
    } else if(guess > secretNumber) {
        if(score > 1){
            message.textContent = 'Too High';
            score--;
            scoreSpan.textContent = score;
        }else {
            message.textContent = 'You Lost the game';
            scoreSpan.textContent = 0;
        }
    } else if (guess < secretNumber) {
        if(score > 1){
            message.textContent = 'Too Low';
            score--;
            scoreSpan.textContent = score;
        } else {
            message.textContent = 'You Lost the game';
            scoreSpan.textContent = 0;
        }
    }
});
