import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{

    const fetchData = async()=> {
      try {  
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);

  return (
  <section>
    <h3>github users</h3>
    <ul className="users">
      {users.map((user)=> {
        const {id, login, avatar_url, html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url}>profile</a>
          </div>
        </li>;
      })}
    </ul>
  </section>
  )
};
export default FetchData;



/*
Set up Challenge 
- import useState and useEffect
- setup state value
- users - default value []
- setup useEffect
- make sure it runs only on initial render
- in the cb, create a function which performs fetch functionality 
- use url i provided in the starter file
- you can use .then or async
- set users equal to result
- iterate over the list and display image, user name and link 
*/

/*
Note inside useEffect we cannot return promise
add react developer tools 
testing playground


*/
