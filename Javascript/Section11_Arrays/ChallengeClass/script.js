//5.20 Questions: Array methods
// 1. Create an array colors with 5 colors inside
const colors = ["red", "yellow", "blue", "green", "purple"];

// 2. Log the 2nd color
console.log(colors[1]);

// 3. Add a new color at the end of the array
colors.push("black");

// 4. Add a color from the front of the array
colors.unshift("white");

// 5. Remove a color from the 3rd index of the array and add a new one
colors.splice(3, 1, "navy blue");

// 6. Log how many colors the array has
console.log(colors.length);

// 7. Add 2 colors 2 indexes before the last index
colors.splice(-2, 'deeppurple', 'grey')

// 8. Create 2 arrays of numbers(num1 and num2), that have 4 numbers each and then create a 3rd (num3)
// that includes both their values
let num1 = [1,2,3,4]
let num2 = [5,6,7,8];
let num3= num1.concat(num2);

// 9. Check if num3 has an item with value 2
console.log(num3.includes(2));

// 10. Log the values of num3, if they are even;
num3.forEach((num) => {
    const nm = (num % 2 === 0) ? console.log(num) : 'Not Even';
})
