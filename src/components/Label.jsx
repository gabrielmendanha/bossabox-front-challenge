import React from "react";

function Label(props) {
  const { htmlFor, label } = props;

  return (
    <label className="m-0" htmlFor={htmlFor}>
      {label}
    </label>
  );
}

export default Label;
