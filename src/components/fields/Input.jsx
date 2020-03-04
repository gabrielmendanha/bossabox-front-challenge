import React from "react";

function Input(props) {
  const { type, placeholder, id, handleChange } = props;

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}

export default Input;
