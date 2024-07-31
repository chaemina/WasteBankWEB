import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import { moderateScale, scale } from "../../../utils/Scale";

type CustomInputProps = {
  placeholder?: string;
  width?: number;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: string;
  label?: string;
  labelColor?: string;
  inputColor?: string;
};

const Container = styled.div`
  margin: ${scale(10)}px;
`;

const Input = styled.input<{ width: number; inputColor: string }>`
  height: ${moderateScale(48, 0.3)}px;
  width: ${(props) => moderateScale(props.width, 0.3)}px;
  border-width: 2px;
  padding: ${scale(10)}px;
  margin: ${scale(10)}px;
  border-radius: 8px;
  border-color: ${({ inputColor }) =>
    inputColor === "#40892d" ? "white" : "#4C4C4C"};
  background-color: ${({ inputColor }) => inputColor};
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
  labelColor = "#000",
  inputColor = "#fff",
}) => {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <Container>
      {label && <CustomText color={labelColor}>{label}</CustomText>}
      <Input
        width={width}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={keyboardType}
        style={style}
        inputColor={inputColor}
      />
    </Container>
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
