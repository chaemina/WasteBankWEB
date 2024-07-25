import React from "react";
import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import AppContainer from "../components/common/atoms/AppContainer";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header name={"Fasten Julio Akbar"} />
      <HomeButton />
    </Container>
  );
};

export default HomePage;
