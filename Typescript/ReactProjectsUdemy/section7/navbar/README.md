## Steps

#### Data

Check the data.ts file and find two arrays: one for links
and one for social icons. Notice how icons from react-icons
can be used directly in the data structures.

#### Initial Approach

Set up a Navbar component with a showLinks state value
(boolean). Import the links from data and render them
conditionally in the Navbar based on the showLinks state
value. Set up a button that toggles the value and as a
result, toggles the links. Set up CSS for the Navbar.

#### Fixed Approach

Hide links by default in the CSS. Create a class that
displays links with a fixed height. Refactor the tsx in the
Navbar to toggle the class, which in turn toggles the Navbar.

#### Dynamic Approach

Use the useRef and getBoundingClientRect(), function, to get exact
height of links.

getBoundingClientRect(): gets the values about a specific element
