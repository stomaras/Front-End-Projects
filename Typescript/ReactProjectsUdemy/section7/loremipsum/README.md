## Steps

#### Explore Data

Navigate to data.ts and explore array

#### Count State Value

In App.tsx, set up a count state value using
the useState hook. Set the default value to 1.

#### Form

Set up a form element that contains a number
input and a submit button. Attach the count
state value to the input using the value prop,
and set up a handleChange function to update
the count state value when the input changes.
Set the minimum value to 1, the maximum value
to 8, and step to 1.

#### Import Text and State Value

Import the text array from data.ts and set up a text state
value using the useState hook. Set the default value to an empty array.

#### OnSubmit

Attach an onSubmit event to the form, and create a
handleSubmit function to handle the form submission.
Inside the handleSubmit function, prevent the default form submission
behavior using the event.preventDefault(). Get the count state value,
and use it to create a new array by extracting the first n paragraphs from the text
array (where n is the count state value.). Set the text state value to the new array
Hint: I will use the array.slice()

#### Note array.slice

is a method in Javascipt that returns a shallow copy of a portion of an array into a
new array object. The slice() method takes two arguments: the starting index and the ending index
of the portion of the array that you want to copy. The starting index is inclusive, meaning the element
at the starting index is included in the copied portion, and the ending index is exclusive, meaning the element
at the ending index is not included in the copied portion

const fruits = ['apple','banana','cherry','date','elderberry']

const slicedFruits = fruits.slice(1,4)
copies element 1,2 and 3 (but not 4 into a new array)

console.log(slicedFruits) // ['banana','cherry','date']
