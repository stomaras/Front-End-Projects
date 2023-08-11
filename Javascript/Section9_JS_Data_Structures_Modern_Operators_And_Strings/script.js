'use strict'

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian','Pizzeria','Vegeterian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours: {
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
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

// skip element in the middle
let [main , , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main] 
console.log(main, secondary); 

// Receive 2 return values from a function
const [starterMenu, mainMenu] = restaurant.order(2, 0);
console.log(starterMenu, mainMenu);

const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
console.log(i, j);


const [k, , [q,o]] = nested
console.log(k,q,o);

// Default Values 
// may be useful if you get a data from an API 
const [p = 1, b = 1, r = 1] = [8,9];
console.log(p, b, r);

/* Destructuring Objects */
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// set deault like this
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// nested objects 
const { fri: {open: op, close: cl}} = openingHours
console.log(op, cl);

restaurant.orderDelivery({
    time:'22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});