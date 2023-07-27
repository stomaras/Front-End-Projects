'use strict';

const INITIAL_SCORE = 20;

const palette = {
    successBackgroundColor: '#25be17',
    looseBackgroundColor: '#b80a0a',
    initialBackgroundColor: '#222'
};

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = INITIAL_SCORE;

let scoreSpan = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let bodyElement = document.querySelector('body');
let numberQuestion = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const buttonAgain = document.querySelector('.again');

const checkButton = document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        message.textContent = 'No number';

    // when player wins
    } else if (guess === secretNumber) {
        message.textContent = 'Correct Number';
        bodyElement.style.backgroundColor = palette.successBackgroundColor;
        numberQuestion.style.width = '30rem';
        numberQuestion.textContent = secretNumber;

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


buttonAgain.addEventListener('click', function() {
    bodyElement.style.backgroundColor = palette.initialBackgroundColor;    
    message.textContent = "Start Guessing...";
    numberQuestion.textContent = "?";
    numberQuestion.style.width = '15rem';
    guessInput.value = "";
    scoreSpan.textContent = 20;
}); 
