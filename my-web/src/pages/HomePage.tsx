import React from "react";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header
        name="Fasten Julio Akbar"
        backgroundColor="#40892d"
        color="white"
      />
      <HomeButton role="user" />
    </Container>
  );
};

export default HomePage;
