function Input(props) {
  const { label, onChange, disabled, value, type } = props;

  return (
    <>
      <input
        placeholder={label}
        onChange={onChange}
        disabled={disabled}
        value={value}
        type={type}
        className="inp"
      />
    </>
  );
}
export default Input;
