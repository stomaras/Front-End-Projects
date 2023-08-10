'use strict';


function calcAge(birthYear) {
    const age = 27 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh , and you are a millenial, ${firstName}`;
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = 'Jonas'
calcAge(1991);