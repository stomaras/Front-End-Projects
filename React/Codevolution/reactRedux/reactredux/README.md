### React Redux 

Redux is a predictable state container for Javascript apps

It is for Javascripts apps
It is a state container
It is predictable

### Redux is for Javascript apps

Redux is not tied to React
Can be used with React, Angular, Vue or even vanilla Javascript

### Redux is a state container

Redux stores the state of your application.
Consider a React app - state of a component .
State of an app is the state represented by all the individual components of that app.
Redux will store and manage the application state

LoginFormComponent 

state = {
    username:'',
    password:'',
    submitting:false
}

UserListComponent 

state = {
    users:[]
}

Application 

state = {
    isUserLoggedIn: true,
    username: 'Vishwas',
    profileUrl:'',
    onlineUsers:[],
    isMOdalOpened:false
}

### Redux is predictable

Predictable is waht way?

Redux is a state container

The state of an application can change

Ex: todo list app - item(pending) - item(completed)

In redux, all state transitions are explicit and it is possible to keep track of them

The changes to your application's state become predictable.

### React + Redux ?

Why would we want to use redux in a react application ?

Components in React have their own state 

Why do we need another tool to help manage that state?

React is a UI Library 
Redux is a state management library 
to directly use redux in your react application it is a bit confusing 
so we have react-redux package is the official Redux UI Library for React

### Summary

- React is a library used to build user interfaces
- Redux is a library for managing state in a predictable way in javascript
- React-Redux is a library that provides bindingsto use React and Redux together in an application.

### Three Core Concepts

# Cake Shop

# Entities

Shop - Stores cakes on a shelf
Shopkeeper - At the fron of the store
Customer - At the store entrance

# Activities

Customer - Buy a cake
Shopkeeper - Remove a cake from the shelf
           - Receipt to keep track

-----------------------------------------------------------------------------
Cake Shop Scenario      |        Redux          |       Purpose             |
-----------------------------------------------------------------------------
Shop                    |       Store           | Holds the state of your   |
                        |                       | application               |     
-----------------------------------------------------------------------------
Intention to BUY_CAKE   |       Action          | Describes what happened   |
-----------------------------------------------------------------------------
Shopkeeper              |       Reducer         | Ties the store and actions|
                        |                       | together                  |
-----------------------------------------------------------------------------

A store that holds the state of your application
An action that describes the changes in the state of the application
A reducer which actually carries out the state transition depending on the action