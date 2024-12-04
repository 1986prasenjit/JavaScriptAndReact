import "./Input.css";

const Inputs = ({ placeHolder, type, icon, label }) => {
  return (
    <>
      <label>{label}</label>
      <div className="inputGroupStyle">
        {icon && <i className={`${icon} inputIcon`}></i>}
        <input
          type={type}
          placeholder={placeHolder}
          className="inputBoxStyle"
        />
      </div>
    </>
  );
};
export default Inputs;
