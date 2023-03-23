#### Set Up

First create - three components (Tours, Tour, and Loading), you can create
three separate files in your project directory: Tours.tsx, Tour.tsx, and Loading.tsx.
In each of these files, you will define a React Functional component that returns TSX code
for rendering the respective component.

#### Fetch Tours

The Tours component will be responsible for rendering a list of Tour components.
In App.tsx, you will fetch the tours data from a URL using the fetch API. Before the
data is loaded, you should show a loading spinner or message, which can be implemented
using the loading component.

#### Render Tours

Once the data is loaded, you can set the state of your
component to store the tours data. You can then map over the tours
array and render a Tour component for each tour.
Each Tour component will receive the tour data as props, including the tour's
id, image, info, name, and price.
