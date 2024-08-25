import { FC } from "react";
import styled from "styled-components";
import { scale } from "../../../utils/Scale";

export type Props = {
  children: any;
  bold?: boolean; 
  color?: string;
  size?: "title" | "body" | "caption";
  style?: React.CSSProperties;
};

const getFontSize = (
  size: "title" | "body" | "caption" | undefined
): string => {
  switch (size) {
    case "title":
      return `${scale(20)}px`;
    case "body":
      return `${scale(16)}px`;
    case "caption":
      return `${scale(12)}px`;
    default:
      return `${scale(16)}px`;
  }
};

const CustomText: FC<Props> = ({
  children,
  bold = false, 
  color,
  size,
  style,
  ...rest
}) => {
  const fontSize = getFontSize(size);

  return (
    <StyledText
      style={style}
      $bold={bold}
      color={color}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;

const StyledText = styled.p<{
  $bold?: boolean;
  color?: string;
  fontSize: string;
}>`
  font-family: "Inter-Regular", sans-serif;
  font-weight: ${({ $bold }) => ($bold === true ? "bold" : "normal")}; 
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ fontSize }) => fontSize};
  margin: 0;
`;


// 사용 예시
// <CustomText size="title" bold color="red">This is a title</CustomText>
// <CustomText size="body">This is body text</CustomText>
// <CustomText size="caption" color="gray">This is a caption</CustomText>
