import React, { FC } from "react";
import { moderateScale } from "../../../utils/Scale";
import styled from "styled-components";
import CustomText from "./CustomText";

export type Props = {
  label?: string;
  children?: React.ReactNode;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
  onClick?: (data?: any) => void;
  style?: React.CSSProperties;
};

const CustomButton: FC<Props> = ({
  label,
  children,
  onClick,
  color,
  size = "md",
  rounded = false,
  style,
  ...rest
}) => {
  const getTextSize = (size: "xs" | "sm" | "md" | "lg") => {
    switch (size) {
      case "xs":
        return "caption";
      case "sm":
      case "md":
        return "body";
      case "lg":
        return "title";
      default:
        return "body";
    }
  };

  const textSize = getTextSize(size);

  return (
    <StyledButton
      onClick={onClick}
      color={color}
      size={size}
      rounded={rounded}
      style={style}
      {...rest}
    >
      {label ? (
        <CustomText
          color={
            color === "#40892d"
              ? "white"
              : color === "white"
              ? "black"
              : "white"
          }
          bold={true}
          size={textSize}
        >
          {label}
        </CustomText>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default CustomButton;

const getButtonDimensions = (size: "xs" | "sm" | "md" | "lg") => {
  const unit = "px";
  switch (size) {
    // Modal Button
    case "xs":
      return {
        width: `${moderateScale(56, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`,
      };
    // Normal Button
    case "sm":
      return {
        width: `${moderateScale(258, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`,
      };
    // Home List Button
    case "md":
      return {
        width: `${moderateScale(154, 0.3)}${unit}`,
        height: `${moderateScale(154, 0.3)}${unit}`,
      };
    // Using in SignUp
    case "lg":
      return {
        width: `${moderateScale(250, 0.3)}${unit}`,
        height: `${moderateScale(100, 0.3)}${unit}`,
      };
    default:
      return {
        width: `${moderateScale(154, 0.3)}${unit}`,
        height: `${moderateScale(154, 0.3)}${unit}`,
      };
  }
};

const StyledButton = styled.button<{
  color?: string;
  size: "xs" | "sm" | "md" | "lg";
  rounded: boolean;
}>`
  ${({ size }) => {
    const { width, height } = getButtonDimensions(size);
    return `
      width: ${width};
      height: ${height};
    `;
  }}
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : "#40892d")};
  border: 2px #40892d;
  border-radius: ${({ rounded }) => (rounded ? "25px" : "12px")};
  cursor: pointer;
`;

// 사용 예시
// <CustomButton size='xs' label="Cancel" onClick={() => navigation.navigate('Login')} />
