'use strict'

const createObject = () => {
    const person = {
        firstName: 'Spyros',
        lastName: 'Tomaras',
        printFullName:function(){
            console.log("Full Name : " + this.firstName + this.lastName);
        },
        address: {
            street: "Pallad",
            city:'Athens',
            postalCode: 32456
        }
    }
    return person;
}

const Person = createObject();
const person = JSON.stringify(Person)
console.log(person);