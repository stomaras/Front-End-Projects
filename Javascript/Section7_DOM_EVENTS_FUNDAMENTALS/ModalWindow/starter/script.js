'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let closeModalButton = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');    
}

modalButtons.forEach((modalButton) => {
    modalButton.addEventListener('click',openModal);
})
closeModalButton.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)