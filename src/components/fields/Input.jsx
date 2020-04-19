import React from "react";
import styled from "styled-components";
import * as Color from "../../constants/_colors";
import addIcon from "../../assets/icons/search-icon.svg";

const isErrorState = (props) => {
  const { errors, id } = props;
  return errors && errors[id] ? true : false;
};

const InputStyled = styled.input`
  padding-left: ${(props) => (props.type === "search" ? "55px" : "21px")};
  padding-right: 21px;
  width: auto;
  height: 50px;
  background: ${(props) =>
    isErrorState(props) ? Color.MostLightestRed : Color.DarkerWhite};
  border: 1px solid
    ${(props) => (isErrorState(props) ? Color.Red : Color.DarkestWhite)};
  border-radius: 5px;
  color: ${Color.Ink};
  &::placeholder {
    color: ${Color.LighterInk};
  }
  &:focus {
    &::placeholder {
      color: ${Color.LightInk};
    }
    background: ${(props) =>
      isErrorState(props) ? Color.MostLightestRed : Color.DarkestWhite};
    border: 1px solid
      ${(props) => (isErrorState(props) ? Color.Red : Color.MostDarkestWhite)};
  }
  color: ${(props) => (isErrorState(props) ? Color.Red : "")};
`;

const ErrorSpan = styled.span`
  color: ${Color.Red};
  letter-spacing: 0.36px;
  font-size: 18px;
  text-align: end;
`;

const SearchIcon = styled.img`
  height: 20px;
  position: relative;
  left: 35px;
  display: ${(props) => (props.type === "search" ? "inline" : "none")};
  filter: invert(86%) sepia(20%) saturate(110%) hue-rotate(218deg)
    brightness(80%) contrast(85%);
`;

function Input(props) {
  const {
    type,
    placeholder,
    id,
    handleChange,
    errors,
    register,
    registerParams,
  } = props;

  const getRegister = () => {
    return register ? register(registerParams) : null;
  };

  const getErrorMessage = () => {
    return errors && errors[id] ? errors[id].message : "";
  };

  return (
    <>
      <SearchIcon {...props} src={addIcon} alt="" />
      <InputStyled
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        ref={getRegister()}
        errors={errors}
      />
      <ErrorSpan>{getErrorMessage()}</ErrorSpan>
    </>
  );
}

export default Input;
