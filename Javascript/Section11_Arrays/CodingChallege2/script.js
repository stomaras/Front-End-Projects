/*
Let's go back to Julia's and Kate's study about dogs.
This time, they want to convert dog ages to human ages
and calculate the average age of their dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order.

1. Calculate the dog age in human years using the following formula:
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is <= 2 years old,
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
4. Run the function for both datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

let humanAges = []
const calcAverageHumanAge = (dogsAge) => {
    // MAP Method
    humanAges = dogsAge.map((dogAge) => {
        if(dogAge <= 2){
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });
    console.log(humanAges);

    // FILTER Method
    const adults = humanAges.filter((humanAge) => humanAge > 18);
    console.log(adults);

    // REDUCE METHOD
    const averageHumanAgeOfAdults = adults.reduce((acc, humanAge) => {
        return (acc + humanAge);
    },0) / adults.length;

    console.log(averageHumanAgeOfAdults);
    return averageHumanAgeOfAdults;
};

calcAverageHumanAge(dogAges1);
calcAverageHumanAge(dogAges2);

const calcAverageChaining = (dogsAge) => {
    dogsAge
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) 
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);

}

const avg1 = calcAverageChaining([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageChaining([7, 8, 5, 3, 1]);

console.log(avg1,avg2);