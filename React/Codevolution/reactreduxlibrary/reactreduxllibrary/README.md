### connect function

- connect function connect a react component with a redux store

### React Redux + Hooks

React Redux Pattern

Action Creators , reducers, provide the store and connect the components

Components can access state and dispatch actions

React Hooks 

Subscribe to store and dispatch actions without connect()

useSelector = mapStateToProps we already see
useDispatch = mapDispatchToProps we already see returns reference to the dispatch function from the Redux store

the second parameter to map state the props is basically the props that have already been passed to the component 

the last thing i want to point out is how to use the connect function if you only want to dispatch actions but not subscribe to the state changes 
to the store, you will come across scenarios where you define mapStateToProps but not mapDispatchToProps in these case you pass null, mapDispatchToProps

### Async Actions React Redux

# Synchronous Actions 

As soons as an action was dispatched, the state was immediately updated.
if you dispatch the BUY_CAKE Action, the numOfCakes was right away decremented by 1.

# Async Actions 

Asynchronous API calls to fetch data from an end point and use that data in your application.

# Our Application 

Fetches a list of users from an api end point and stores it in the redux store.
and then renders them in the browser

# 1 - State

state = {
    loading: true,
    data: [],
    error: ''
}

loading: Display a loading spinner in your component
data: list of users
error: Display error to the user

# 2 - Actions 

FETCH_USERS_REQUEST = Fetch list of users
FETCH_USERS_SUCCESS = Fetched successfully
FETCH_USERS_FAILURE = Error Fetching the data

# 3 - Reducer

case: FETCH_USERS_REQUEST
      loading:true
case: FETCH_USERS_SUCCESS
      loading:false
      users: data (from API)
case  FETCH_USERS_FAILURE
      loading: false
      error: error (from API)

# Redux Thunk Get Request 

redux folder 
    - user folder
      - userActions.ts
      - userTypes.ts
      - userReducer.ts
    - index.ts
    - rootReducer.ts
    - store.ts

- npm install axios 
- npm install redux-thunk: allows us to create asynchronous action creators in our application 