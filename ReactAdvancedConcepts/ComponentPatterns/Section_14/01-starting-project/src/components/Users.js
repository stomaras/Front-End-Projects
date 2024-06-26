import { useState } from 'react';
import User from './User';
import { Component } from 'react';
import classes from './Users.module.css';


/*
Class Based Components can not use Hooks:

1) componentDidMount() ---> called once a component mounted -> evaluated and rendered by React ---> useEffect(...,[])
2) componentDidUpdate() ---> called once a component updated -> evaluated and rendered by React ---> useEffect(...,[dependency])
3) componentWillUnmount() ---> called right before component is unmounted from DOM -> evaluated and rendered by React ---> 
useEffect(() => {
  return () => {...}
},[]);

*/

class Users extends Component {
  constructor(){
    super();
    this.state = {
      showUsers: true
    };
  }

  componentDidUpdate() {
    
    if (this.state.users.length ===0){
      throw new Error("No users provided");
    }
  }

  toggleUsersHandler(){
    this.setState((curState) => {
      return {
        showUsers:!curState.showUsers
      };
    });
  }

  render() {  
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
