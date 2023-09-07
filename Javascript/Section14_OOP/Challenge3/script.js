/* 
Challenge 3

1. Use a constructor function to implement an 
   Electric Car (called EV) as a CHILD "class" of Car.
   Besides a make and current speed, the EV also has the 
   current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an 
   argument 'chargeTo' and sets the battery charge to 
   'chargeTo';
3. Implement an 'accelerate' method that will 
   increase the car's speed by 20, and decrease the 
   charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'
   (charge to 90%). Notice what happens when you accelerate 

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%


*/

const Car = function(make,speed) {
        this.make = make;
        this.speed = speed;
    }

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
}



/* 
1. Use a constructor function to implement an 
   Electric Car (called EV) as a CHILD "class" of Car.
   Besides a make and current speed, the EV also has the 
   current battery charge in % ('charge' property);
*/

const ElectricCar = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge
}

// Link The Prototypes
ElectricCar.prototype = Object.create(Car.prototype);


// 2. Implement a 'chargeBattery' method which takes an 
//    argument 'chargeTo' and sets the battery charge to 
//    'chargeTo';
ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

// 3. Implement an 'accelerate' method that will 
//    increase the car's speed by 20, and decrease the 
//    charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
//    will override the function of parent class.
ElectricCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge = this.charge - 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}



// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'
//    (charge to 90%). Notice what happens when you accelerate

const tesla = new ElectricCar('Tesla', 100, 0.2);
tesla.chargeBattery(2);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
