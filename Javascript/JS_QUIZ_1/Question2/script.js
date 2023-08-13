const foods = {
    apple: 12,
    tomato: 9,
    banana: 10,
    lemon: 20,
}

const foodsValues = Object.values(foods);
const printValuesOfObject = () => {
    foodsValues.forEach((key) => {
        console.log("Value of Object : " + key);
    })
}

const foodsKeys = Object.keys(foods);
const printKeysOfObject = () => {
    foodsKeys.forEach(food => {
        console.log("Key of Object : " + food);
    });
}

const print = () => {
    console.log("Print keys and values of object " + JSON.stringify(foods));
}

print();
printValuesOfObject();
printKeysOfObject();
