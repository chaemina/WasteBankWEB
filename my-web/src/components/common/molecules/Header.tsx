import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import { verticalScale, scale } from "../../../utils/Scale";
import CustomButton from "../atoms/CustomButton";

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

const LogoutBtn = styled(CustomButton)`
  position: absolute;
  top: ${scale(10)}px;
  right: ${scale(10)}px;
  color: #40982d;
  padding: ${scale(1)}px;
  height: ${verticalScale(25)}px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

type HeaderProps = {
  title?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  onClickLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  title,
  name,
  backgroundColor,
  onClickLogout,
}) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      {name ? (
        <>
          <LogoutBtn size="xs" rounded onClick={onClickLogout}>
            <CustomText color="#40982d">Keular</CustomText>
          </LogoutBtn>
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
