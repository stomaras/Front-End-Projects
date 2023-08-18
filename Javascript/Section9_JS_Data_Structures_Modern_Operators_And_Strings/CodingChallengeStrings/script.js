/* Write a program that receives a list of varibale names writtenn in underscore_case and covert them to camelcase

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output

underscoreCase
firstName
someVariable
calculateAge
delayedDeparture
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

function clickFunc() {
    const text = document.querySelector('textarea').value;
    let words = text.split('\n')
    for(const word of words){
        const splitWords = word.toLowerCase().split('_');
        const secondWordFirstLetter = splitWords[1].charAt(0).toUpperCase();
        const remainingLetters = splitWords[1].slice(1);
        const capitalizeWord = secondWordFirstLetter + remainingLetters;
        const finalWord = splitWords[0] + capitalizeWord;
        console.log(finalWord);
    
    }
}

document.querySelector('button').addEventListener('click', clickFunc);
