type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin { }

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;


type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add(1, 5);

/* Optional Chaining */

/*
Let's say we have an application we get data from backend or from any source or from database
*/

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title:'CEO', description:'My own company'}
}

console.log(fetchedUserData?.job.title);

/* End of optional Chaining */

/* Nullish Coalescing */

const userInput = undefined;

// if userInput is null or undefiend use DEFAULT 
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

/* End of Nullish Coalescing */

// type UnknownEmployee = Employee | Admin;


// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name); 
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }

    
//     if ('startDate' in emp) {
//         console.log('Privileges: ' + emp.startDate);
//     }
// }

// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// class Car {
//     drive() {
//         console.log("Driving...");
//     }
// }

// class Truck {
//     drive() {
//         console.log("Driving a truck...");
//     }

//     loadCargo(amount: number) {
//         console.log('loading cargo ...' + amount);
//     }
// }


// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if ('loadCargo' in vehicle) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// /*
// Interfaces can not used of run time as intanceof classes 
// with instance of we can find out id some object is based on that class.

// type guard is the idea of checking if a certain property or method exists before try to use it.

// you can use instance of or in or use typeof.

// we can not use instance of when we wroking with interfaces
// */

// /*
// Discriminated Union 
// */

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed:' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement> document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input');


// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there';
// }

// /* Index Properties */

// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with character!' }
//     [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character!'
// };