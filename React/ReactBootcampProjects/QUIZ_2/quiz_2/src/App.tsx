
import './App.css'
import UsersContainer from './components/UsersContainer'
import Form from './components/Form'
import { IUsers } from './models/models'
import { useEffect, useState } from 'react'
import { UsersService } from './services/UserService'
interface IState {
  loading:boolean;
  users:IUsers[];
  errorMsg:string;
}


function App() {

  const [allUsers, setAllUsers] = useState<IUsers[]>([]);

  const url = 'https://jsonplaceholder.typicode.com/users'

  const [state, setState] = useState<IState>({
      loading:false,
      users:[] as IUsers[],
      errorMsg:'',
  });

  // network request
  useEffect(() => {
      setState({...state, loading:true})
      UsersService.getAllUsers()
          .then((res) => 
              setState({
                  ...state,
                  loading:false,
                  users: res.data,
              })
          ).catch((err) => 
            setState({
              ...state,
              loading:false,
              errorMsg:err.message,
            })  
          );
      setAllUsers(state.users)
      console.log(allUsers);
  },[]);



  const addUser = (user:IUsers) => {
    state.users.push(user);
    setState({
      ...state,
      users:state.users
    });
  }

  return (
    <>
    <div className='app'>
      <Form handleSubmit={addUser}/>
      <UsersContainer users={state.users}/>
    </div>

    </>
  )
}

export default App
