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

const nav = document.querySelector('.nav');

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
// document.documentElement.style.setProperty('--color-primary', 'orangered');

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

// Implementing Scroll Smooth

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo({left: s1coords.left, top: s1coords.top, behavior: 'smooth'});

  // work on modern browsers
  section1.scrollIntoView({behavior:'smooth'})
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach((el) => {
//   console.log(el);
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   });
// });

// we add event listener o a common parent element of all the elements that we interested in
// in order to see where the event happened we use e.target
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', (e) => {
  console.log(e.target);

  // Matching strategy 
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});






/* Types of Events and Event Handlers
   Events are signals generated by certain node 
   a signal means something happened

   mouseenter event is like hover event in css
*/

const h1 = document.querySelector('h1');


// h1.addEventListener('mouseenter', (e) => {
//   alert('addEventListener: Great! You are reading the heading');
// });

// old days
// h1.onmouseenter = (e) => {
//   alert('addEventListener: Great! You are reading the heading');
// }
// with addEventListener we can add multiple event handlers 
// with addEventListener we can remove an event handler if we do not need anymore 

const mouseenterFunc = (e) => {
  alert('addEventListener: Great! You are reading the heading');

  // with this we can only listen for the events once
  // this is a nice pattern if you want to listen for an event only once
}



h1.addEventListener('mouseenter', mouseenterFunc);

setTimeout(() => h1.removeEventListener('mouseenter', mouseenterFunc), 3000);

/*---------------------------------------------------------Event Propagation: Bubbling and Capturing ------------------------------------------------------*/

/*
Javascript events have a very important property they have a so called capturing phase and a bubbling phase.

rgb(255,255,255)
*/

const randomInt = (min,max) => Math.floor(Math.random() * (max - min +1) + min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// all event handlers handle the same event that happened in nav__link
// event only bubbles up to its parent elements
// target differ from currentTarget
// e.currentTarget === this keyword exactly the same in any event handler
// document.querySelector('.nav__link').addEventListener('click', (e) => {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop event propagation
//   // e.stopPropagation()
// });


// document.querySelector('.nav__links').addEventListener('click', (e) => {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });


// document.querySelector('.nav').addEventListener('click', (e) => {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

/* Events are captured when they come down from the document route all the way to the target
   addEventListener are only capturing events in the bubbling phase but not in the capturing phase
   that is the default behaviour of the addEventListener method
   However, if we really do want to catch events during the capturing phase we can define a third parameter in the addEventListenr function
   if we set the third parameter to true event handler will not longer listen to bubbling events, but instead to capturing events
   so element is now actually listening for the event as it travels down from the DOM, while these other ones are listening for the event,
   as it travels back up.
   by default third parameter is set to false
*/


// Traversing DOM 
// select an element based on another element

// const header1 = document.querySelector('h1');

// // Going downwards: child element
// console.log(header1.querySelectorAll('.highlight'));
// console.log(header1.childNodes);
// console.log(header1.children);
// header1.firstElementChild.style.color = 'white';
// header.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(header1.parentNode);
// console.log(header1.parentElement);

// // sometimes we need to find a parent element no matter how far is from the dom tree and for that we have the closest method.
// // we select the closest parent element which has .header class
// // closest is the opposite of querySelector , because querySelector find children no matter how deep on the dom tree, while closest method find parent no matter how far up in the DOM tree
// header1.closest('.header').style.background = 'var(--gradient-secondary)';

// header1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // allSiblingsH1 is still an iterable that we can spread into an array
// const allSiblingsH1 = h1.parentElement.children;
// console.log(allSiblingsH1);

// const allSiblingsArray = [...allSiblingsH1];
// console.log(allSiblingsArray);
// allSiblingsArray.forEach((el) => {
//   if(el !== h1){
//     el.style.transform = 'scale(0.5)';
//   }
// })

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


// this is a bad practice because if he have 2000 tabs , then we will have 2000 copies of this 
// call back function here and that would simply slow down the page.
// tabs.forEach((t) => t.addEventListener('click', () => {
//   console.log('TAB');
// }));
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // Active tab
  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active')); 
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');
  
  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});



// pass arguments into event handler functions
// Menu fade animation
// mouseover do bubble so can reach the navigation element 
// mouseleave opposite of mousenter

const handleHover = (e, opacityNumber) => {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((sibling) => {
      if(sibling !== link) sibling.style.opacity = opacityNumber;
    });
    logo.style.opacity = opacityNumber;
  }
}

nav.addEventListener('mouseover', (e) => {
  handleHover(e, 0.5);
});


nav.addEventListener('mouseover', (e) => {
  handleHover(e, 1);
});

// Sticky Navigation
const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords);
window.addEventListener('scroll', function(e) {
  // px from top of viewport this.window.scrollY
  console.log(this.window.scrollY);

  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  } 

})