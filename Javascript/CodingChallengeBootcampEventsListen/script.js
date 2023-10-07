//1. Add a click event handler to btnOne via HTML,
// that logs the event
const btnOne = document.querySelector('#btnOne');
btnOne.addEventListener('click', (e) => {
    console.log(e);
})

//2. Add a click event handler to btnTwo via JavaScript,
// that logs the event
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', (e) => {
    console.log(e);
})