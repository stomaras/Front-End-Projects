
// Create 2 libraries under a directory named utils, name the first strings.js and the second numbers.js.
// Both libraries will include helper functions and should be exported, so other js files can used them
// In strings.js create the following functions
//     1) A function that takes 2 arguments. The first argument should be a base string and the second a test string that will check how many times it exists inside the first one. 
//        The function should return the number of times the test string exists in the first one. If not, return a string that says that the test string is not included.
//     2) A function that takes 3 arguments. The first argument should be a base string. The second one should be a search string, that searches the base string. 
//        The third one should be a replace string, that will replace the search string. The function should return the result string.
//     3) A function that takes 2 arguments. The first should be a base string. The second should be a number. The function should return the base string,
//        multiplied on the second number but each time there should be a "." and space separating every time we multiply the string and adding a new one. The function should return the result.
// In number.js create the following functions
//     A function that takes an unknown number of number arguments and returns their sum
//     A function that takes 2 arguments. The first is an array of numbers. The second is a sort string, that either is "odd" or "even". The function should return the numbers that comply with the sort option.
//     A function that takes an argument and returns the type of that argument. Besides that primitive types, make sure that it distinguishes an object from an Array and null.
//     A function that takes 2 arrays combines them and returns the result
//     A function that takes 2 arguments. The first is an array of numbers. The second should be a string, that is either asceding or descending. It should sort the array based on the second argument and the return the result.
// Import the functions from both libraries in index.js and create examples that show that thy work

import {stringFunc1} from "./utils/strings.js"

const result = stringFunc1("Test","test a new test");
console.log(result);