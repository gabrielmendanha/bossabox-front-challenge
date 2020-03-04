import React from "react";

function TextArea(props) {
  const { id, handleChange } = props;
  return (
    <textarea id={id} cols="30" rows="10" onChange={handleChange}></textarea>
  );
}

export default TextArea;
