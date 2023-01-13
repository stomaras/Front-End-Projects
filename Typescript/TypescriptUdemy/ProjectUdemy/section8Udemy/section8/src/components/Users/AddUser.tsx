import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props: any) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
      }
      if (Number(enteredAge) < 1) {
        return;
      }
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
  };
  
  const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  }

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something Went Wrong!" />
      <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
      </Card>
    </div>    
  )
}

export default AddUser;
