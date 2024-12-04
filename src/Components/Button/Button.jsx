import "./Button.css";

const Button = ({ name, className, style, icon }) => {
  return (
    <>
      <button className={className} style={style}>
        {icon && <i className={`${icon} buttonIcon`}></i> }
        {name}
      </button>
    </>
  );
};

export default Button;

//<i className={`${icon} buttonIcon`}></i>
