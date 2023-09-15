function add(n1:number, n2:number, printResult: boolean, phrase:string){
    const result = n1 + n2;
    if(printResult){
        console.log(phrase + n1 + n2);
    } else {
        return result;
    }
}

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is';

const result = add(num1,num2, printResult, resultPhrase)
console.log(result);

/* the core primitive types in Typescript are all lowercase */


/*

Question 1: Why are "Types" useful and offer an advantage compare to vanilla JavaScript?
Answer: Types allow you to detect errors early and avoid some runtime errors.

Question 2: Does this code rely on type inference ?
const age: number = 29;
Not really - a type is assigned explicitly as well.

Question 3: What's the difference between js types (eg typeof 'Max' => 'string') and Typescript types (e.g const name: string = '...')
TS types are checked during compilation, JS types during runtime.
*/

enum Hero {
    SPIDERMAN='Sp',
    BATMAN='Bt',
    SUPERMAN='Sp'
}

// Objects && Arrays && Tuple && Enum
const person: {
    name:string,
    age:number,
    hobbies: string[],
    role: [number, string];
    hero:string;
} = {
    name:'Spyros',
    age:26,
    hobbies:['sports','cookies'],
    role: [2, 'author'],
    hero: Hero.BATMAN
};
console.log(person);

let favoriteActivities = person.hobbies;
console.log("Favorite Activities: ", favoriteActivities);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

person.role = [0, 'admin'];
console.log(person);


function combine(input1:number | string, input2:number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);
const combineNames = combine('Spyros', 'Tom');
console.log(combineNames);