## Steps

#### Title Component

First, you need to create a Title component to
display the main title of your app. This component
can be a simple function that retuns a heading element
with the app title.

#### Export and Import Data

Import the menu items data from data.ts into your
project. This data should be an array of objects,
with each object representing a menu item and containing
properties such as title, price, image, URL and description.

#### State Value

Set Up the menu items data as a state variable in the App.tsx
component using the useState hook. This will allow you to modify
the data and have those changes automatically reflected in the rendered
output.

#### Uniques Categories

In the App.tsx component, set up functionality to get only the
unique categories from the menu items data and store them in a
separate array. Add an "all" category to this array to display
all menu items.
Hint: new Set()
You can find more info on Set Object below after all steps.

#### State Value and Render Categories

Set up the categories array as a state variable in the App.tsx
component using the useState hook. This will allow you to modify
the data and have those changes automatically reflected in the
rendered output.

Create a Categories component and pass the categories state value
down to this component. In the Categories component, iterate over
the categories array and render buttons for each category.

#### Set Object

In Javascript , The Set Object is a collection of unique values.
It allows you to store values of any type, such as primitive types
(numbers, strings, booleans) and object references.

- Create a new Set
  let mySet = new Set();

- Add values to the set
  mySet.add(1)
  mySet.add(2)
  mySet.add(3)

- Add a duplicate value(ignored)
  mySet.add(1)

- Get the size of the set (3)
  console.log(mySet.size);

- Check if a value is in the set (true)
  console.log(mySet.has(2));

- Remove a value from the set
  mySet.delete(2);

- Get an array of all values in the set
  let myArray = Array.from(mySet);
  console.log(myArray);
