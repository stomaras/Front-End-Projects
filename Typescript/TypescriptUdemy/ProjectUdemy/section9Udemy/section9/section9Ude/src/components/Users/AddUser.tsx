import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import { Error } from './Error';
import Wrapper from "../helpers/Wrapper";


const AddUser = (props: any) => {

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<Error | null>();

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const enteredName = nameInputRef.current?.value;
      const enteredAge = ageInputRef.current?.value;
      if (enteredName?.trim().length === 0 || enteredAge?.trim().length === 0) {
        setError({
          title: 'Invalid Input',
          message: 'Please enter a valid name and age (non-empty values)'
        });
        return;
      }
      if (Number(enteredAge) < 1) {
        setError({
          title: 'Invalid Age',
          message: 'Please enter a valid age (> 0).'
        });
        return;
      }
      props.onAddUser(enteredName, enteredAge);
  };
  


  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type="text"  ref={nameInputRef} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" ref={ageInputRef} />
        <Button type='submit'>Add User</Button>
      </form>
      </Card>
    </Wrapper>    
  )
}

export default AddUser;
