import React from "react";
import { StyledLabel } from "../styled/Label/Label";
import { StyledInput } from "../styled/Input/Input";

const Input = ({ type, value, changeHandler }) => {
  return (
    <div>
      <StyledLabel htmlFor={type}>{type}</StyledLabel>
      <StyledInput
        type="text"
        id={type}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      ></StyledInput>
    </div>
  );
};

export default Input;
