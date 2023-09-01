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


// SELECTING , CREATING AND DELETING ELEMENTS 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

/*nodelist does not updated automatically when i delete an nodelist element  */


console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
// will return a dom element
// it is a dom object but not on the dom itself
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'we use cookies for improved functionaity and analytics.'
message.innerHTML = 'we use cookies for improved functionaity and analytics. <button class="btn btn--close-cookie">Go it!</button>';

// add message on the dom insert element into html
// prepend add element as the first child of header element 
// header.prepend(message);

// we can also added as the last child of header element with append method
// we use prepend and append methods to move elements
header.append(message);
// header.append(message.cloneNode(true));

// insert the message before the header element
// header.before(message);

// insert the message after the header element 
// header.after(message);

// DELETE Elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});


// Styles, Attributes and Classes

// Styles as inline styles directly on the dom, style work only for inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(message.style.color);

// getComputedStyle
// we get all the properties with all the values
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 + 'px';

// work with css custom properties , variables
// chnage style varibales custom properties
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// src, class, id
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Banklist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);


// Classes 
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j')
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
