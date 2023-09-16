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