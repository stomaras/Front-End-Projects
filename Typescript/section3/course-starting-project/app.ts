function addMain(n1:number, n2:number){
    return n1 + n2;
}

function printResultMain(num: number){
    console.log("Result: " + num);
}



printResultMain(addMain(5,4));


let combineValues: (n1:number, n2:number) => number;

combineValues = addMain;

console.log(combineValues(8,8));


function generateError(message:string, code:number): never {
    throw {
        message: message,
        errorCode: code
    };
}

const resultValue = generateError('An error occured', 500);
console.log(resultValue);