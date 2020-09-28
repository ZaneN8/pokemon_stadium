import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useFormInput from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Register = (props) => {
  const email = useFormInput("Email", "");
  const password = useFormInput("Password", "");
  const passwordConfirmation = useFormInput("Confirm Password", "");
  const history = useHistory();

  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("Passwords do not match");
    } else {
      handleRegister(
        {
          email: email.value,
          password: password.value,
        },
        history
      );
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.label}</p>
        <input type="password" {...passwordConfirmation} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
