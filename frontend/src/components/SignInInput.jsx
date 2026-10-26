import "./SignInInput.css";

export default function SignInInput({
  label,
  inputName,
  placeholder,
  type,
  children,
}) {
  return (
    <div className="sign-in-input-div">
      <p>{label}</p>

      <div className="icon-input-div">
        {children && <div className="input-icon">{children}</div>}
        <input type={type} placeholder={placeholder} name={inputName} />
      </div>
    </div>
  );
}
