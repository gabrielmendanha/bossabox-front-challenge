import React from "react";
import styled from "styled-components";
import { SecondaryTheme } from "../../constants/_buttons";

const Button = styled.button`
  max-height: 50px;
  font-size: 18px;
  border: none;
  background: transparent 0% 0% no-repeat padding-box;

  img {
    filter: ${props => props.theme.filter};
  }
  color: ${props => props.theme.color};
  &:hover {
    color: ${props => props.theme.color};
  }
  &:active {
    color: ${props => props.theme.color};
  }
  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
`;

function ButtonSecondary(props) {
  const { title, icon, handleClick, disabled } = props;
  const { theme = SecondaryTheme } = props;

  return (
    <>
      <Button theme={theme} disabled={disabled} onClick={() => handleClick()}>
        {icon}
        {title}
      </Button>
    </>
  );
}

export default ButtonSecondary;
