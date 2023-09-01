'use strict';

/*
WHAT IS THE DOM?

DOM is basically the interface between all Javascript code and the browser, or more 
specifically HTML documents that are rendered in and by the browser.

- Allows us to make Javascript interact with the browser
- We can write Javascript to create, modify and delete HTML elements
  set styles, classes and attributes; and listen and respond to events;
- DOM tree is generated from an HTML document, which we can then interact with;
- DOM is very complex API that contains lots of methods and properties to interact with the DOM tree.
  such as .querySelector() / .addEventListener() / .createElement() / .innerHTML / .textContent / .children / etc...
  there are different node DOM objects such as HTMLElements or TextElements 

- HOW THE DOM API IS ORGANIZED BEHIND THE SCENES

Node
- Element ---> HTMLElement ---> HTMLButtonElement, HTMLDivElement
- Text <p>Paragraph</p>
- Comment <!--Comment-->
- Document

INHERITANCE OF METHODS AND PROPERTIES 
Example:
Any HTMLElement will have access to .addEventListener(), .cloneNode() or .closest() methods.

.innerHTML
.classList
.children
.parentElement
.append()
.remove()
.insertAdjacentHTML()
.querySelector()
.closest()
.matches()
.scrollIntoView()
.setAttribute()

Just to be clear, we do never manually create an eventTarget object.

*/

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
