import React from "react";

function Input(props) {
  const { type, placeholder, id } = props;

  return <input id={id} type={type} placeholder={placeholder} />;
}

export default Input;
