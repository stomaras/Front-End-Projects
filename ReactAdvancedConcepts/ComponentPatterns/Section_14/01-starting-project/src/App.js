import Users from './components/Users';
import UserFinder from './components/UserFinder';
import UsersContext from './context/users-context';
const DUMMY_USERS = [
  {id:'d1', name:'Tom'},
  {id:'d2', name:'Manuel'},
  {id:'d3', name:'TIK'},
];


function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
