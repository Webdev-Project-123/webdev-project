import { forwardRef } from "react";

function Input(
  { type, placeholder, disabled, name, value, onChange, className },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      autoCorrect="off"
      autoComplete="off"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      className={className}
      disabled={disabled}
    />
  );
}

export default forwardRef(Input);
