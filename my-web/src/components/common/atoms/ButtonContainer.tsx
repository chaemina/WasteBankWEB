import styled from "styled-components";
import { verticalScale } from "../../../utils/Scale";

type ButtonContainerProps = {
  marginBottom?: number;
  gap?: number;
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  margin-top: auto;
  margin-bottom: ${({ marginBottom }) => verticalScale(marginBottom ?? 50)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap }) => verticalScale(gap ?? 0)}px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
