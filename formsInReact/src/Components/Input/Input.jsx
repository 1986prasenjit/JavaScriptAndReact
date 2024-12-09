import "./Input.css";

const Inputs = ({ placeHolder, type, icon, label, id, inputStyle="",className="",...rest }) => {
  return (
    <>
      {label && <label htmlFor={id} className="inputLabel">{label}</label>}
      <div className={`${className ? className : "inputGroupStyle"}`}>
        {icon && <i className={`${icon} ${className ? className : "inputIcon"}`}></i>}
        <input
          type={type}
          placeholder={placeHolder}
          id={id}
          className={`${className ? className : "inputBoxStyle"}`}
          {...rest}
        />
      </div>
    </>
  );
};
export default Inputs;

/*
      Icons and Labels will be optional 
*/