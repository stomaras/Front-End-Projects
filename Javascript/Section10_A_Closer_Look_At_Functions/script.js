'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // numPassengers = numPassengers ?? 1;
    // price = price ?? 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH1223', 5);

createBooking('LG123', undefined, 1000);




const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtman',
    passport: 247382742342
}


const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 247382742342) {
        alert('Check In')
    } else {
        alert("Wrong passport");
    }
}

checkIn(flight, jonas);

// primitive type
console.log(flight);

// reference type 
console.log(jonas);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas);
checkIn(flight, jonas);

/* High Order Functions */
/*
- A function that receives another function as an argument, that returns a new function, or both
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);
addEventListener is a High-Order-Function, greet is a callback function

count is a Higher-order function
function count() {
    let counter = 0;
    return function() {
        counter++;
    };
}


*/


const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);

transformer('Javascript is the best!', oneWord);

const high5 = function() {
    console.log('Hi');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}


const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');


const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');



const luftasha = {
    airline:'Luftasha',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    }
};

luftasha.book(239,'Spyros Tomaras');
luftasha.book(635, 'John Smith');


const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}


const book = luftasha.book;

// explicitly set the this keyword of any function that we want to call
book.call(eurowings, 23, 'Sarah Williams')

book.call(luftasha, 239, 'Mary Cooper');
console.log(luftasha);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply method same with call method only difference is that does not receive a list of arguments after the this keyword

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss, ...flightData)


// Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(luftasha);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams')


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Agathi Tomara');

// with Event Listeners
luftasha.planes = 300;
luftasha.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', luftasha.buyPlane.bind(luftasha))

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(130));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }

/* 
Immediately Invoked Function Expressions (IIFE)
(function(){
    console.log("This will never run again")
})();

(() => console.log("This will never run again"))();

if you want to execute a function only once then IIFE is the best practice.

*/

let f;

const g = function() {
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
}

g();
f();
h();
f();

console.dir(f);


const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);