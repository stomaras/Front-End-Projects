### HTTP Methods 

define the types of actions that can be performed on a web server to retrieve, modify or delete information. The most commonly used
HTTP methods are GET, POST, PATCH and DELETE.
GET: Used to retrieve data from the server
POST: Used to sends data to be processed
PATCH: update or release existing data
DELETE: Removes data

### React Query 

React Query is a state management library that simplifies the process of fetching, caching, and updating data in React applications.
Its major benefits include automatic background refetching, caching and stale data management, error handling, and easy pagination and infinite scrolling.
Compared to setting up requests with useEffect, React Query Provides a more declarative and centralized approach to managing data in React,
which results in cleaner and more efficient code. It also reduces boilerplate code and improves performance by minimizing unnecessary re-renders and network requests

npm i @tanstack/react-query


- Query Key 

The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

- Query Function 

A query function can be literally any function that returns a promise. The promise that returned should either resolve the data or throw an error.


### Thunder Client Extension

Test API endpoints directly in VS CODE very good for front end developers testing with it(Thunder Client Extension)


### useQuery, useMutation

When we want to create update and delete we use useMutation hook --> Create, Update, Delete
When we want to fetch we use useQuery hook --> Get

### useMutation Helper Options

useMutations comes with some helper options that allow quick and easy side-effects 
at any stage during the mutation lifecycle. These come in handy for both validating and refetching queries after mutations