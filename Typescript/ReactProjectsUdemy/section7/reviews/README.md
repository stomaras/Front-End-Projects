## Steps

### Explore Data

Navigate to data.ts and take a look at the
data structure

### Import Reviews

First, import the reviews data into your
project. This data should be an array of objects
which each object representing a person's review
and containing properties such as name, job, image URL, and text.

### Set up State Value (Index)

Then, set up a state value that controls which person
from the list id displayed

### React Icons (Optional)

npm install react-icons --save

### Render First Person

To render the first person in the list, you can access the first
item in the reviews array and use its properties to display the person's
image (inline styles), name, job, and review text.

### Prev and Next

To allow the user to cycle through the reviews, you can set up
buttons to display the next and previous reviews in the list.
You can do this by keeping track of the current index in the reviews
array, and updating the index when the user clicks the next or previous
button. You can then use the updated index to access the corresponding person's
review from the reviews array.
