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


function merge<T extends Object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max', hobbies:['Sports'] }, {age:30});
console.log(mergeObj)


interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi there!'));


function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
){
    return "Value: " + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}


const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Menu');
textStorage.getItems();

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// with partial make all options optional
function createCourseGoal(title:string, description:string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
