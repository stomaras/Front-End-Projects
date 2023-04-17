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
