/* 
 1. Craate a function that takes an unknown number of type stings arguments,
 create a single sting out of them all and then returns it 
*/
function concatStrings(...args) {
    return args.join("");
  }

  const str = concatStrings('e','r');
  console.log(str);
  
  /* 
   2. Craate a function that takes an unknown number of type number arguments,
   sums them all and the returns the sum 
  */
  function sumNums(...args) {
    return args.reduce((total, current) => total + current, 0);
  }

  const sum = sumNums(1,2,3);
  console.log(sum);
  
  /*
   3. Create a 3rd array out of arr1 and art2 of numbers
  */
  const array1 = [1,2];
  const array2 = [2,3];
  const array3 = [...array1, ...array2];
  console.log(array3);
  
  /*
   4. Craete a clone of the 3rd array
  */
  const array4 = structuredClone(array3);
  console.log(array4);