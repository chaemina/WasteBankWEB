import React, { FC } from "react";
import { moderateScale } from "../../../utils/Scale";
import styled from "styled-components";
import CustomText from "./CustomText";

export type Props = {
  label?: string;
  children?: React.ReactNode;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: (data?: any) => void;
  style?: React.CSSProperties;
  rounded?: boolean; // 예를 들어 rounded와 같은 boolean 속성을 추가할 수 있음
};

const CustomButton: FC<Props> = ({
  label,
  children,
  onClick,
  color,
  size = "md",
  style,
  rounded = false, // boolean 속성의 기본값을 설정
  ...rest
}) => {
  const getTextSize = (size: "xs" | "sm" | "md" | "lg") => {
    switch (size) {
      case "xs":
      case "sm":
        return "caption";
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
      style={style}
      $rounded={rounded} // Transient prop으로 전달
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
    case "xs":
      return {
        width: `${moderateScale(56, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`,
      };
    case "sm":
      return {
        width: `${moderateScale(258, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`,
      };
    case "md":
      return {
        width: `${moderateScale(154, 0.3)}${unit}`,
        height: `${moderateScale(154, 0.3)}${unit}`,
      };
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

// Transient prop $rounded 사용
const StyledButton = styled.button<{
  color?: string;
  size: "xs" | "sm" | "md" | "lg";
  $rounded?: boolean; // Transient prop 사용
}>`
  ${({ size }) => {
    const { width, height } = getButtonDimensions(size);
    return `
      width: ${width};
      height: ${height};
    `;
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : "#40892d")};
  border: 2px solid #40892d;
  border-radius: ${({ $rounded }) => ($rounded ? "25px" : "12px")};
  cursor: pointer;
  appearance: none;
`;
