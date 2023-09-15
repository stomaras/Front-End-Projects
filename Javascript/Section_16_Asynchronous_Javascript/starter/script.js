'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getCountryData = function(country) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);
    
    request.addEventListener('load', function() {
        console.log(this.responseText);
    
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data[0].name);
    
        const html = `
            <article class="country">
            <img class="country__img" src="${data[0].flag}" />
            <div class="country__data">
            <h3 class="country__name">${data[0].name}</h3>
            <h4 class="country__region">${data[0].region}</h4>
            <p class="country__row"><span>👫</span>${(+data[0].population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data[0].nativeName}</p>
            <p class="country__row"><span>💰</span>${data[0].currencies[0].name}</p>
            </div>
        </article>
        `;
    
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });
    
}





// whenever come first render first during AJAX call

getCountryData('portugal')

getCountryData('usa')
getCountryData('germany');



























///////////////////////////////////////
/*
- Asynchronous code is executed after a task that runs in the background finishes;
- Asynchronous code is non blocking;
- Execution does not wait for an asynchronous task to finish its work;
- Callback function does not make code asynchronous
- addEventListener does not automatically make code asynchronous!

ASYNCHRONOUS : Coordinating behaviour of a program over a period of time.

Other Examples: Geolocation API or AJAX calls.


AJAX : 
Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an asynchronous way.
With Ajax calls we can request data from web servers dynamically.

Request and Response happedned dynamically
Request (Get/Post/ etc)

API : Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other
There are be many types of APIs in web development
DOM API, Geolocation API, Own Class API, "Online" API

"Online API": Application running on a server, that receives requests for data, and sends data back as response.
*/