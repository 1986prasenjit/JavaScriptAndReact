import Button from "../../Components/Button/Button";
import Inputs from "../../Components/Input/Input";
import "./Login.css";

const Login = ({ name, style }) => {
  return (
    <>
      <form className="form2Style">
        <h1 className="form2Heading" style={style}>
          {name}
        </h1>
        <p className="queryText">Already have an account?</p>
        <p className="queryText logInText">Log In</p>
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
            style={{ backgroundColor: "#0F67B1", color: "#CAF4FF" }}
          />
        </div>
        <div className="orDiv">Or</div>

        <Inputs
          placeHolder={"Joy Shahed"}
          type="text"
          icon="fas fa-user"
          label="Name"
        />
        <Inputs
          type="email"
          placeHolder={"abc@gmail.com"}
          icon="fas fa-envelope"
          label="Email"
        />
        <Inputs
          placeHolder={"Password"}
          type="password"
          icon="fas fa-lock"
          label="Password"
        />
        <Button
          name={"Submit"}
          className="btnStyle submitBtn"
          style={{ backgroundColor: "#FF8A8A", color: "white" }}
        />
      </form>
    </>
  );
};
export default Login;
