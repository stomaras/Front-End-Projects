function add(n1:number, n2:number, printResult: boolean, phrase:string){
    if(printResult){
        console.log(phrase + n1 + n2);
    } else {
        return n1+n2;
    }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is';

const result = add(num1,num2, printResult, resultPhrase)
console.log(result);

/* the core primitive types in Typescript are all lowercase */