import React from "react";
import "./SignUp.css";
import Inputs from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

function SignUp() {
  return (
    <>
      <div className="form">
        <div className="signup-heading">Sign Up</div>
        <div className="inputDiv">
          <Inputs
            type="email"
            placeHolder="Email Address"
            className="input"
            icon="fa-regular fa-envelope signUpIcon"
          />
        </div>
        <div className="namePassInputDiv">
          <Inputs
            type="text"
            placeHolder="First Name"
            className="namePassInput"
          />
          <Inputs
            type="text"
            placeHolder="Last Name"
            className="namePassInput"
          />
        </div>
        <div className="namePassInputDiv">
          <Inputs
            type="password"
            placeHolder="Password"
            className="namePassInput"
          />
          <Inputs
            type="password"
            placeHolder="Password-Repeat"
            className="namePassInput"
          />
        </div>
        <div className="inputDiv">
          <select class="inputSelect">
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <Button 
          name="Register Now"
          className="registerBtn"
        />
      </div>
    </>
  );
}

export default SignUp;
