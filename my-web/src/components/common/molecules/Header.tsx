import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const HeaderContainer = styled.div`
  display: flex;
  background-color: #40892d;
  height: 100px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  padding: 20px;
`;

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <HeaderContainer>
      <HeaderText>
        <CustomText color="white" size="caption">
          Welcome
        </CustomText>
        <CustomText color="white" size="title" bold>
          {name}
        </CustomText>
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
