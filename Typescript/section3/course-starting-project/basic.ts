
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1:Combinable, input2:Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-text') {
        return result.toString();
    }else {
        return +result;
    }
}

const combinedNames = combine('Spyros', 'Tom', 'as-text');
console.log(combinedNames);
const combinedAges = combine(12, 18, 'as-number');
console.log(combinedAges);

/*
Type Aliases can be used to "create" your own types.You are not 
limited to storing union types though - you can also provide an alias to a (possibly complex) object type
*/

type User = {name: string, age:number};
const u1: User = {name: 'Max', age: 30};

function greet(user: {name: string, age:number}) {
    console.log('Hi I am' + user.name);
}

function isOlder(user: User, checkAge:number) {
    return checkAge > user.age;
}