import { FC } from "react";
import styled from "styled-components";
import { scale } from "../../../utils/Scale";

export type Props = {
  children: any;
  color?: string;
};

const CustomTitle: FC<Props> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <StyledText 
    color={color}
    {...rest} >
      {children}
    </StyledText>
  );
};

export default CustomTitle;

const StyledText = styled.p<{
  color?: string;
}>`
  font-family: "Inter-Regular", sans-serif;
  font-weight: bold;
  color: ${({ color }) => (color ? color : "#40892d")};
  font-size: ${scale(30)}px;
`;
