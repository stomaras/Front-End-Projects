// // Code goes here!
// const names: Array<string> = []; // string[]
// // promises are javascript feature
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     },2000)
// });
// promise.then(data => {
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);
function countAndPrint(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndPrint('Hi there!'));
