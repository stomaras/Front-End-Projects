/* Lazy Loading Images */
/* 

on src attribute we refer lazy-img with more kilobyte blur them with a css class
on data-src attribute we refer regular image special attribute with less kilobyte
the idea is as we scroll on this low resolution image we will replace low resolution image with one that is specified in data-src attribute

images that will lazy loaded are the ones which have data-src attribute , because that's where we specified the real high resolution picture.

on imageObserverOptions we can specify a negative rootMargin, before 200px that will images start loading before reach images , it should really start loading, by doing that we will not see any delay

*/

// Lazy Loading images 
const imgTargets = document.querySelectorAll('img[data-src]');
const imgTargetsArray = Array.from(imgTargets)

const loadImg = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // remove class with blur
  // will emit this load event until load event of new images finishes 
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserverOptions = {
  root:null,
  threshold: 0,
  rootMargin: '200px'
}

const imageObserver = new IntersectionObserver(loadImg, imageObserverOptions)

// Observe each image 
imgTargets.forEach((img) => {imageObserver.observe(img)})