'use strict'

const weekdaysf = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24
    },
};

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian','Pizzeria','Vegeterian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],

    // ES6 Enhanced object literals
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1,ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
    }
}
console.log(restaurant);

// With optional chaining
// only if mon property exists only then open property will be read from there if not immediately undefined will be log
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri.open);

// example 
const days = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(open);
}

// nullish values are null and undefined

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisoto?.(0,1) ?? 'Method does not exist');

const users = [{name:'Jonas', email:'hello@jonas.io'}]
console.log(users[0]?.name ?? 'User array empty');

// // skip element in the middle
// let [main , , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main] 
// console.log(main, secondary); 

// // Receive 2 return values from a function
// const [starterMenu, mainMenu] = restaurant.order(2, 0);
// console.log(starterMenu, mainMenu);

// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);


// const [k, , [q,o]] = nested
// console.log(k,q,o);

// // Default Values 
// // may be useful if you get a data from an API 
// const [p = 1, b = 1, r = 1] = [8,9];
// console.log(p, b, r);

// /* Destructuring Objects */
// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, 
//     openingHours: hours, 
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // set deault like this
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // nested objects 
// const { fri: {open: op, close: cl}} = openingHours
// console.log(op, cl);

// restaurant.orderDelivery({
//     time:'22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });


// const arr = [7,8,9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr]
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// // Copy Array 
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays 
// const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menuu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str,'','S.'];
// console.log(letters);


// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.orderPasta(...ingredients)

// // Objects 

// const newRestaurant = {foundedIn: 1999, ...restaurant, founder: 'Tom'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Reaustarant Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/* Rest Pattern and Parameters */
/* The spread operator is to unpuck an array while rest is to pack elements into an array 
   and sice this sounds really confusing 
*/

// Spread because on Right Side of =
const array = [1,2,...[3,4]];

// REST, because on LEFT side of =
const [a, v, ...others] = [1,2,3,4,5];
console.log(a, v, others);

// Object

const { saturday, ...weekdays } = restaurant.openingHours
console.log(weekdays);

// Functions 
const add = function (...numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]
        console.log(sum);
        
    }
    console.log(numbers);
}

add(2,3);
add(2,3,4,5);
add(8,2,5,6,7,6,8);

const x = [2,34,7];
add(...x);

console.log("---------------------OR----------------------------");
// Use ANY data type, return ANY data type, short-circuiting if first operant is truthy then other operant will not be evaluated
console.log(3 || 'Jonas');
console.log('' || 'JOnas'); // 'jonas, because '' is falsy value
console.log(true || 0); // true because is truthy value
console.log(undefined || null); // undefined is falsy so go to the second operand and show null, that happens even though null is falsy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null);// result is hello, because hello is first truthy value

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
 
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("-------------------------------AND---------------------------------------");

console.log(0 && 'Jonas'); // if first value is falsy then show first value
console.log(7 && 'Jonas'); // when it is truthy the means the evaluation continues and last value is returned

console.log('Hello' && 23 && null && 'Jonas'); // first truthy , second ruthy value and third is falsy so null will print

// Practical Example 
if(restaurant.orderPasta){
    restaurant.orderPasta('musg',"tom",'tomato');
}

restaurant.orderPasta && restaurant.orderPasta('fd','d','d') // execute second part of code is the first one is true


restaurant.numGuests = 0;

// Nullish: null and undefined (NOT 0 or '')
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);


for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// element plus the index of the element
console.log([...menu.entries()]);

// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for( const day of properties){
    openStr += `${day},`;
}
console.log(openStr);

// PROPERTY VALUES 
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// sets and maps ES6 JS
// set a collection of unique values
// set is an iterable
// in sets there are actually no indexes.
// spread operator works on all iterables that include sets
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('apple'));
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

// Example 
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('Tomaras').size);


// Maps Part 1
// Data Structure in order to Map Values to Keys
// just like an Object data is stored in a key value pair in maps.
// in maps keys can have any type , in objects the keys are always basically strings.

const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

// set method
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

    console.log(rest.get('name'));
    console.log(rest.get(true));

// get method
const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'))

console.log(rest.has('categories'));
rest.delete(2)
console.log(rest);
console.log(rest.size);

rest.set([1,2], 'Test')
console.log(rest.get([1,2]));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


// Maps Part 2
const question = new Map([
    ['question','What is the best programming language in the world?'],
    [1, 'C'],
    [2,'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// maps are also iterable
// Quiz App

console.log(question.get('question'));
for (const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}


const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// covert map to array 
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);



/* Data Structures Overview */

/* Sources of Data */

// 1) From the program itself: Data written directly in source code (e.g status messages)
// 2) From the UI: Data input from the user or data written in DOM (e.g tasks in todo app)
// 3) From external sources: Data fetched for example from web api (e.g recipe objects)
// Collection of data 
// data structure
// Simple List ---> Arrays or Sets
// KEY/VALUE Pairs ---> Objects or Maps

// JSON Format an object inside it arrays with objects 

// There are other Built in 
// WeakMap
// WeakSet

// NON-BUILT IN
// Stacks
// Queues
// Linked lists
// Trees
// Hash Tables

// 1) Arrays 
// tasks = ['Code','Eat','Code'];
// ["Code","Eat","Code"]

// Use when you need ordered list of values(might contain duplicates)
// Use when you need to manipulate data
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// 2) SETS
// tasks = new Set(['Code','Eat','Code'])
// {"Code","Eat"}

// Use when you need to work with unique values
// Use when high-performance is really important
// Use to remove duplicates from arrays
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// 3) OBJECTS
// task = { task:'Code', date: 'today', repeat: true};
// more traditional key/value store ("abused" objects)
// easier to write and access values with . and []

// Use when you need to include functions (methods)
// Use when working with JSON (can convert to map)
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// 4) MAPS
// task = new Map([['task','Code'],['date','today'],[false, 'Start Coding']]);
// better performance
// keys can have any data type
// easy to iterate
// easy to compute size

// Use when you simply need to map key to values
// Use when you need keys that are not strings

// Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// position at which the extraction will start 
console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log("You got the middle seat");
    else console.log("You got lucky");
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// strings are primitives

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);


// replacing 
const priceGB = '288,97e'
const priceUS = priceGB.replace('e','$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace(/door/g,'gate'));


//Booleans
const planee = 'A320neo';
console.log(planee.includes('A320'));
console.log(planee.includes('Boeing'));
console.log(planee.startsWith('Air'));

if(planee.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log("You are not allowed on board");
    } else {
        console.log("Welcome aboard");
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');