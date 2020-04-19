import React from "react";
import styled from "styled-components";
import * as Color from "../../constants/_colors";

const CheckboxContainer = styled.div`
  display: inline-flex;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 16px;
  height: 16px;
  margin-left: 5px;
  margin-right: 5px;
  background: ${(props) => (props.checked ? Color.Blue : Color.DarkerWhite)} 0%
    0% no-repeat padding-box;
  border: 1px solid ${Color.MostDarkestWhite};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    outline: -webkit-focus-ring-color auto 5px;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

function Checkbox(props) {
  return (
    <>
      <label>
        <CheckboxContainer>
          <HiddenCheckbox
            checked={props.checked}
            onChange={props.handleChange}
            {...props}
          />
          <StyledCheckbox checked={props.checked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
      </label>
    </>
  );
}

export default Checkbox;
