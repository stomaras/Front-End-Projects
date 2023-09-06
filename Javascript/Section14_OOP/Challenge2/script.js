/* 
Coding Challenge 1 Re-create, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called speedUS which sets the current speed in mi/h (but converts it to km/h before storing the value, by multipling the input by 1.6)
4. Create a new Car and experiment with the accelerate and brake methods, and with the getter and setter

DATA CAR 1: 'Ford' going at 120 km/h;
*/
class Car {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Car('Ford', 110);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(`current speed is ${ford.speedUS}`);

ford.speedUS = 50;
console.log(ford);
