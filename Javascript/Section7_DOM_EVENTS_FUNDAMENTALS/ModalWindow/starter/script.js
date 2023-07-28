'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let closeModalButton = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

modalButtons.forEach((modalButton) => {
    console.log(modalButton.textContent);
})
