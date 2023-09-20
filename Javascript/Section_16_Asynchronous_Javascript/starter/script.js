'use strict';


// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data) {
//     const html=`
//     <article class="country">
//         <img class="country__img" src="${data[0].flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data[0].name}</h3>
//             <h4 class="country__region">${data[0].region}</h4>
//             <p class="country__row"><span>👫</span>${(+data[0].population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data[0].nativeName}</p>
//             <p class="country__row"><span>💰</span>${data[0].currencies[0].name}</p>
//         </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity = 1;
// }

// const renderN = function(data, className = '') {
//     const html=`
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.nativeName}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbour = function(country) {

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     console.log(request.responseText);
    
//     request.addEventListener('load', function() {
//         console.log(this.responseText);
    
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//         console.log(data[0].name);

//         // Render Country (1)
//         renderCountry(data);

//         // Get neighbour country (2)
//         const [neighbour] = data[0].borders;

//         if(!neighbour) return;


//         // AJAX call country 1
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();
//         console.log(request.responseText);

//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);
//             renderN(data2, 'neighbour');
//         });


//     });
    
// }


// whenever come first render first during AJAX call
// data about nei.. country depends on first call
// escape callback hell with promises
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 seconds passed');
//             },1000)
//         },1000);
//     },1000)
// },1000);





/*
Promise: An object that is used as a placeholder for the future result of an asynchronous operation.
Promise: A container for an asynchronous delivered value.
Promise: A container for a future value.(Example: Response from AJAX call)
Promise: that i will receive money if i guess correct outcome

The Promise LIFECYCLE

Before the future                                                           Asynchronous task has finished
value is available                          ASYNC TASK 
PENDING -------------------------------------------------------------------> SETTLED ------------- Rejected (An error happened)
                                                                                |
                                                                                |
                                                                                |
                                                                                |
                                                                                FULFILLED
                                                                                Success! The value
                                                                                is now available

We are able to handle these different states in our code

BUILD PROMISE: Fetch API returns promie
CONSUME PROMISE: When we already have a promise. E.g promise returned from Fetch API                                                                    
*/

// const renderError = function(message) {
//     countriesContainer.insertAdjacentText('beforeend', message);
// }


// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request);

// const getCountryData = function(country) { 
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//         response => {
//         console.log(response);

//         if(!response.ok){
//             throw new Error(`Country not found ${response.status}`);
//         }
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(`${err}`);
//         renderError(`Something went wrong ${err.message}`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1
//     })
    
// };

// btn.addEventListener('click', function() {
//     getCountryData('portuugal');
// })


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


/*
Handling rejected promises

finally works before catch itself only return a promises

*/

/* geolocation api */

// navigator.geolocation.getCurrentPosition(
// position => console.log(position),
// err => console.error(err));

// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(
//             position => resolve(position),
//             err => reject(err)
//         );
//     });
// };

// getPosition().then(pos => console.log(pos));
const usersContainer = document.querySelector('.users');
const btnGetUser = document.querySelector('.btn-user');

const renderUser = (user) => {
    const html = `
    <section>
        <h2>User with name: ${user.name}</h2>
        <p>Username: ${user.username}</p>
    </section> 
    `

    usersContainer.insertAdjacentHTML('beforeend', html);
}

const renderUsers = (users) => {
    users.forEach(user => {
        const html = `
            <section>
                <h2>User with name: ${user.name}</h2>
                <p>Username: ${user.username}</p>
                <br/>
            </section> 
        `
    usersContainer.insertAdjacentHTML('beforeend', html);
    });
}

const renderError = (err) => {
    console.log(`Something went wrong ${err.message}`);
}
// so basically await will stop the code execution at this point of the function , until the promise is fullfilled antil data get
// not blocking the call stack of execution , looks our code makes regular async await is syntactical sugar of then
const getUsers = async function() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!res.ok) throw new Error('Something went wrong with fetch')
        // convert to json
        const data = await res.json();
        renderUsers(data);

        return `Users are ${data}`
    }catch(err) {
        renderError(err)
        
        // Reject promise returned from async function 
        throw err;
    }
};

console.log('1');
// run on background will print after logs
// NOTE !!! an async function always return a promise
const users = getUsers();
console.log(users);
// in then handler the users will be the result value of the promise
// getUsers()
//     .then(users => console.log(users))
//     .catch(err => console.error(`2: ${err.message}`))
//     .finally(() => console.log('3 finished getting users'));

// IIFE get data from async function
(async function() {
    try {
        const users = await getUsers();
        console.log(`Users: ${users}`);
    }catch(err){
        console.error(`2: ${err.message}`)
    }
    console.log('3: Finished getting location');
})();

const getJSON = function (url, errorMsg = 'Something went wrong'){
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`)
        return response.json();
    });
};

const get3Users = async function(u1, u2, u3) {
    try {
        const data1 = await getJSON('https://jsonplaceholder.typicode.com/posts/1');
        const data2 = await getJSON('https://jsonplaceholder.typicode.com/posts/2');
        const data3 = await getJSON('https://jsonplaceholder.typicode.com/posts/3');
        console.log(data1,data2,data3);
        // Take an array of promises and will return a new promise, which will run all promises at the same time
        const data = await Promise.all([getJSON('https://jsonplaceholder.typicode.com/posts/1')],[getJSON('https://jsonplaceholder.typicode.com/posts/2')],[getJSON('https://jsonplaceholder.typicode.com/posts/3')])
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

get3Users();