import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import { verticalScale, scale } from "../../../utils/Scale";

const HeaderContainer = styled.div<HeaderProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "none"};
  height: ${verticalScale(100)}px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

type HeaderProps = {
  title?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  onClickLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, name, backgroundColor }) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      {name ? (
        <>
          <CustomText color="white" size="body">
            Welcome
          </CustomText>
          <CustomText
            style={{ padding: `${scale(5)}px` }}
            color="white"
            size="title"
            bold
          >
            {name}
          </CustomText>
        </>
      ) : (
        <CustomText color="#40892d" size="title" bold>
          {title}
        </CustomText>
      )}
    </HeaderContainer>
  );
};

export default Header;
