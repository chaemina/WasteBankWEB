import styled from "styled-components";
import { verticalScale } from "../../../utils/Scale";

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: ${verticalScale(20)}px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${verticalScale(10)}px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
