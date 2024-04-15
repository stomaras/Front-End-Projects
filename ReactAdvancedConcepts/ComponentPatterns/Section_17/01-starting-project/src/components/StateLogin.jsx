import { useRef, useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
export default function Login() {

    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const email = useRef(null);
    const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = isEmail(enteredEmail);
    const passwordIsInvalid = enteredPassword.trim().length < 6;
    console.log(emailIsValid);
    if(!emailIsValid){
        setEmailIsInvalid(true)
        return;
    }
    setEmailIsInvalid(false)

    console.log("Sending and HTTP Request");
    console.log(enteredEmail, enteredPassword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
