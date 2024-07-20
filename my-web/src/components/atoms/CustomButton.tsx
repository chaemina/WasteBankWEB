import React, { FC } from "react";
import styled from "styled-components";

export type Props = {
  label?: string;
  children?: React.ReactNode;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
  onClick?: (data?: any) => void;
};

const CustomButton: FC<Props> = ({
  label,
  children,
  onClick,
  color,
  size = "md",
  rounded = false,
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
      rounded={rounded}
      {...rest}
    >
      {label ? (
        <CustomText color="white" bold={true} size={textSize}>
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
  switch (size) {
    case "xs":
      return {
        width: "56px",
        height: "40px",
      };
    case "sm":
      return {
        width: "284px",
        height: "59px",
      };
    case "md":
      return {
        width: "154px",
        height: "154px",
      };
    case "lg":
      return {
        width: "280px",
        height: "120px",
      };
    default:
      return {
        width: "154px",
        height: "154px",
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : "green")};
  border: none;
  border-radius: ${({ rounded }) => (rounded ? "25px" : "12px")};
  cursor: pointer;
`;

// Using Custom Text
const CustomText = styled.span<{
  color?: string;
  bold?: boolean;
  size?: string;
}>`
  color: ${({ color }) => color || "white"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${({ size }) => {
    switch (size) {
      case "title":
        return "20px";
      case "body":
        return "16px";
      case "caption":
        return "12px";
      default:
        return "16px";
    }
  }};
`;

// 사용 예시
// <CustomButton size='xs' label="Cancel" onClick={() => navigation.navigate('Login')} />
