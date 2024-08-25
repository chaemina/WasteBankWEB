import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import { moderateScale, scale } from "../../../utils/Scale";

type CustomInputProps = {
  placeholder?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: string;
  label?: string;
  labelColor?: string;
  inputColor?: string;
  onChange?: (value: string) => void;
};

const Container = styled.div`
  margin: ${scale(10)}px;
`;

const Input = styled.input<{
  width?: number;
  height?: number;
  $inputColor: string; 
}>`
  height: ${(props) => moderateScale(props.height || 40, 0.3)}px;
  width: ${(props) => moderateScale(props.width || 200, 0.3)}px;
  border: none;
  border-width: 2px;
  padding: ${scale(10)}px;
  border-radius: 8px;
  border-color: ${({ $inputColor }) =>
    $inputColor === "#40892d" ? "white" : "#4C4C4C"};
  background-color: ${({ $inputColor }) => $inputColor};
  box-sizing: border-box;

  &:focus,
  &:focus-within,
  &:active {
    border-color: transparent;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  width,
  height,
  style,
  autoFocus,
  defaultValue,
  keyboardType,
  label,
  labelColor = "#000",
  inputColor = "#fff",
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue); // onChange 콜백 호출
  };

  return (
    <Container>
      {label && <CustomText color={labelColor}>{label}</CustomText>}
      <Input
        width={width}
        height={height}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={keyboardType}
        style={style}
        $inputColor={inputColor}
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
