import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import { moderateScale, scale } from "../../../utils/Scale";

type CustomInputProps = {
  placeholder?: string;
  width?: 150 | 250;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: string;
  label?: string;
};

const Input = styled.input<{ width: number }>`
  height: ${moderateScale(48, 0.3)}px;
  border: 2px solid #000000;
  padding: ${scale(10)}px;
  margin: ${scale(10)}px;
  border-radius: 8px;
  background-color: #fff;
  width: ${(props) => moderateScale(props.width, 0.3)}px;
  box-sizing: border-box;
`;

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  width = 250,
  style,
  autoFocus,
  defaultValue,
  keyboardType,
  label,
}) => {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <>
      {label && <CustomText>{label}</CustomText>}
      <Input
        width={width}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={keyboardType}
        style={style}
      />
    </>
  );
};

export default CustomInput;

// Using Input Component

{
  /* <CustomInput
  placeholder="Enter text"
  label="Default Width (250)"
/>

<CustomInput
  placeholder="Enter text"
  label="Width 100"
  width={100}
/> */
}
