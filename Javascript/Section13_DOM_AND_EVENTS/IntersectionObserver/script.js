/* Intersection Observer API */
/* THis API allows our code to actually observe changes to the way that a certain target element 
   intersects another element, or the way it intersects the viewport

   observe a target element

   on the root property of obsOptions object is the property that the target is intersecting or we want the target element to intersect
   we can select an element or as an alternative we can set it to null and then we will be able to observe our target element intersecting the entire viewport
   threshold: this is basically the percentage of intersection at which the observer callback will be called.

   Callback function will be called each time that the observed element, so our target element is intersecting the root element at the threshold that we defined.
   So in our example whenever the section1 element in intersecting the viewport at 10% the callback function will be called no matter if we scrolling up or down

   entries on callBack function are actually an array of the thresholds entries

   so we can think about the threshold here as the percentage that we want to have visible in our root

   We want navigation become sticky when the header moves completely out of view
*/

// Creating a new INtersectionObserver

// const section1 = document.querySelector('.section');

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// with navHeight rootMargin will work no matter how big or how small the viewport is 

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting){
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}


const headerObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
}

const headerObserver = new IntersectionObserver(stickyNav, headerObserverOptions);
headerObserver.observe(header);