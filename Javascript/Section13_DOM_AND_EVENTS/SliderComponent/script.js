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


/* 
Let's take a different way of loading a Javascript script in HTML.

DEFER AND ASYNC SCRIPT LOADING
                                     HEAD                                                       BODY END    
Regular
<script src="script.js">      Parsing HTML | Waiting...            | Finish parsing HTML        Parsing HTML | Fetch script | Execute
                              Time --->    | Fetch Script, Execute | DOMContentLoaded
ASYNC
<script async src="script.js">

DEFER
<script defer src="script.js">

async and defer attribute will affect the different ways on which the js will downloaded and then executed.

never include the script on the Head , so that is actually why we put script at the end of the Body 
so that all the HTML is already parsed, when it finally reaches the end tag

Async and defer has not practical effect at the body end

Regular  VS  ASYNC  VS DEFER

END OF BODY                         ASYNC IN HEAD                                       DEFER IN HEAD
Parse HTML    | Fetch | Run         Parse HTML | Wait | Parse HTML                      Parse HTML | Run
                DOMContentLoaded    Fetch       Run    DOMContentLoaded                 Fetch   DOMContentLoaded

Scripts are fetched and executed     Scripts are fetched asynchronously and executed    Scripts are fetched asynchronously and executed
after the HTML is completely parsed  immediately                                        after the HTML is sompletely parsed.

                                     Usually the DOMContentLoaded Event waits for all   DOMContentLoaded event fires after the                                                                                         defer script is executed
                                     scripts to execute, except for async scripts.      defer script is executed.
                                     So, DOMContentLoaded does not wait for an async
                                     script.

                                     Scripts not guaranteeted to execute in order       Scripts are executed in order.
                                                                                        This is overall the best solution! Use for 
                                                                                        your own scripts, and when order matters (e.g including
                                                                                        a library).
                                    Use for 3rd-party scripts where order does not 
                                    matter (e.g Google Analytics). 

The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded,
but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, 
while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – 
both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. 
However, there are some situations where one attribute may be preferable to the other.


Advantages of using the defer attribute

There are several advantages to using the defer attribute in your script tags:

Deferred scripts :
are guaranteed to run after the page has been loaded and parsed, so they can’t slow down the initial page load.
Since deferred scripts are not parsed until after the page has loaded, they can’t block the parsing of other elements on the page (such as images).
Deferred scripts can be updated independently of the rest of the page, 
which means that if you change a deferred script, you don’t have to re-parse and re-render the entire page.



*/






