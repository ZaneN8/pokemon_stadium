import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useFormInput from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const history = useHistory();
  const { handleLogin } = useContext(AuthContext);
  const email = useFormInput("Email", "");
  const password = useFormInput("Password", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: email.value, password: password.value }, history);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
