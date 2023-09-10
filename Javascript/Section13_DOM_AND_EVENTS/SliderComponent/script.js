/* 
We must establish the initial condition where all slides are side by side 
style="transform: translateX(0%);"
style="transform: translateX(100%);"
style="transform: translateX(200%);"
*/

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
// define number of slides from NodeList
const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.5)';

// slider.style.transform = 'scale(0.4) translateX(-1200px)';
// slider.style.overflow = 'visible';

slides.forEach((s,i) => (s.style.transform = `translateX(${100 * i}%)`));


// Next Slide

btnRight.addEventListener('click', function() {
  if(curSlide === maxSlide -1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index- curSlide)}%)`));

});

btnLeft.addEventListener('click', () => {

  if(curSlide === 0) {
    curSlide = maxSlide -1;
  } else {
    curSlide--;
  }

  slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index- curSlide)}%)`));
});







