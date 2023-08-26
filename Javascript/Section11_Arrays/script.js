'use strict';


// DATA
const account1 = {
    owner: 'Jonas Schmedtman',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 80],
    interestRate: 1,
    pin: 4444,
}

const accounts = [account1, account2, account3, account4];

// LECTURES

const currenncies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

/* 1) SLICE METHOD */
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log([...arr])

/* slice method or spread operator for shallow copy */
// 2) SPLICE Method
// with splice method original array loses the part that was extracted
console.log(arr.splice(-1))
console.log(arr)

// 3) REVERSE
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

// 4) CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// 5) JOIN
console.log(letters.join(' - '));


// THE new at Method
const arrNew = [23, 11, 64];
console.log(arrNew[0]);
console.log(arrNew.at(0));

// getting last array element
console.log(arrNew[arrNew.length -1]);
console.log(arrNew.slice(-1));
console.log(arrNew.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Looping Arrays for each 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const [i, movement] of movements.entries()) {
    if(movement > 0){
        console.log(`Movement ${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('-----FOREACH------')
/*
First Parameter always must be the current element 
Second Parameter always the current index
Third Parameter always the array on which we looping over
*/
movements.forEach(function(mov, i, arr) {
    if(mov > 0){
        console.log(`Movement ${i + 1} You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});

/* 
    MAP, FILTER, REDUCE (THEORY)

   1. Map method is another method which used in order to loop over arrays, map is similar with the forEach method 
   but with the difference that map create a new array based on the original array
   map returns a new array containing the results of applying an operation on all original array elements

   2. Filter method is used to filter for elements in the original array which satisfy a certain condition
   filter returns a new array containing the array elements that passed a specified test condition.

   3. Reduce method boil ("reduces") all array elements down to one single value
   (e.g adding all elements together)
*/

/* MAP method in practice */
/* we want to convert movements from euros to dollars */
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(mov =>  mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = []
for(const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
};
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
    if(mov > 0){
        return `Movement ${i+1}: You deposited ${mov}`;
    }else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    }
});

console.log(movementsDescriptions);

/* FILTER method in practice */

const deposits = movements.filter((mov) => {
    return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for(const mov of movements){
    if(mov > 0){
        depositsFor.push(mov)
    };
}
console.log(depositsFor);

const withdrawals = movements.filter((mov) => {
    return mov < 0;
});
console.log(withdrawals);

/* REDUCE METHOD */
/* boil down elements of an array into one single value 
   first parameter is the accumulator that keeps accumulating the value that we ultimately want to return
   accumulator -> snowball
   cureent value
   index
   arr
   initial value of the accumulator in the first loop iteration
*/
// console.log(movements);
// const balannce = movements.reduce((acc, cur, i, arr) => {
//     console.log(`Iteration number ${i}: ${acc}`);
//     return acc + cur;
// }, 200);

const balannce = movements.reduce((acc, cur) => { acc + cur}, 0);


console.log(balannce);

let balance2 = 0;
for(const mov of movements) {
    balance2 += mov;
}
console.log(balance2);

// Maximum value of movements
// reduce is for boiling down the array into one single value, it could be a multiplication , or even something completely different like a string or an object
// when we use reduce the big question we have to ask is what should be the purpose of this accumulator value
// acc now will keep track of the current maximum value.
// in reduce method we must some how return the accumulator in the next iteration.
const max = movements.reduce((acc, mov) => {
    if(acc > mov){
        return acc;
    } else {
        return mov;
    }
}, movements[0]);

console.log(max);


/* The Magic Of Chaining Methods */
/* Let's say that we wanted to take all the movement deposits convert them from euros to dollars and finally convert them all up ,
*/

const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


/* FIND Method
   we use this method to retrieve one element of an array based on a condition
   returns the first element of an array that satisfies this condition
   filter return all the elements that match the condition, while the find method only returns the first one
   filter method returns a new array , while the find returns only the element which match the condition.
*/

const firstWithdrawal = movements.find((mov) => {
    return mov < 0;
});

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/* FindIndex Method */
/* FindIndex returns the index of the found element and not the element itself */
/* On out project Close an account actually means closing an account from the accounts array */
/* To delete an element from an array we use the splice method we need the index we want to delete, we can found index from FindIndex method 
   FindIndex returns the index on the first element which match the condition
   similar with the indexOf method
   Both find and findIndex methods get access to also the currentindex and current entire array
*/