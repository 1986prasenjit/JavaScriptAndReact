import Button from "../../Components/Button/Button";
import Inputs from "../../Components/Input/Input";
import "./Login.css";

const Login = () => {
  return (
    <>
      <form className="form2Style">
        <h1 className="form2Heading">
          Get Started
        </h1>
        <h2 className="queryText">Already have an account?</h2>
        <h2 className="queryText logInText">Log In</h2>
        <div className="buttonDiv">
          <Button
            name={"sign up"}
            icon="fab fa-google"
            className="btnStyle btnBorder"
            style={{ backgroundColor: "transparent", color: "black" }}
          />
          <Button
            name={"sign up"}
            icon="fab fa-facebook"
            className="btnStyle"
            style={{ backgroundColor: "#0F67B1", color: "#fff" }}
          />
        </div>
        <div className="orDiv">Or</div>

        <Inputs
          placeHolder={"Joy Shahed"}
          type="text"
          icon="fas fa-user"
          label="Name"
          id="name"
        />
        <Inputs
          type="email"
          placeHolder={"abc@gmail.com"}
          icon="fas fa-envelope"
          label="Email"
          id="email"
        />
        <Inputs
          placeHolder={"Password"}
          type="password"
          icon="fas fa-lock"
          label="Password"
          id="password"
        />
        <Button
          name={"Submit"}
          className="btnStyle submitBtn"
          style={{ backgroundColor: "#fb3d40", color:"#fff"}}
        />
      </form>
    </>
  );
};
export default Login;
