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