import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";


const Login = () => {
  const [status, setStatus] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (status === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  function changeStatus() {
    setStatus((prev) => (prev === "Sign Up" ? "Sign In" : "Sign Up"));
  }

  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{status}</h1>
        <form action="">
          {status === "Sign Up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Username..."
            />
          ) : (
            ""
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email..."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password..."
          />
          <button type="submit" onClick={user_auth}>
            {status}
          </button>
        </form>
        <div className="form-help">
          <div className="remember">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember Me
            </label>
          </div>
          <p>Need help?</p>
        </div>
        <div className="form-switch">
          {status === "Sign In" ? (
            <p>
              New to Uflix? <span onClick={changeStatus}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have acount? <span onClick={changeStatus}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
