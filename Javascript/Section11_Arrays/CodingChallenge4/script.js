/*
Julia and Kate are still studying dogs, and this time
they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion
and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion.

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a 
new propert. Do NOT create a new array, simply loop over the array. 
Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners,
   so you first need to find Sarah in the owners array
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
   ('ownersEatTooLittle').
4. Log a string to the console for each array created 3., like this: "Maltida and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's 
   dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommmended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just ture or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions inside the array's object)

HINT: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10).
      Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Maltida'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Maltida'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];



console.log('-----------------------------------Question 1---------------------------------------------------------------------------------');

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a 
// new propert. Do NOT create a new array, simply loop over the array. 
// Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach((dog) => {
    dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2));
});
console.log(dogs);


console.log('-----------------------------------Question 2---------------------------------------------------------------------------------');

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners,
// so you first need to find Sarah in the owners array
const dogSarah = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
if(dogSarah.curFood > dogSarah.recommendedFood){
    console.log(`Too much`);
} else {
    console.log(`Too little`);
}


console.log('-----------------------------------Question 3---------------------------------------------------------------------------------');

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//    ('ownersEatTooLittle').
const dogsEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood);
const ownersEatTooMuch = dogsEatTooMuch.map((dog) => dog.owners).flat();
console.log(ownersEatTooMuch);
const dogsEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood);
const ownersEatTooLittle = dogsEatTooLittle.map((dog) => dog.owners).flat();
console.log(ownersEatTooLittle);


console.log('-----------------------------------Question 4---------------------------------------------------------------------------------');
// 4. Log a string to the console for each array created 3., like this: "Maltida and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's 
//    dogs eat too little!"


const convertArrayWithJoin = (arr) => {
    const message = arr.join(' and ');
    return message;
}

const messageEatTooMuch = convertArrayWithJoin(ownersEatTooMuch);
const messageEatTooLittle = convertArrayWithJoin(ownersEatTooLittle);
console.log(messageEatTooMuch + 'dogs eat too much!');
console.log(messageEatTooLittle + 'dogs eat too little!');

console.log('----------------------------------------------------Question 5------------------------------------------------------------------------------');
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommmended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));


console.log('-----------------------------------------------------Question 6------------------------------------------------------------------------------------');
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just ture or false)

const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

console.log('------------------------------------------------------Question 7------------------------------------------------------------------------------------');
// 7. Create an array containing the dogs that are eating an OKAY amount of food 
const dogsWithOkayAmountOfFood = dogs.filter(checkEatingOkay)
console.log(dogsWithOkayAmountOfFood);

console.log('---------------------------------------------------QUestion 8--------------------------------------------------------------------------------');
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions inside the array's object)

const compare = ((a,b) => a-b);

const shallowCopyDog = dogs.slice();

console.log(shallowCopyDog.sort((d1,d2) => (d1.curFood > d2.curFood) ? 1 : (d1.curFood < d2.curFood) ? -1 : 0));
