// In strings.js create the following functions
//     1) A function that takes 2 arguments. The first argument should be a base string and the second a test string that will check how many times it exists inside the first one. 
//        The function should return the number of times the test string exists in the first one. If not, return a string that says that the test string is not included.
//     2) A function that takes 3 arguments. The first argument should be a base string. The second one should be a search string, that searches the base string. 
//        The third one should be a replace string, that will replace the search string. The function should return the result string.
//     3) A function that takes 2 arguments. The first should be a base string. The second should be a number. The function should return the base string,
//        multiplied on the second number but each time there should be a "." and space separating every time we multiply the string and adding a new one. The function should return the result.

/*
baseStr: test
testStr: A text contains text many times. Text is very important
*/
export const stringFunc1 = (baseStr, testStr) =>  {
    const finalStr = testStr.toLowerCase();
    const finalBaseStr = baseStr.toLowerCase();
    let result = finalStr.split(finalBaseStr).length - 1;
    return result;
}