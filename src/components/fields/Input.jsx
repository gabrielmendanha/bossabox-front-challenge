import React from "react";

function Input(props) {
  const {
    type,
    placeholder,
    id,
    handleChange,
    errors,
    register,
    registerParams
  } = props;

  const getRegister = () => {
    return register ? register(registerParams) : null;
  };

  const getErrorMessage = () => {
    return errors && errors[id] ? errors[id].message : "";
  };

  return (
    <>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        ref={getRegister()}
      />
      <span>{getErrorMessage()}</span>
    </>
  );
}

export default Input;
