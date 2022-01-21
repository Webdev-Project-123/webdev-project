function Input({ type, placeholder, name, value, onChange, className }) {
  return (
    <input
      type={type}
      autoCorrect="off"
      autoComplete="off"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
}

export default Input;
