import React from "react";
import Container from "../components/atoms/Container";
import CustomText from "../components/atoms/CustomText";
import AppContainer from "../components/atoms/AppContainer";

const HomePage: React.FC = () => {
  return (
    <Container>
      <CustomText size="title">본문 내용 출력</CustomText>
      <AppContainer/>
    </Container>
  );
};

export default HomePage;
