/* 
Part 1
1. Create a function 'createImage' which receives
imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img)) and sets the .src attribute 
to the provided image path. When the image done loading , append it to the DOM element with the 'images' class, and resolve the promise.
The fullfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

*/

const createImage = (imgPath) => {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img')
        img.src = imgPath;

        img.addEventListener('load', function() {
            const divImages = document.querySelector('.images');
            divImages.append(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'))
        })

    })
}
let path = ''
createImage('img/img.jpg').then(img => {
    console.log('image 1 loaded');
}).catch(err => console.error(err))