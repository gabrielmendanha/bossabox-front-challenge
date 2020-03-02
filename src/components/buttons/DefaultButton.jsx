import React from "react";

function DefaultButton(props) {
  const { title, icon, handleClick } = props;

  return (
    <>
      <button onClick={() => handleClick()}>
        {icon}
        {title}
      </button>
    </>
  );
}

export default DefaultButton;
