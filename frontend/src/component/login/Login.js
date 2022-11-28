import React from "react";
import { useState } from "react";
import "./login.css";
import { signup, signin } from "../../actions/posts";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const initialState = {
  firstName: " ",
  lastName: " ",
  email: " ",
  password: " ",
  confirmPassword: " ",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPassHandler = () => {
    setShowPassword((prev) => !prev);
  };
  const switchHandler = () => {
    console.log(isSignup, "isSignup");
    setIsSignup(!isSignup);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, "data");
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  return (
    <div className="login-form-container">
      <h3 className="login-heading">{isSignup ? "Sign Up" : "Sign In"}</h3>
      <form className="login-form" onSubmit={submitHandler}>
        {isSignup && (
          <>
            <div className="login-form-control">
              <small>first name</small>
              <input
                className="login-input"
                name="firstName"
                onChange={changeHandler}
              />
            </div>
            <div className="login-form-control">
              <small>last name</small>

              <input
                className="login-input"
                name="lastName"
                onChange={changeHandler}
              />
            </div>
          </>
        )}
        <div className="login-form-control">
          <small>email</small>

          <input
            className="login-input"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="login-form-control">
          <small>password</small>

          <input
            className="login-input"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={changeHandler}
            onClick={showPassHandler}
            cookiePolicy="single_host_origin"
          />
        </div>
        {isSignup && (
          <div className="login-form-control">
            <small>confirm password</small>

            <input
              className="login-input"
              name="confirmPassword"
              label="Repeat Password"
              onChange={changeHandler}
              type="password"
            />
          </div>
        )}

        <button type="submit" className="login-btn">
          {isSignup ? "sing up " : "sing in"}
        </button>
        <div>
          <button
            type="button"
            onClick={switchHandler}
            className="login-switch"
          >
            {isSignup
              ? "already have an account ? sign in "
              : "dont have an account ? sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
