/* 
We must establish the initial condition where all slides are side by side 
style="transform: translateX(0%);"
style="transform: translateX(100%);"
style="transform: translateX(200%);"
*/

// Slider
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'visible';

slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * index}%)`));