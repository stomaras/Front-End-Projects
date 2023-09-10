// In number.js create the following functions
//     A function that takes an unknown number of number arguments and returns their sum
//     A function that takes 2 arguments. The first is an array of numbers. The second is a sort string, that either is "odd" or "even". The function should return the numbers that comply with the sort option.
//     A function that takes an argument and returns the type of that argument. Besides that primitive types, make sure that it distinguishes an object from an Array and null.
//     A function that takes 2 arrays combines them and returns the result
//     A function that takes 2 arguments. The first is an array of numbers. The second should be a string, that is either asceding or descending. It should sort the array based on the second argument and the return the result.

export const numberFunc1 = (numbers) => {
    const summary = numbers.reduce((sum, el) => {
        return sum += el;
    },0);
    return summary;
}

export const numberFunc3 = (arg) => {
    if(Array.isArray(arg)){
        return 'Array';
    } else if(arg === null){
        return null;
    } else {
        return typeof arg
    }
}

export const numberFunc4 = (array1, array2) => {
    return array1.concat(array2);
}

export const numberFunc5 = (array, sortOrder) => {
    let sorted;
    if(sortOrder === 'ascending'){
        sorted = array.slice().sort((a,b) => a -b);
        return sorted
    }else if(sortOrder === 'descending') {
        sorted = array.slice().sort((a,b) => b - a);
    }else {
        return "not valid sort Order"
    }
    return sorted;
}