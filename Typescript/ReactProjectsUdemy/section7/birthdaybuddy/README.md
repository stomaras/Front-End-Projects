#### Import Data

In App.tsx, import the data to be rendered as an array of objects. Each object should represent a person
and contain properties such as name, age, and image url.

### Setup State Variable

Then, set up the data as a state variable using the
useState hook. This will allow the data to be modified
and have those changes automatically reflected in the
rendered output.

### Iterate and Render

To render the list of people, iterate over the data
array using the map method. For each item in the array,
render an image element (hint: use inline
styles to make width smaller).Additionally, render the
persons's name and age as plain text.

Create a List Component to hold the rendered items. This component
can be a simple div element containing the list of Person components.

Create a Person component to render the information for each person.
This component should receive the person data as props and render the image, name, and
age information.
