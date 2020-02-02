import React from "react";

function Title(props) {
  const { title, link } = props;

  return (
    <h5>
      {" "}
      <a href={link}>{title}</a>
    </h5>
  );
}

export default Title;
