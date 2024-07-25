import React, { FC } from "react";
import styled from "styled-components";
import { scale, useViewport } from "../../../utils/Scale";

export type Props = {
  children: string;
  bold?: boolean;
  color?: string;
  size?: "title" | "body" | "caption";
};

const getFontSize = (
  size: "title" | "body" | "caption" | undefined
): string => {
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
};

const CustomText: FC<Props> = ({ children, bold, color, size, ...rest }) => {
  const fontSize = getFontSize(size);

  return (
    <StyledText bold={bold} color={color} fontSize={fontSize} {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;

const StyledText = styled.p<{
  bold?: boolean;
  color?: string;
  fontSize: string;
}>`
  font-family: "Inter-Regular", sans-serif;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ fontSize }) => fontSize};
  margin: 0;
`;

// 사용 예시
// <CustomText size="title" bold color="red">This is a title</CustomText>
// <CustomText size="body">This is body text</CustomText>
// <CustomText size="caption" color="gray">This is a caption</CustomText>
