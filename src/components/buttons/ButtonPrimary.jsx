import React from "react";
import styled from "styled-components";
import { PrimaryTheme } from "../../constants/_buttons";

const Button = styled.button`
  width: auto;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  color: #ffffff;

  background: ${props => props.theme.background} 0% 0% no-repeat padding-box;
  &:hover {
    background: ${props => props.theme.hover} 0% 0% no-repeat padding-box;
  }
  &:active {
    background: ${props => props.theme.active} 0% 0% no-repeat padding-box;
  }
  &:disabled {
    background: ${props => props.theme.disabled} 0% 0% no-repeat padding-box;
    cursor: not-allowed;
  }
`;

function ButtonPrimary(props) {
  const { title, icon, handleClick, disabled } = props;
  const { theme = PrimaryTheme } = props;

  return (
    <>
      <Button theme={theme} disabled={disabled} onClick={() => handleClick()}>
        {icon}
        {title}
      </Button>
    </>
  );
}

export default ButtonPrimary;
