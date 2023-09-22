import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterWrapper.js";
import { FormInput, Button, Alert } from "../components";
import { useState } from "react";
import { useAppContext } from "../context/appContext.js";
import {useNavigate} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: false,
  };

  const navigate = useNavigate()

  const [values, setValues] = useState(initialState);
  const { user, setupUser, displayAlert, progress, showAlert, closeAlert} = useAppContext();


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAnchorClick = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
    closeAlert()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    if (isMember) {
      const currentUser = { email, password };
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Redirecting User...",
      });
    } else {
      const currentUser = { name, email, password };
      console.log(currentUser)
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Registered, Redirecting...",
      });
      
    }
  };

  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate('/')
      },1000)
    }
  },[user,navigate])

  return (
    <>
    <LoadingBar color='#f11946' progress={progress} transitionTime={100} />
    <div className="registerDivCenter">
      <Wrapper isMember={values.isMember}>
        <h1>{values.isMember ? "Login" : "Register"}</h1>
        {showAlert && <Alert />}
        <form onSubmit={handleSubmit}>
          {!values.isMember && (
            <FormInput
              type="text"
              value={values.name}
              handleChange={handleChange}
              name="name"
              label="Name"
            />
          )}
          <FormInput
            type="text"
            value={values.email}
            handleChange={handleChange}
            name="email"
            label="Email"
          />
          <FormInput
            type="text"
            value={values.password}
            handleChange={handleChange}
            name="password"
            label="Password"
          />
          <Button text="Submit" />
        </form>
        <h4>
          {values.isMember ? "Need an account?" : "Already have an account?"}{" "}
          <a href="/">
            <button onClick={handleAnchorClick} className="anchorButton">
              {values.isMember ? "Sign Up" : "Sign In"}
            </button>
          </a>
        </h4>
      </Wrapper>
    </div>
    </>
  );
};

export default Register;
