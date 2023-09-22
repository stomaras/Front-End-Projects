/*
all packages such as 3rd-party package are available with npm (React, jQuery etc)
packages live on npm 
we install 3rd party modules with npm 

after all we want to build out progree ---> for production 

                                                                (Babel)
Module              (Join all modules into one file)        Convert modern js back to ES5
Module-------------Bundling------------------------------->Transpiling/polyfilling--------------------------> Javascript Bundle
3rd-Party
Development

-------------------------------------------------------------------------------------------------------------------------------
Build Process                                                                                               Production


Most commomnly build tool is webpack(bundler) or parcel(0 configuration)

// An overview of modules in javascript
Module: Reusable piece of code that encapsulates implementation details;
Usually a standalone file
module ---> import(dependency) and exports(public API) 
*/
// Importing Module
// import './shoppingCart.js';
// import { shippingCost } from './shoppingCart.js';
// import { cart } from './shoppingCart.js';
// import { addToCart, totalPrice as price, totalQuantity as quantity } from './shoppingCart.js';
// exporting a public api such as class
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add from "./shoppingCart.js";
// add('pizza', 2)

// Module pattern functionality is to encapsulate functionality to have private data , and to expose a public API

// create a new scope and return data just once
// varibales and functions exists only in birthPlace which is the function
// parcel installed locally
// npx or npm scripts
// npx parcel index.html
// besides bundling do same with development server
// parcel create dist folder which stands for distribution index.html wth bunch of js files
const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };
    
    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity,
    };
})();


ShoppingCart2.addToCart('apple', 4)
