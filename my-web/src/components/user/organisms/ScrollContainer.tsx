import styled from "styled-components";
import { verticalScale } from "../../../utils/Scale";

export const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${verticalScale(20)}px);
`;

export const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: ${verticalScale(25)}px;
  margin-bottom: ${verticalScale(25)}px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
