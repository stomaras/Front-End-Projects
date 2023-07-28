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