import { useState, useId } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Form;
