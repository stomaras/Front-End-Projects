
function combine(input1:number | string, input2:number | string, resultConversion: string | number){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-text') {
        return result.toString();
    }else {
        return +result;
    }
}

const combinedNames = combine('Spyros', 'Tom', 'as-text');
console.log(combinedNames);
const combinedAges = combine(12, 18, 'as-number');
console.log(combinedAges);