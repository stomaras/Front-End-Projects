import { useState } from "react";

export default function Login() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [didEdit, setDidEdit] = useState({
    email:false,
    password:false
  });

  const emailIsInvalid = !enteredEmail.includes('@') && enteredEmail !== '' && didEdit.email;


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('User email:' + enteredEmail);
    console.log("User password:" + enteredPassword);
  }

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value)
  }

  const handleInputBlur = (identifier) => {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]:true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={handleEmailChange} value={enteredEmail} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onBlur={() => handleInputBlur('password')} onChange={handlePasswordChange} value={enteredPassword} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
