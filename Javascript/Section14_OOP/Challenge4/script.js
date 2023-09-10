/* 
Coding Challenge #4

1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCL' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the Car class.

DATA CAR 1: 'Rivian' going at 120km/h, with a charge of 23%.
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    // return this in order to make method chaining in classes.
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.3;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class ElectricCar extends CarCl {
    
    #charge;

    constructor(make, speed, charge){
        super(make, speed)
        this.#charge = charge;
    }

    // Public API interact with private property from outside
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }
}

const rivian = new ElectricCar('Rivian', 120, 3);
console.log(rivian);

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);