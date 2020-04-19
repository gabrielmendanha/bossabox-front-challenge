import React from "react";
import styled from "styled-components";
import * as Color from "../../constants/_colors";

const TextAreaStyled = styled.textarea`
  color: ${Color.Ink};
  padding-left: 21px;
  padding-right: 21px;
  width: auto;
  height: 180px;
  background: ${Color.DarkerWhite} 0% 0% no-repeat padding-box;
  border: 1px solid ${Color.DarkestWhite};
  border-radius: 5px;
  &:focus {
    background: ${Color.DarkestWhite} 0% 0% no-repeat padding-box;
    border: 1px solid ${Color.MostDarkestWhite};
  }
`;

function TextArea(props) {
  const { id, handleChange } = props;
  return (
    <TextAreaStyled
      id={id}
      cols="30"
      rows="10"
      onChange={handleChange}
    ></TextAreaStyled>
  );
}

export default TextArea;
