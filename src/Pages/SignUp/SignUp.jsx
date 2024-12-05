import React from "react";
import './SignUp.css'
import Inputs from "../../Components/Input/Input";

function SignUp() {
  return (
    <>
      <div class="form">
      <div class="signup-heading">Sign Up</div>
      <div class="inputDiv">
        <input type="email" placeholder="Email Address" class="input" required />
        <i class="fa-regular fa-envelope icon"></i>
      </div>
      <div class="namePassInputDiv">
        <input type="text" placeholder="First Name" class="namePassInput" />
        <input type="text" placeholder="Last Name" class="namePassInput" />
      </div>
      <div class="namePassInputDiv">
        <div class="namePassInput">
          <input type="password" placeholder="Password" class="input" />
          <i class="fa-solid fa-lock passwordIconRight icon"></i>
        </div>
        <div class="namePassInput">
          <input
            type="password"
            placeholder="Password-Repeat"
            class="input"
          />
          <i class="fa-solid fa-lock passwordIconLeft icon"></i>
        </div>
      </div>
      <div class="inputDiv">
        <select class="inputSelect">
          <option value="">Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <button class="registerBtn">Register Now</button>
    </div>
    </>
  );
}

export default SignUp;
