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


// Inheritance between classes
// Student is a subtype of a Person
// Inheritance between classes : Constructor Functions

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName,birthYear);
    this.course = course;
}

// Student.prototype inherits from Person.prototype
// Linking Prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// Inheritance Between "Classes": ES6 Classes
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance Methods
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2023 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static Method
    static hey() {
        console.log('Hey there');
    }
}

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course){
        // Always need to happen first!
        super(fullName, birthYear)
        this.course = course;
    }

    calcAge() {
        console.log(`I am ${new Date().getFullYear() - this.birthYear} years old, but as a student i feel more like ${new Date().getFullYear() - this.birthYear + 10} years old`);
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }
}

const tom = new StudentCl('Spyros Tom', 1997, 'Front End Development');
console.log(tom);
tom.introduce();
tom.calcAge();


///////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonPrototype = {
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonPrototype);

const StudentProto = Object.create(PersonPrototype);
StudentProto.init = function(firstName, birthYear, course) {
    PersonPrototype.init.call(this, firstName, birthYear);
    this.course = course;
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');


// 1) Public fileds
// 2) Private fields
// Public Methods
// Private Methods

class Account {

    // 1) Public fields (instances), are gonna be present on all the instances that we are creating through the class, not on the prototype
    locale = navigator.language

    // 2) Private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an acount, ${owner}`);
    }

    // 3) Public methods

    // Public Interface of our object
    getMovements(){
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.#movements.push(val * (-1));
    }

    requestLoan(val) {
        if(this._approveLoan(val)){
            this.deposit(val)
            console.log(`Loan approved`);
        }
    }

    // static methods available only on the class
    static helper() {
        console.log();
    }

    // 4) Private Methods
    _approveLoan(val) {
        return true;
    }

}

const account1 = new Account('Spyros',"EUR", 1111, []);
console.log(account1);

// account1._movements.push(2345);
// account1._movements.push(-230);
// console.log(account1);
// we must not access approveLoan method we need data encapsulation and data privacy
account1.deposit(103);
account1.withdraw(10);
account1.requestLoan(1000);
console.log(account1.getMovements());
// Encapsulation means to keep some properties and methods private inside tha class so that they are not accessible from outside of the class
console.log(account1);

Account.helper();