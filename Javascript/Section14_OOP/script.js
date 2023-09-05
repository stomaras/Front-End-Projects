'use strict';

// blueprint for a person
const Person = function(firstName, birthYear) {

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
}

//////////////////////////////////////////////////////////////////////////////////
const spyros = new Person("Spyros", 1997);
console.log(spyros);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically return {} from the beginning

const maltida = new Person('Maltida', 2017);
const jack = new Person('Jack', 1982);

console.log(maltida, jack);

console.log(maltida instanceof Person);

// Prototypes, prototypal inheritance


// each object has access from methods of prototypes.
// each object which created from constructor Person will have access to all methods of prototype property.
spyros.calcAge();

console.log(spyros.__proto__);
console.log(spyros.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(spyros));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(spyros.species, maltida.species);

console.log(spyros.hasOwnProperty('firstName'));

// species is not part of jonas object it simply has access to it because it is part of prototype property
// of person
console.log(spyros.hasOwnProperty('species'));

// How PROTOTYPAL INHERITANCE / DELEGATION WORKS
// constructor fucntion ------> Prototype
//                              [Person.prototype]
//                              calcAge: function() Not of Person, but objects created by Person

// Object.prototype (top of prototype chain)
console.log(spyros.__proto__.__proto__);

console.log(Person.prototype.constructor);

// each array will inherit methods from its prototype
const arr = [3,4,5,6,7,8,9,9,3,4,5,6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// add new method on prototype extended prototype not a good idea
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.log(h1);

// objects have prototypes











