## Steps

#### State Variable

In App.tsx, set up a state variable called
items using the useState hook.

#### Form Component

Create a Form Component that contains an input field
and a submit button. When the user submits the form , the handleSubmit
function is called.

In the handleSubmit function, prevent the default form submission
behavior using event. preventDefault(). If the form is submitted
with an empty value, log a message and return.

#### Add Item

If the form is submitted with a value,
create a new item object that includes a
name(taken from the form input), a
completed property (default value false),
and a unique id (generated using a library like nanoid)

Add the new item to the items state variable
using the setItems function.

#### Render List

Create two new components: Items and SingleItem. In Items, iterate over
the list of items and render each one in a SingleItem component. For now ,
only render the name of the item.

#### SingleItem

In SingleItem, set up a state variable
called isChecked with a default value of the item's completed property.
Render a checkbox and add inline styles to add or remove the text-decoration:
line-through property based on the isChecked value. Set up functionality
to toggle the isChecked state variable when the checkbox is clicked.

### Local Storage

localStorage is a built in object in web browsers that allows web applications
to store key-value pairs locally within the user's browser

To store data in localStorage, you can use the localStorage. setItem(key,value) method,
where key is a unique identifier for the data being stored and value is the data you want
to store. Note that the value parameter needs to be a string.

Here is an example of how to use the localStorage.setItem()'

localStorage.setItem('username', 'john')

For example:

const user = {
name:'John'
age:30,
email:'john@gmail.com'
}

localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.name)
console.log(storedUser.age)

#### Global Edit

Instead of 'local' value, set completed 'globally' (in the list ) and save result in the local Storage.

#### React-Toastify

Implement the react-toastify library to handle alerts when a new item is added to the list
, when the user tries to submit an empty form, and when an item is removed from the list.
