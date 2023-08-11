'use strict'

const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian','Pizzeria','Vegeterian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
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