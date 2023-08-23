/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their's 
dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's puppy if it is less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console. whether it's an adult ("Dog number 1 is an adult, and it is 5 years old")
   or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets.


TEST DATA 1: Julia's data [3,5,2,12,7],
Kate's data [4,1,15,8,3]
TEST DATA 2: Julia's data [9,16,6,8,3],
Kate's data [10,5,6,1,4]
*/

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];


const checkDogs = (dogsJulia, dogsKate) => {
    let dogsJuliaCopy = dogsJulia.splice(-2,2);
    dogsJuliaCopy = dogsJulia.splice(0,1);

    let kateAndJuliaDogs = dogsJulia.concat(dogsKate);

    kateAndJuliaDogs.forEach((dogAge, i) => {
        let status = dogAge <=3 ? 'puppy' : 'adult';
        const message = `dog number ${i} is an ${status} and is ${dogAge} years old`
        console.log(message); 
    });
}

console.log("-------------------Test Data 1------------------------------");
checkDogs(dogsJulia1, dogsKate1);
console.log("-------------------Test Data 2-----------------------------");
checkDogs(dogsJulia2, dogsKate2);