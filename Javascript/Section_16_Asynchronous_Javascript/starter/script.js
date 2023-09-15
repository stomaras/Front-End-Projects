'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data) {
    const html=`
    <article class="country">
        <img class="country__img" src="${data[0].flag}" />
        <div class="country__data">
            <h3 class="country__name">${data[0].name}</h3>
            <h4 class="country__region">${data[0].region}</h4>
            <p class="country__row"><span>👫</span>${(+data[0].population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data[0].nativeName}</p>
            <p class="country__row"><span>💰</span>${data[0].currencies[0].name}</p>
        </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
}

const renderN = function(data, className = '') {
    const html=`
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.nativeName}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);
    
    request.addEventListener('load', function() {
        console.log(this.responseText);
    
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data[0].name);

        // Render Country (1)
        renderCountry(data);

        // Get neighbour country (2)
        const [neighbour] = data[0].borders;

        if(!neighbour) return;


        // AJAX call country 1
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        console.log(request.responseText);

        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderN(data2, 'neighbour');

        });


    });
    
}


// whenever come first render first during AJAX call
// data about nei.. country depends on first call
getCountryAndNeighbour('portugal')



























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


                                    Request
Client -----------------------------------------------------------------------------------------> Web Server
       <-----------------------------------------------------------------------------------------
                                    Response


Client (e.g Browser)
1) Protocol(HTTP or HTTPS)
2) Domain Name
3) Resource

DNS: Domain Name Server , first things that happens when we access any web server is that browser make a request to a dns,
     and this web server will match the web address of the url to the server's real IP address.

     Protocol (HTTP or HTTPS) | IP Adress | Port Number

     TCP/IP ---> Transimission Control Protocol and IP is the internet Protocol, define how the data travels across the web.
     HTTP ---> is a protocol that allow clients and web servers to communicate 
     HTTP Response ---> 200 ok 

     GET /rest/v2/alpha/PT HTTP/1.1 ---> Start line: HTTP method + request target + HTTP version

     Host: www.google.com
     User-Agent: Mozilla/5.0------------> HTTP request headers(many different possibilities)
     Accept-Language: en-US

     <BODY> ----------------------------> Request Body (only when sending data to server: e.g Post)
*/