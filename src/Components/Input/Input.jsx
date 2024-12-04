import "./Input.css";

const Inputs = ({ placeHolder, type, icon, label, id }) => {
  return (
    <>
      <label htmlFor={id} className="inputLabel">{label}</label>
      <div className="inputGroupStyle">
        {icon && <i className={`${icon} inputIcon`}></i>}
        <input
          type={type}
          placeholder={placeHolder}
          id={id}
          className="inputBoxStyle"
        />
      </div>
    </>
  );
};

export default Inputs;
