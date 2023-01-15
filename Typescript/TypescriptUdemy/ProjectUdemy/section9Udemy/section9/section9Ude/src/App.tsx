import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState<any>([]);


  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUsersList: any) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </>
  );
}

export default App;



/*
Portals need two things 

1) You need a place you wanna port the Component to. 
2) Then you need to let your component know that it should have a portal to that place.

if you only want to read a value then you do not actually want to use state

using with refs to access dom elements means that we work with uncontrolled components 
input components called uncontrolled components 

*/