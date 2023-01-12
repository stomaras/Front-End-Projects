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
    <div className="App" data-testid="app">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
