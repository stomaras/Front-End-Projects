const strings = ["c", "v", "D", "z", "H"];
// 1. Please strings sort in asceding order

const sortAsc = strings.sort((a, b) => a.localeCompare(b));
console.log(sortAsc);

// 2. Please strings sort in desceding order

const sortDesc = strings.sort((a,b) => b.localeCompare(a));
console.log(sortDesc);
let numbers = [1, 2, 15, 222, 32, 1200];

// 3.  Please numbers sort in asceding order

const numAsc = numbers.sort((a, b) => a - b);
console.log(numAsc);

// 4. Please numbers sort in desceding order

const numDesc = numbers.sort((a,b) => b-a);
console.log(numDesc);
console.log(numAsc.reverse());

// 5. Please sum the values in the numbers array

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

const usersSum = users.reduce((sum, user, index, users) => sum + user.age, 0);

console.log(usersSum);

// 6. Please create a new array from users, only with thoese above the age of 20

const usersAbov20 = users.filter((user) => user.age > 20);

console.log(usersAbov20);
