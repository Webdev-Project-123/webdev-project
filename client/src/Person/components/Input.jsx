import { forwardRef } from "react";

function Input(
  { type, min, max, placeholder, disabled, name, value, onChange, className },
  ref
) {
  return (
    <input
      min={min}
      max={max}
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
