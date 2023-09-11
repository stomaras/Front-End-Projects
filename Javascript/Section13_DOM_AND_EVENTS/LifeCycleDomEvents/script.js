/*
Now the first event that we need to talk about is called DOM content loaded,
DOM content loaded the event is fired by the document as soons as the HTML is completely parsed, 
which means that the HTML has been downloaded and been converted to the DOM tree.
Also, all scripts must be downloaded and executed before the DOM content loaded event can happen.
This event does actually does not wait from images and other external resources to load.
So just HTML and Javascript need to be loaded.

We want all our code only to be executed after the DOM is ready 

Next event is also the load event and the load event is fired by the window. Not only the HTML is parsed, but also 
the images and external resources like CSS files are also loaded. So basically when the complete page has finished loading is when 
this event gets fired.

Last Event is before unload event, which also gets fired on window. This event here is created immediately before a user is about to leave a page
so right after click the close button on the browser tab. So you use this event to ask user if is 100% ready to leave the page.
Note!!!
Don't be one of these developers who abuses too much power. So the only time you should prompt the user, if they really want to leave tha page
is for example, when the user is leaving in the middle of filling out the form, or like writing a blog post or something like that.
So in a situation in which data could actually be lost by accident.
*/


// HTML parsed and dom tree built.
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('HTML parsed and DOM tree built!', e);
});


// HTML, CSS, External resources parsed and downloaded.
window.addEventListener('load', function(e) {
    console.log('Page fully loaded', e);
});

// when we leave the page.
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    console.log(e);
    e.returnValue = '';
});