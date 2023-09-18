/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates.
For that, you will use a second API to deocode coordinates.

Here are your tasks:

Part 1:
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longtitude value (lng)
(these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse heocoding means to convert 
coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding:
https://geocode.xyz/api
3. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the 
fetch API and promises to get the data
4. Once you have the data, take a look at it in the cosnole to see all attributes that you received about the provided location.
Then, using this data, log a message like this to the console. 'You are in Berling, Germany'
5. Chain .catch method to the end of the promise chain and log errors to the console

Part 2:
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug into 
the countries API that we have been using.
*/

/***************** Query DOM ************************/
const countryContainer = document.querySelector('.country');
const buttonFetchCountry = document.querySelector('.buttonCountry');
console.log(buttonFetchCountry, countryContainer);

/******************Add Event Listener on thid dom element */

buttonFetchCountry.addEventListener('click', async () => {
    
    const data = await whereAmI('52.508','13.381');
    console.log(data);
})


/*************Helper Functions***************/

const logCountryAndCity = (city, countryName) => {
    console.log(`You are in ${city}, ${countryName}`);
}

const logError = (err) => {
    console.error(`Something went wrong ${err.message}`);
} 

const renderCountry = function (data) {
    const html = `
    <section>
        <h3>Continent: ${data.continent}</h3>
        <p>My Country is ${data.city} ${data.countryName}</p>
    </section>
    `;
    countryContainer.insertAdjacentHTML('beforeend', html);
}

const whereAmI = (lat, lng) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=es`)
    .then((response) => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        logCountryAndCity(data.city, data.countryName);
        renderCountry(data)
        return data;
    })
    .catch(err => {
        logError(err);
    })
}


/* 
Both promise and timer will finished at exact same time
both after 0 seconds, timer because we told it to finish after 0 seconds ,
and Promise because we told it to immediately become resolved
micro-tasks queue has priority over the callback queue
so we will have one in micro tasks queue and another one into callback queue
*/

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => {
//     console.log(res);
// })

// Promise.resolve('Resolved promise 2').then(res => {
//      for (let i=0; i < 10; i++){
//         console.log(res);
//     //     console.log(res);
//      }
// });

// console.log('Test End');

// Fullfilled promise means to win the lottery 
// Rejected Promise means to lose the lottery 

const lotteryPromise = new Promise(function(resolve, reject) {
    
    console.log('Lottery draw is happening');
    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You WIN money');
        } else {
            reject(new Error('You lost your money'));
        }
    },2000)
});


// Promisifying means to convert callback based asynchronous behaviour to promise based
lotteryPromise.then((res) => {console.log(res)}).catch(err => console.error(err))

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000)
    });
};


wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 1 second');
})

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));