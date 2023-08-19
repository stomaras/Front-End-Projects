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
    booking: [],
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