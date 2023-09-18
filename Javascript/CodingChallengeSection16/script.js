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


