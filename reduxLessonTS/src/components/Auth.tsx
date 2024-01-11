import classes from './Auth.module.css';
import { useAppDispatch, useAppSelector } from '../store';
import { login, logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const Auth = () => {

  const dispatch = useAppDispatch();

  const loginHanlder = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHanlder}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
