#### Fetch Data

In App.tsx, use the fetch API to get job information
from an external API. Use the useEffect hook to make
the API call when the component mounts. While the data
is being fetched, set up a loading state that displays
a message to the user.

#### State Value.

Once the data has been fetched, store it in a state
variable using the useState hook. This will allow you
to modify the data and have those changes automatically
reflected in the rendered output.

#### JobInfo

Create a JobInfo component to display the first job in the list.
Use object destructuring to extract the relevant data from the
job object. Display the company, dates, title, and duties, using the
Duties component to render the list of duties.

#### JobDuties

In the duties component, iterate over the array of duties and render
each item, if you want to use icons, you will need to install react-icons
library.

#### UUID Library

Since the job data does not have an id, you can install the uuid
library to generate unique ids for each job. Use these ids
instead of the index to set the key prop for the JobInfo
and Duties Component.

npm install uuid

npm i --save-dev @types/uuid

import { v4 as uuidv4} from 'uuid';
