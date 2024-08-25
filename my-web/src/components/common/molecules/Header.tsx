import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomTitle from "../atoms/CustomTitle";
import { scale, moderateScale } from "../../../utils/Scale";


type HeaderProps = {
  title?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  onClickLogout?: () => void;
};

const HeaderContainer = styled.div<{
  $backgroundColor?: string; 
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor || "none"}; // $backgroundColor로 변경
  height: ${moderateScale(100, 0.3)}px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC<HeaderProps> = ({ title, name, backgroundColor }) => {
  return (
    <HeaderContainer $backgroundColor={backgroundColor}>
      {name ? (
        <>
          <CustomText color="white" size="body">
            Welcome
          </CustomText>
          <CustomText
            style={{ padding: `${scale(5)}px` }}
            color="white"
            size="title"
            bold={true}
          >
            {name}
          </CustomText>
        </>
      ) : (
        <CustomTitle color="#40892d">{title}</CustomTitle>
      )}
    </HeaderContainer>
  );
};

export default Header;
